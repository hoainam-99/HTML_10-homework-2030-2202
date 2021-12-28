
var accountList = []

function openLocalStorage(){
    var json = localStorage.getItem('accountList')
    if(json != null && json != ''){
        accountList = JSON.parse(json)
    }
}

var result = document.getElementById('result')
result.innerHTML = ''

function showData(){

    openLocalStorage()

    for (var i = 0; i < accountList.length; i++){
        result.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${accountList[i].fullname}</td>
        <td>${accountList[i].age}</td>
        <td>${accountList[i].email}</td>
        <td>${accountList[i].password}</td>
    </tr>`
    }
}

var showBtn = document.querySelector('.show-btn')
var hideBtn = document.querySelector('.hide-btn')
var logoutBtn = document.querySelector('.logout-btn')

showBtn.addEventListener('click', showData)
hideBtn.addEventListener('click', function(){
    result.innerHTML = ''
})
logoutBtn.addEventListener('click', function(){
    window.location = 'http://127.0.0.1:5500/bt2202/index.html'
})
