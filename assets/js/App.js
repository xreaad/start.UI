$(document).ready(function(){
    $('.menu-toglle').click(function(){
        $( ".nav" ).toggle(
            function() {
                $( this ).addClass( "selected" );
            }, function() {
                $( this ).removeClass( "selected" );
            },
        );
        
    })
})