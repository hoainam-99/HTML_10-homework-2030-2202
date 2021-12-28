var register = document.querySelector('.register')
var registerBtn = document.querySelector('.js-register')
var closeRegister = document.querySelector('.close-btn')

registerBtn.addEventListener('click', function(){
    register.classList.remove('hidden-register')
})

closeRegister.addEventListener('click', function(){
    register.classList.add('hidden-register')
})

var accountList = []

var fullnameTag = document.getElementById('register-fullname_id')
var ageTag = document.getElementById('register-age_id')
var emailTag = document.getElementById('register-email_id')
var pwdTag = document.getElementById('register-pwd_id')

function saveLocalStorage(){
    var json = JSON.stringify(accountList)

    localStorage.setItem('accountList', json)
}

function openLocalStorage(){
    var json = localStorage.getItem('accountList')
    if(json != null && json != ''){
        accountList = JSON.parse(json)
    }
}

function addAccount(){
    var account = {
        "fullname" : fullnameTag.value,
        "age" : ageTag.value,
        "email" : emailTag.value,
        "password" : pwdTag.value
    }

    openLocalStorage()
    var t = 0;
    for (i = 0; i < accountList.length; i++){
        if(accountList[i].email == account.email){
            accountList[i].fullname = account.fullname
            accountList[i].age = account.age
            accountList[i].password = account.password
            t = 1
        }
    }
    if(t == 0){
        accountList.push(account)
    }

    saveLocalStorage()
    return false
}

var loginEmailTag = document.getElementById('login-email_id')
var loginPwdTag = document.getElementById('login-pwd_id')

function loginCheck(){
    var login = {
        "loginEmail" : loginEmailTag.value,
        "loginPwd" : loginPwdTag.value
    }
    var t2 = 0
    openLocalStorage()
    for ( i = 0; i < accountList.length; i++){
        if(accountList[i].email == login.loginEmail && accountList[i].password == login.loginPwd){
            window.location = 'http://127.0.0.1:5500/bt2202/show.html'
            t2 = 1
        }
    }
    if (t2 == 0) {
        alert("Tài khoản hoặc mật khẩu không chính xác")
        loginEmailTag.value = ''
        loginPwdTag.value = ''
    }
    return false
}
