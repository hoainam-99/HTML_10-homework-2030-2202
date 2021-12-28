
var accountList = []

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
        <td><button class="del-btn" onclick="delAccount(${i})">Delete</button></td>
    </tr>`
    }
}

showData()

var logoutBtn = document.querySelector('.logout-btn')

logoutBtn.addEventListener('click', function(){
    window.location = 'https://hoainam-99.github.io/HTML_10-homework-2030-2202/bt2202/index.html'
})

function delAccount(index){
    let text = confirm('Are you sure to delete this account??')
    if(!text) return
    openLocalStorage()
    accountList.splice(index, 1)
    saveLocalStorage()
    result.innerHTML = ''
    showData()
}
