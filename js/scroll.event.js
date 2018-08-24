$(document).on('ready', function() {
  $(window).on('resize', function() {
 // jQuery(document).ready(function($){
    var h_hght = $('.dash-area').outerHeight();
    var h_nav = $('.dash-side').outerHeight();
    var h_top = $('.header__top').outerHeight();

    var top;

    if(document.documentElement.clientWidth > 992) {
      $(window).scroll(function(){
        top = $(this).scrollTop();

         if ($(this).scrollTop()>65) {
          $('.dash-side').addClass('fixed-top');
        } 
        else {
          $('.dash-side').removeClass('fixed-top');
        }('fixed');
      }); 

      $(window).scroll(function(){
        top = $(this).scrollTop();
        if((h_hght-top) <= h_nav) {
          $('.dash-side').addClass('fixed');
        } 
        else {
          $('.dash-side').removeClass('fixed');
        }
      }); 
    }
  }).trigger('resize'); 
});

// $(document).on('ready', function() {
//     $(window).on('resize', function() {
//     if(document.documentElement.clientWidth <= 992) {
//         $(window).scroll(function(){
//           $('.dash-side').removeClass('fixed-top');
//           $('.dash-side').removeClass('fixed');
//       });
//     }
//   }).trigger('resize'); 
// }); 


// ===================FIXED-IN-BOTTOM===================
// $(document).on('ready', function() {
//     $(window).on('resize', function() {
//     if(document.documentElement.clientWidth >= 992) {
//         $(window).scroll(function(){
//           if ($(this).scrollTop()>65) {
//             $('.dash-side').addClass('fixed-top');
//           } else {
//             $('.dash-side').removeClass('fixed-top');
//           }
//           if ($(this).scrollTop()< $('.dash-anchor')) {
//             $('.dash-side').addClass('fixed');
//           } else {
//             $('.dash-side').removeClass('fixed');
//           }
//       });
//     }
//   }).trigger('resize'); 
// });

// $(document).on('ready', function() {
//     $(window).on('resize', function() {
//     if(document.documentElement.clientWidth < 992) {
//         $(window).scroll(function(){
//           $('.dash-side').removeClass('fixed');
//       });
//     }
//   }).trigger('resize'); 
// }); 
// ===================FIXED-IN-BOTTOM===================
// $(document).on('ready', function() {
//     $(window).on('resize', function() {
//     if(document.documentElement.clientWidth > 992) {
//         $(window).scroll(function(){
//           if ($(this).scrollTop()>6000) {
//             $('.dash-side').addClass('fixed');
//           } else {
//             $('.dash-side').removeClass('fixed');
//           }
//       });
//     }
//   }).trigger('resize'); 
// });

// $(document).on('ready', function() {
//     $(window).on('resize', function() {
//     if(document.documentElement.clientWidth < 992) {
//         $(window).scroll(function(){
//           $('.dash-side').removeClass('fixed');
//       });
//     }
//   }).trigger('resize'); 
// }); 