
    // Handle mouseover event for the 'Log in' button
    $('.login').on('mouseover', function() {
        $(this).css('background', '#68ecd6');
        $('.sign-up').css('background', '#cad8d6');
    });

    // Handle mouseout event for the 'Log in' button
    $('.login').on('mouseout', function() {
        $(this).css('background', '#cad8d6');
        $('.sign-up').css('background', '#68ecd6');
    });

    // Handle mouseover event for the 'Sign up' button
    $('.sign-up').on('mouseover', function() {
        $(this).css('background', '#cad8d6');
        $('.login').css('background', '#68ecd6');
    });

    // Handle mouseout event for the 'Sign up' button
    $('.sign-up').on('mouseout', function() {
        $(this).css('background', '#68ecd6');
        $('.login').css('background', '#cad8d6');
    });

    $(document).ready(function() {
        $('.login').click(function() {
            window.location.href = './auth.html'; // Ensure path is correct and file exists
        });
        
        $('.sign-up').click(function() {
            window.location.href = './signup.html'; // Ensure path is correct and file exists
        });
    });
    