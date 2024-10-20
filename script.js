function validateLogin(){
        
        let username = document.getElementById('username').value.trim();
        let password = document.getElementById('password').value.trim();
        if (!username) {
           alert('Username cannot be empty.');
            return;
        }
        if (!password) {
            alert('Password cannot be empty.');
            return;
        }
        if (username === 'admin' && password === '1234') {
            alert('Login successful!');
        } else {
            alert('Incorrect username or password.');
        }
    }