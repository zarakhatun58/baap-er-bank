
document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button clicked');
    // //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.Value;
    console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.Value;
    console.log('user-password');

    // // check email $ password

    if (userEmail == 'santan@baap.com' && userPassword == 'secret') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }


})