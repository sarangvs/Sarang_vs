$(document).ready(function(){
    $("#contact-form").keyup(function(){
      if (this.value != this.value.replace(/[^a-zA-Z. .\.]/g, '')){
        this.value=this.value.replace(/[^a-zA-Z\.]/g, '');
        if(name.value ==='' || name.value ==null){
          message.push("Minimum 3 character is requierd");
        }
      }
    }) 
    $("#inputnumber").keyup(function(){
      if (this.value != this.value.replace(/[^0-9.\.]/g, '')){
        this.value=this.value.replace(/[^0-9\.]/g, '');
        if(mobile.value.length >=10){
          message.push("Please enter a valid mobile number")
        }

      }
    })
    $("#feedback").keyup(function(){
        if (this.value != this.value.replace(/[^a-zA-Z. .\.]/g, '')){
          this.value=this.value.replace(/[^a-zA-Z\.]/g, '');
          if(name.value ==='' || name.value ==null){
            message.push("Minimum 3 character is requierd");
          }
        }
      }) 

    $("#contact-form").validate({
            rules:{
                fname:{
                required:true,
                minlength:6
              },
              lname:{
                required:true,
                minlength:1
              
              },
              email:{
                required:true,
                email:true
              },
              contactNum:{
                required:true,
                minlength:10,
                maxlength:10
              },
              enquirY:{
                  required:true,
                  minlength:10
              }
              
            },
            submitHandler: function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwvWelKFl3L0TpURczs9j3mrSKNPRFlRSEOmi7N98b_r_ZtXiRl4e5s9cXDqBHKIwew/exec",
                data:$("#submit-form").serialize(),
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
          }
        })

  });



