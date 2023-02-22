#!/usr/bin/perl -w 
#added code to extract station numbers to a config file to streamline data processing
#  -fwb-4Feb22
my @station_data; #station list
my @sorted_data; #sorted station list


$k=0;
$y=0;
while ($_=<>) {
	$_=~s/^\s+|\s+$//g; #remove spaces at the end or beginning
	#target format : 	#STA,PR,DD,MM,YY,HH,MM,VAL
	#			#IMEISTA,lat,lon,sig_strength,timestring
	while ($_ =~ /\r\n$/) {  #this works to remove multiple newlines\carriage return, etc....
		$_ =~ s/\r\n/\n/;
	}
        if ($_ =~ /\n/) {
        	chomp $_;
        }
        if ($_ =~ /\/99/) { #Removes where the board couldn't get a time and used the year 1999, which messes with gnuplot-fwb-8Aug22
		next;
	}
        if ($_ =~ /\/69/) { #Removes where the board couldn't get a time and used the year 1969, which messes with gnuplot-fwb-8Aug22
		next;
	}
	$_=~s/"//g; #remove double quotes
	$_=~s/[{}]//g; #remove the delimiting braces
	@tmp = split ',',$_; #the line is comma delimited, split into elements
	for ($i=0; $i<=$#tmp; $i++) { #traverse the array looking for data
	  if ($tmp[$i] =~ /^data/) { #if it starts with the word data...
	    @tmp2 = split ':',$tmp[$i]; #we delimit by colons
	    $tmp2[1]=~s/^\s+|\s+$//g; #remove spaces at the end or beginning
	    if ($tmp2[1]=~/^(\d+)/) { #looking for a digit match, 
		$station_data[$y]=$tmp2[1]; #add station to list of stations
		$y++;		
		if ($#tmp2 != 11) { next; } #skipping hash data and everything else. With the word data, it's 9 or 11 now that we've included GEN_INT and COND
		while ($tmp2[11] =~ /\\n$/) {  #remove multiple nl\cr, etc....
		  $tmp2[11] =~ s/\\n//;
		}#chomp $tmp2[9];
		my $month = '';
		my $day = '';
		my $year = '';
		my $hour = '';
		my $minute = '';
		$month = substr $tmp2[2],0,2;
		$day = substr $tmp2[2],2,2;
		$year = substr $tmp2[2],4,2;
		$hour = substr $tmp2[2],6,2;
		$minute = substr $tmp2[2],8,2;
		my $datestring = $month.",".$day.",".$year.",".$hour.",".$minute;
		#print STDOUT ("$tmp2[1]\n");
		#sprintf(dataPnt10ago, "%5lu:%010lu:%04d:%04u:%04u:%04u:%04u:%04u:%04u\n", STATION, DateTimelong, Tip_Count_Copy, velocity, air_temp, depth, voltage, rtc_temp, wtr_temp);
		### Note to self: if we don't see parameters here, we can not sort and print them later
		###  would be a good way to minimize data processing. -fwb-4feb22
		$new_data[$k]=$tmp2[1].",RAIN,".$datestring.",".$tmp2[3];
		$k++;
		$new_data[$k]=$tmp2[1].",VELO,".$datestring.",".$tmp2[4];
		$k++;
		$new_data[$k]=$tmp2[1].",TEMP,".$datestring.",".$tmp2[5];
		$k++;
	        $new_data[$k]=$tmp2[1].",DEPTH,".$datestring.",".$tmp2[6];
		$k++;
		$new_data[$k]=$tmp2[1].",VOLT,".$datestring.",".$tmp2[7];
		$k++;
		$new_data[$k]=$tmp2[1].",TEMP_RTC,".$datestring.",".$tmp2[8];
		$k++;
		$new_data[$k]=$tmp2[1].",WTR_TMP,".$datestring.",".$tmp2[9];
		$k++;
		$new_data[$k]=$tmp2[1].",GEN_INT,".$datestring.",".$tmp2[10];
		$k++;
		$new_data[$k]=$tmp2[1].",COND,".$datestring.",".$tmp2[11];
		$k++;
	    }
      	  }
	}
}
#Ignore this next note, actually control codes have resurfaced -fwb-4feb22
#Technically, control codes are probably not going to be used anymore in favor of the particle system data; might be grabbed by a mass data dump.
#  Don't see TEMP_RTC sticking around much longer either.		
#27May17: A regular message is 5 characters, 3 are station number, and 2 are control/status code.  Status codes are:
		#  00: regular read, system okay
		#  01: system sent the message from memory because it previously had a bad cell signal
		#  99: system was reset. These are logged separately above.
		#  There are a few stations still out there that have two digit station numbers and 3 digit control codes.
		#  They should be replaced soon. -27May17-fwb
		#	sprintf(message, "%05lu:%010lu:%04d:%04u:%04u:%04u:%04u:%04u\n", STATION,DateTimelong[RepCnt], Tip_Count_Copy[RepCnt],light[RepCnt],temp[RepCnt],depth[RepCnt],0,temp_RTC[RepCnt]);


#print STDOUT "Wes\n";

	for ($k=0;$k<$#new_data;$k++) {
		print "$new_data[$k]\n";
	}

#### begin sort the new data
####from perl cd bookshelf, function reference for sort
sub numerically {$a <=> $b}
sub alphabetically {$a cmp $b }

#### end sort the new data

#### begin looking for duplicates in the new data
sub find_duplicates () {
  my $y=1;
  my $z=0;
  if ($#sorted_data == 0) { #catches those cases where we created the file and it's a new entry.
    $condensed_data[0]=$sorted_data[0];
  }	
  for ($z=1; $z<=$#sorted_data; $z++) {
    if ($z == 1) {
      $condensed_data[0]=$sorted_data[0];
    }
    if ($sorted_data[$z] eq $sorted_data[$z-1]) {
      next;
    }
    else {
      $condensed_data[$y]=$sorted_data[$z];
      $y++;
    }
  }
}
#### end looking for duplicates in the new data	
for ($y=0; $y<=$#station_data; $y++) {
 $station_data[$y]=10*int($station_data[$y]/10);
}
@sorted_data = sort alphabetically @station_data;
find_duplicates();

$confpath = "/mnt/space/workspace/instrument_processing/scripts";
open (CONF_FILE, ">", "$confpath/0_script_runner_conf.csv") or die "Can\'t find CONF_FILE\n";

print CONF_FILE "#Concept: this file is designed to move the individual stations and parameters out of the script\n";
print CONF_FILE "# files so that it is easier to manage, especially since we're about to add a buuuuunch of new\n";
print CONF_FILE "# stations. \n";
print CONF_FILE "# format should be: \n";
print CONF_FILE "#	script_name: stations:listNo: StaNo1,StaNo2,...\n";
print CONF_FILE "#	script_name: stat_desc:listNo: StaNo1|Desc1,StaNo2|Desc2\n";
print CONF_FILE "#	script_name: params: param_list\n";
print CONF_FILE "# -fwb-23Jan22\n";
print CONF_FILE "#\n";
print CONF_FILE "global_station_list:stations"; #600,5000,5100,5200,7500,7600
for ($y=0; $y<=$#condensed_data; $y++) {
 print CONF_FILE ":$condensed_data[$y]";
}
print CONF_FILE "\n#\n";
print CONF_FILE "#alerts_not_reporting_2hrs.pl:params:";#0:RAIN
print CONF_FILE "#alerts_not_reporting_2hrs.pl:stations:";#0:600,5000,5100,5200,7500,7600,9000
print CONF_FILE "#alerts_not_reporting_2hrs.pl:stat_desc:";#0:600|Test,5000|Harmon_Bluff,5100|Vernon_River,5200|Bacon_Golf,7500|Test,7600|Test,9000|Test
print CONF_FILE "\n";
print CONF_FILE "#batch_plot_interactive_commands.sh:stations:";#0:600,7500,7600,9000
print CONF_FILE "\n";
print CONF_FILE "#batch_plot_interactive_commands.Sav.sh:stations:";#0:5000,5100,5200
print CONF_FILE "\n";
print CONF_FILE "#calc_stats.pl:params:";#0:RAIN
print CONF_FILE "#calc_stats.pl:stations:";#0:600,5000,5100,5200,7500,7600,9000
print CONF_FILE "\n";
print CONF_FILE "#calc_stats_alldata.pl:params:";#0:RAIN,LIGHT,TEMP,DEPTH,ANALOG,TEMP_RTC
print CONF_FILE "#calc_stats_alldata.pl:stations:";#0:600,5000,5100,5200,7500,7600,9000
print CONF_FILE "#calc_stats_alldata.pl:stat_desc:";#0:
print CONF_FILE "\n";
print CONF_FILE "#calc_stats_alldata.Sav.pl:params:";#0:RAIN,LIGHT,TEMP,DEPTH,ANALOG,TEMP_RTC
print CONF_FILE "\n";
print CONF_FILE "#alerts_all_params.pl:params:";#0:RAIN
print CONF_FILE "#alerts_all_params.pl:stations:";#0:1,2,3,4,5,6,7,8,9,10,11,12,50,51,52,75,76,90
print CONF_FILE "#alerts_all_params.pl:stat_desc:";#0:
print CONF_FILE "\n";

close (CONF_FILE);

$confpath = "/mnt/space/workspace/instrument_processing/scripts/gnuplot";
open (CONF_FILE, ">", "$confpath/station_files.csv") or die "Can\'t find CONF_FILE\n";

for ($y=0; $y<=$#condensed_data; $y++) {
 print CONF_FILE "$condensed_data[$y]";
 if ($y<$#condensed_data) {
	print CONF_FILE "\n";
 }
}
close (CONF_FILE);

      
