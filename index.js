let arrPeople = [{
    name: 'Petr',
    phone: 78554,
    mobile: 89141657879,
    email: '1112111.ru',
    position: 'chief',
    department: 'IT'
}, {
    name: 'Сергей',
    phone: 34553,
    mobile: 89256544564,
    email: '788787@8989.ru',
    position: 'Заместитель',
    department: 'IT'
}, {
    name: 'Иван',
    phone: 234234,
    mobile: 8925343543,
    email: '788787@8989.ru',
    position: 'Специалист',
    department: 'IT'
}, {
    name: 'Василий',
    phone: 2343243,
    mobile: 89273543453,
    email: '67575@ккк.ru',
    position: 'Инженер',
    department: 'IT'
}, {name: 'Федор', phone: 45433, mobile: 89255645656, email: '78676@hjgg.ru', position: 'Инструктор', department: 'IT'}
]

for (let i = 0; i < arrPeople.length; i++) {
    let newTr = document.createElement('tr');
    newTr.classList.add(`tr${[i]}`);

    let newTdNumber = document.createElement('td');
    newTdNumber.classList.add(`number`);
    newTdNumber.classList.add(`number${[i]}`);
    newTdNumber.setAttribute('bgcolor', '0ab169');
    newTr.appendChild(newTdNumber);
    newTdNumber.innerHTML = i + 1;

    let newTdname = document.createElement('td');
    newTdname.classList.add(`name${[i]}`);
    newTdname.setAttribute('bgcolor', 'lightgrey');
    newTr.appendChild(newTdname);
    newTdname.innerHTML = arrPeople[i].name;

    let newTdphone = document.createElement('td');
    newTdphone.classList.add(`phone${[i]}`);
    newTdphone.setAttribute('bgcolor', 'lightgrey');
    newTr.appendChild(newTdphone);
    newTdphone.innerHTML = arrPeople[i].phone;

    let newTdmobile = document.createElement('td');
    newTdmobile.classList.add(`mobile${[i]}`);
    newTdmobile.setAttribute('bgcolor', 'lightgrey');
    newTr.appendChild(newTdmobile);
    newTdmobile.innerHTML = arrPeople[i].mobile;

    let newTdemail = document.createElement('td');
    newTdemail.classList.add(`email${[i]}`);
    newTdemail.setAttribute('bgcolor', 'lightgrey');
    newTr.appendChild(newTdemail);
    newTdemail.innerHTML = arrPeople[i].email;

    let newTdposition = document.createElement('td');
    newTdposition.classList.add(`position${[i]}`);
    newTdposition.setAttribute('bgcolor', 'lightgrey');
    newTr.appendChild(newTdposition);
    newTdposition.innerHTML = arrPeople[i].position;

    let newTddepartment = document.createElement('td');
    newTddepartment.classList.add(`position${[i]}`);
    newTddepartment.setAttribute('bgcolor', 'lightgrey');
    newTr.appendChild(newTddepartment);
    newTddepartment.innerHTML = arrPeople[i].department;

    document.getElementById('tableId').appendChild(newTr)
    newTr.classList.add(`tr${[i]}`);
}

function showAll() {
    let table = document.getElementById("tableId");
    let tr = table.getElementsByTagName("tr");
    for (let i = 2; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            tr[i].style.display = "";

        }
    }

}

function searchAll() {
    showAll()
    if(document.getElementById("inputNumber").value.trim().length > 0)
        searchNumber()
    if(document.getElementById("inputName").value.trim().length > 0)
        searchName()
    if(document.getElementById("inputTel").value.trim().length > 0)
        searchTel()
    if(document.getElementById("inputMob").value.trim().length > 0)
        searchMob()
    if(document.getElementById("inputEmail").value.trim().length > 0)
        searchEmail()
    if(document.getElementById("inputPosition").value.trim().length > 0)
        searchPosition()
    if(document.getElementById("inputDepartment").value.trim().length > 0)
        searchDepartment()
        }


function searchNumber() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputNumber");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function searchName() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputName");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}


function searchTel() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputTel");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function searchMob() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputMob");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}


function searchEmail() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputEmail");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function searchPosition() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputPosition");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function searchDepartment() {

    var input, filter, table, tr, td;
    input = document.getElementById("inputDepartment");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableId");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                // tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}