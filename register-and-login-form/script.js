// function fired onload
(function() {
    var reg = localStorage.getItem('registered');
    if (typeof reg != 'undefined' && reg == '1') {
        alert('You have been registered!');
        localStorage.setItem('registered', '0');
    } 

    var page = window.location.href.split('/');
    page = page[page.length-1];

    if (page == 'welcome.html') {
        var logged = localStorage.getItem('logged');
        if (logged != '' && logged != null) { 
             user = JSON.parse(logged);
             document.getElementById("message").innerHTML = 'Welcome to the our site ' + user.name;
        }
    }
 })();

// storing input from register-form
function store() {
    let getNames =  localStorage.getItem('usernames');
    let name = document.getElementById('uName');
    let pw = document.getElementById('uPw');

    if (getNames == null) {
        var users = [];
        var newUser = {
            name: name.value,
            password: pw.value
        };
        
        users.push(newUser);
        localStorage.setItem('usernames', JSON.stringify(users));
    } else {
        var users = JSON.parse(getNames);
        var newUser = {
            name: name.value,
            password: pw.value
        };

        users.push(newUser);
        localStorage.setItem('usernames', JSON.stringify(users));
    }

    localStorage.setItem('registered', '1');
    window.location.href = "login.html";
}

// check if stored data from register-form is equal to entered data in the login-form

function check() {
    // stored data from the register-form
    var usrName = document.getElementById('userName').value;
    var usrPw = document.getElementById('userPw').value;

    var storedName = localStorage.getItem('usernames');
    if (storedName != null) {
        var users = JSON.parse(storedName);
        var i;
        var logSuccess = false;
        for (i = 0; i < users.length; i++) {
             if (usrName == users[i].name  && usrPw == users[i].password ) {
                localStorage.setItem('logged', JSON.stringify(users[i]));
                logSuccess = true;
                window.location.href = "welcome.html";
            }
        }
    } 

    if (!logSuccess) {
        alert('Access denied. Valid username and password is required. Please REGISTER FIRST');
    }
    
}

function logout() {
    localStorage.setItem('logged', '');
    window.location.href = "login.html";
}

function register() {
    window.location.href = "index.html";
}

function login() {
    window.location.href = "login.html";
}
