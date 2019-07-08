let email, password, changePass, newPassword, reenterPass;
let user = 'user@gmail.com', userPass = 'UserPass';
let admin = 'admin@gmail.com', adminPass = 'AdminPass';
let emailMinLength = 6, passMinLength = 5;
email = prompt('Please enter your email', '');
if (email === null || email === '') {
    alert('Canceled');
} else if (email.length < emailMinLength) {
    alert(`I don't know any emails having name length less than 6 symbols`);
} else if (email !== user && email !== admin) {
    alert(`I don’t know you`);
} else {
    password = prompt('Please enter your password', '');
    if (password === null || password === '') {
        alert('Canceled');
    } else if (password === userPass && email === user || password === adminPass && email === admin) {
        changePass = confirm('Do you want to change your password?');
        if (!changePass) {
            alert('You have failed the change.');
        } else {
            password = prompt('Please enter your old password', '');
            if (password === null || password === '') {
                alert('Canceled');
            } else if (password === userPass && email === user || password === adminPass && email === admin) {
                newPassword = prompt('Please enter your new password', '');
                if (newPassword.length < passMinLength) {
                    alert(`It’s too short password. Sorry.`);
                } else {
                    reenterPass = prompt('Please reenter your new password', '');
                    if (reenterPass !== newPassword) {
                        alert(`You wrote the wrong password.`);
                    } else {
                        password = newPassword;
                        alert(`You have successfully changed your password.`);
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
}
