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
    $("#contact-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwvWelKFl3L0TpURczs9j3mrSKNPRFlRSEOmi7N98b_r_ZtXiRl4e5s9cXDqBHKIwew/exec",
            data:$("#contact-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
})

       