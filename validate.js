var check = function()
{
  if (document.getElementById('password').value == document.getElementById('confirm_password').value) 
    {
   	 document.getElementById('message').style.color = 'green';
   	 document.getElementById('message').innerHTML = 'matching';
    }
  else
   {
  	  document.getElementById('message').style.color = 'red';
  	  document.getElementById('message').innerHTML = 'not matching';
   }
}


var validate=function() 
	{
	  if (document.getElementById('email').value=="!"|"^"|"%"|"$"|"("|")"|"?")
	  {
	  	 document.getElementById('msg').style.color = 'red';
   		 document.getElementById('msg').innerHTML = 'not valid';
	   	 return (true)
	  }
	//  alert("You have entered an invalid email address!")
	else
	{
		document.getElementById('msg').style.color = 'green';
   		 document.getElementById('msg').innerHTML = 'not valid';	
	  
	}
}

function myFunction() 
{
  alert("Your info is successfully registered...");
}


