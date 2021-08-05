$(document).ready(function(){
    $("#contact-form").validate({
       rules:{
           fname:{
               required:true,
               minlength:4
           },
           lname:{
               required:true,
               minlength:1
           },
           emailAdress:{
               email:true

           }
       }
      

    })
})