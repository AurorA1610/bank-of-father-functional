document.getElementById( 'login-btn' ).addEventListener( 'click', function() {
    //get user's email
    const emailField = document.getElementById( 'user-email' );
    const userEmail = emailField.value;
    //get user's password
    const passwordField = document.getElementById( 'user-password' );
    const userPassword = passwordField.value;
    //check accuracy
    if( userEmail == 'offspring@father.com' && userPassword == 'secret' ) {
        window.location.href = 'banking.html';
    }
} )