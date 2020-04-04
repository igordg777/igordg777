// let arrPeople = require('./PhoneBook');
// console.log('arrPeople')

let arrDepartment = [];
arrPeople.forEach(function (e) {
    if (!arrDepartment.includes(e.department)) {
        arrDepartment.push(e.department)
    }
})
let select = document.getElementById('department');
for (let i = 0; i < arrDepartment.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = arrDepartment[i];
    option.value = arrDepartment[i];
    select.appendChild(option);
}

for (let i = 0; i < arrPeople.length; i++) {
    let newTr = document.createElement('tr');
    newTr.classList.add(`tr${[i]}`);

    let newTdNumber = document.createElement('td');
    newTdNumber.classList.add(`number`);
    newTdNumber.classList.add(`number${[i]}`);
    newTdNumber.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTdNumber);
    newTdNumber.innerHTML = i + 1;

    let newTdname = document.createElement('td');
    newTdname.classList.add(`name${[i]}`);
    newTdname.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTdname);
    newTdname.innerHTML = arrPeople[i].name || '';

    let newTdphone = document.createElement('td');
    newTdphone.classList.add(`phone${[i]}`);
    newTdphone.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTdphone);
    newTdphone.innerHTML = arrPeople[i].phone || '';

    let newTdmobile = document.createElement('td');
    newTdmobile.classList.add(`mobile${[i]}`);
    newTdmobile.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTdmobile);
    newTdmobile.innerHTML = arrPeople[i].mobile || '';

    let newTdemail = document.createElement('td');
    newTdemail.classList.add(`email${[i]}`);
    newTdemail.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTdemail);
    newTdemail.innerHTML = arrPeople[i].email ? ('<a href="mailto:' + arrPeople[i].email + '">' + arrPeople[i].email + '</a>') : '';

    let newTdposition = document.createElement('td');
    newTdposition.classList.add(`position${[i]}`);
    newTdposition.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTdposition);
    newTdposition.innerHTML = arrPeople[i].position || '';

    let newTddepartment = document.createElement('td');
    newTddepartment.classList.add(`position${[i]}`);
    newTddepartment.setAttribute('bgcolor', '#f2f2f2');
    newTr.appendChild(newTddepartment);
    newTddepartment.innerHTML = arrPeople[i].department || '';

    document.getElementById('tableId').appendChild(newTr)
    newTr.classList.add(`tr${[i]}`);
}


function showAll() {
    let table = document.getElementById("tableId");
    let tr = table.getElementsByTagName("tr");
    for (let i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            tr[i].style.display = "";
        }
    }
}

function result() {
    let count = 0;
    let table = document.getElementById("tableId");
    let tr = table.getElementsByTagName("tr");
    for (let i = 2; i < tr.length; i++) {
        if (tr[i].style.display === "") {
            count++
        }
    }
    document.getElementById('result').innerHTML = "Результаты поиска: " + `<span style='color: red'>${count}</span>`
}

function searchAll() {
    showAll();
    if (document.getElementById("inputNumber").value.trim().length > 0)
        searchNumber();
    if (document.getElementById("inputName").value.trim().length > 0)
        searchName();
    if (document.getElementById("inputTel").value.trim().length > 0)
        searchTel();
    if (document.getElementById("inputMob").value.trim().length > 0)
        searchMob();
    if (document.getElementById("inputEmail").value.trim().length > 0)
        searchEmail();
    if (document.getElementById("inputPosition").value.trim().length > 0)
        searchPosition();
    if (document.getElementById("department").value !== '')
        searchDepartment();
    result()
}

function searchNumber() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputNumber");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td)
            if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                tr[i].style.display = "none";
    }

}

function searchName() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputName");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td)
            if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                tr[i].style.display = "none";
    }

}

function searchTel() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputTel");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td)
            if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                tr[i].style.display = "none";
    }

}

function searchMob() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputMob");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td)
            if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                tr[i].style.display = "none";
    }

}

function searchEmail() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputEmail");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td)
            if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                tr[i].style.display = "none";
    }

}

function searchPosition() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputPosition");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td)
            if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                tr[i].style.display = "none";
    }

}

function searchDepartment() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("department")
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    if (filter !== '') {
        for (i = 2; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[6];
            if (td)
                if (!(td.innerHTML.toUpperCase().indexOf(filter) > -1))
                    tr[i].style.display = "none";
        }
    }
}

function thanks() {
    swal({
        title: "Спасибо проекту!",
        text: "Проект распространяется бесплатно и с открытым исходным кодом. Если Вы хотите сказать спасибо проекту и поддержать разработчика какой-либо символической суммой, то это можно сделать через систему \"Сбербанк онлайн\" по номеру телефона 8-914-154-5189",
        icon: "success",
        button: "Ok!",
    });
}