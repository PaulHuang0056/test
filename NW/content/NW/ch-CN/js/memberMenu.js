$(document).ready(function(){

    // login Menu
    $('.header_middle_member').hide();
    $('.header_middle_login').show();
    $('.loginForm_subbtn_input').on("click",function(){
          $('.header_middle_member').toggle();
          $('.header_middle_login').toggle();
    });

    $('header_middle_member_menu_logout').on("click",function(){
          $('.header_middle_member').toggle();
          $('.header_middle_login').toggle();
    });

    // 會員選單
    $('.header_middle_member_menu').hide();
    $('.memberBtn').on("click",function(){
        $('.header_middle_member_menu').toggle();
    });
});

