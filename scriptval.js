$(document).ready(function(){
  $.validator.addMethod("alpha", function (value, element) {
      return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
  });

  jQuery.validator.addMethod("noSpace", function (value, element) {
      return value == '' || value.trim('').length >= 3;
  }, "Minimum 3 character is required");

  $.validator.addMethod("isEmail", function (value, element) {
      return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
  });
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
  $("#contact-form").validate({
      rules:{
          fname:{
              required:true,
              alpha:true,
              noSpace:true
          },
          lname:{
              required:true,
              alpha:true,
              minlength:1
          },

          emailAdress:{
              required:true,
              email:true, 
              isEmail:true
          },
          
          contactNum:{
              required:true,
              digits:true,
              minlength:10,
              maxlength:10,
              number:true
  
          },

          enquirY:{
              required:true,
              minlength:10
          }

      },
      messages:{
          
          fname:{
              
              alpha:"Please enter your valid name"
          },
          lname:{
              alpha:"Please enter letters only"
          },
          contactNum:{
      
              minlength:"Enter a valid mobile number",
              maxlength:"Enter a valid mobile number"
          },
          enquirY:{
              minlength:"Please fill this field"
          }
      },
      submitHandler:function(form){

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
   }  

  })

})