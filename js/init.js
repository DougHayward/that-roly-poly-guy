(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $(document).ready(function () {
            $('select').material_select();
        });
        $(document).ready(function(){
            $('.carousel').carousel();
            $('.modal').modal();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space