$(document).ready(function(){
    $('#popupVideo').magnificPopup({
        type:'iframe'
    });
    $('.magnific-popup a').magnificPopup({
        type:'image',
        gallery:{
            enabled:true,
        }
    });
});
$(document).ready(function(){

   // mobaile menu
   $('.menu_ber').click(function(){
    $('.menus').slideToggle( 1000);
    });


   $('.sof-buttom').click(function(){
    $('.drop-1').slideToggle( 1000);
    });

   $('.sof-buttom2').click(function(){
    $('.drop-2').slideToggle( 1000);
    });
    
   $('.phone_search').click(function(){
    $('.search_text_phone').slideToggle( 1000);
    });




    $('.counter1').countMe(40,65);
    $('.counter2').countMe(40,65);
    $('.counter3').countMe(40,65);
    $('.counter4').countMe(40,65);




    
});

