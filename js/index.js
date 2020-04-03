let arrPeople = [{
    name: 'Петр Сергеев',
    phone: "78-55-67",
    mobile: 89141657879,
    email: '1112@111.ru',
    position: 'Начальник отдела',
    department: 'IT'
}, {
    name: 'Сергей Васильев',
    phone: "34-55-38",
    mobile: 89256544564,
    email: '788787@8989.ru',
    position: 'Заместитель',
    department: 'IT'
}, {
    name: 'Иван Пронин',
    phone: "23-42-34",
    mobile: 8925343543,
    email: '788787@8989.ru',
    position: 'Специалист',
    department: 'Кадровое обеспечение'
}, {
    name: 'Василий Алтаев',
    phone: "23-43-43",
    mobile: 89273543453,
    email: '67575@ккк.ru',
    position: 'Инженер',
    department: 'Финансовая служба'
}, {
    name: 'Федор Константинополев',
    phone: "45-43-39",
    mobile: 89255645656,
    email: '78676@hjgg.ru',
    position: 'Инструктор',
    department: 'Маркетинг'
}, {
    name: 'Арсений Петров',
    phone: "78-55-67",
    mobile: 89141657879,
    email: '111@2111.ru',
    position: 'Инженер',
    department: 'IT'
}, {
    name: 'Юрий Плотников',
    phone: "34-55-38",
    mobile: 89256544564,
    email: '788787@8989.ru',
    position: 'Администратор',
    department: 'IT'
}, {
    name: 'Борис Веденский',
    phone: "23-42-34",
    mobile: 8925343543,
    email: '788787@8989.ru',
    position: 'Специалист',
    department: 'Кадровое обеспечение'
}, {
    name: 'Константин Перцев',
    phone: "23-43-43",
    mobile: 89273543453,
    email: '67575@ккк.ru',
    position: 'Администратор',
    department: 'Маркетинг'
}, {
    name: 'Владимир Песков',
    phone: "45-43-39",
    mobile: 89255645656,
    email: '78676@hjgg.ru',
    position: 'Инструктор',
    department: 'Маркетинг'
}
]

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
}

function searchNumber() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("inputNumber");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
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
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
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
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
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
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
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
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
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
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function searchDepartment() {
    console.log(111)
    var input, filter, table, tr, td, i;
    input = document.getElementById("department")
    filter = input.value.toUpperCase();
    console.log(filter)
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    if (filter !== '') {
        for (i = 2; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[6];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    //tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}