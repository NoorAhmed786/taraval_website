$(document).ready(function(){

   if($('.gallery').length)
    $('.gallery').slick({
    dots: false,
    arrows: false,
    //infinite: true,
    //speed: 500,
    //fade: true,
    //cssEase: 'linear',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000
    })

    if($('.countercontent').length)
    $('.counter').counterUp({
      delay: 20,
      time: 2000
      });

    if($('.carousel').length)
    $('.carousel').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000
        })

        if($("#menu").length)
      $("#menu").accordion({collapsible: true, active: false});

      //   jQuery(".form").validate({
      //     rules: {
      //         fname : "required",
      //         email:{
      //             required: true,
      //             email: true
      //         }
      //     },
      //     messages: {
      //         fname: "Please enter your firstname",
      //         email: "Please enter a valid email address",
      //     }
      // })

  //       const notes = document.querySelectorAll('.ani-boxes > div')

  // for(var i=0;i<notes.length;i++){
  
  //   notes[i].addEventListener('mouseover',function(e) { 
  //       const ani = e.target.dataset.ani;
  //       e.target.classList.add('animated', 'infinite', ani);
  //     window.setTimeout(function(){
  //       e.target.classList.remove('animated', 'infinite', ani);
  //     }, 3000);
  //   });
  // }

  

  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var panel = this.nextElementSibling;
  //     if (panel.style.maxHeight) {
  //       panel.style.maxHeight = null;
  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + "px";
  //     } 
  //   });
  // }

  if($('.form-2').length){
    $(".form-2").validate({
      rules:{
      name:{
          required:true,
          letters:true,
      },email:{
          required:true,
          required:true,
      }
    }
    })
  }
  })
  if($('#getaquote-form').length){

  jQuery('#getaquote-form').validate({
    rules:{
        name : "required",
        email :{
            required: true,
            email: true
        },

        password:{
            required: true,
            minlength: 5
        }
    },

    messages:{
        name : "Please enter your name",
        email: "Please enter Valid Email Id",
        password :{
            required: "Create a strong password",
            minlength: "Password must be 5 character long"
        }
    }
})
  }
  
