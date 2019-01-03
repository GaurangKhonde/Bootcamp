function signup(){
username = $('#username').val();
password = $('#password').val();

 
$.ajax({
    type: "POST",
    url: "backend/signup_ajax.php",
    data: {
        //data goes here
        username,
        password
    },
    success: function (data) {
       //data is returned here
   if(data == 'success'){
       alert("Successfully Registered");
        window.location = '';

   }else{
       alert("There was some problem, Please try again later");
   }

    }
});

}