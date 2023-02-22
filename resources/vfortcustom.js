if (window.location.protocol == "http:") {
	      console.log("You are not connected with a secure connection.")
	      console.log("Reloading the page to a Secure Connection...")
	      window.location = document.URL.replace("http://", "https://");
	    }

    if (window.location.protocol == "https:") {
	          console.log("You are connected with a secure connection.")
	        }
