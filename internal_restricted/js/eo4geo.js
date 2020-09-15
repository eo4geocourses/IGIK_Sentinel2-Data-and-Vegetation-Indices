			function linkFunction() {
			 
					  	var x  = window.location.href;
						 
						  for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) 
						  {     var b = c[a];   
								b.getAttribute("href");  
								if (b.getAttribute("href").startsWith("#"))
								{
									b.target = "_self";
									
								}
						  }
						 
					}