'use strict';
function add(title, tasks, date, id, link) {
    const tbody = document.getElementById('table-container');
    let element = document.createElement('tr');
    let time = new Date(date);
    element.innerHTML = `
    <tr>
      <th scope="row">${id}</th>
      <td id="title-${id}">${title}</td>
      <td id="tasks-${id}">${tasks}</td>
      <td id="link-${id}">${link}</td>
      <td id="time-${id}">${time.getFullYear()} ${('0' + (time.getMonth()+1)).slice(-2)} ${('0' + time.getDate()).slice(-2)} ${time.getHours()}:${time.getMinutes()}</td>
      <td class="float-right" id="actions-${id}">
        <button id="edit-${id}" class="btn btn-primary" onclick="edit(this.parentElement.parentElement.id)">Edit</button>
        <button class="btn btn-danger" onclick="remove(this.parentElement.parentElement.id)">Delete</button>
      </td>
    </tr>
    `;
    element.id = id;
    tbody.appendChild(element);
}

document.addEventListener("DOMContentLoaded", function(){
    window.editing = false;
    $.getJSON("/api/getHomework", function (data) {
        $.each(data, function (key, val) {
            // Object { ID: 1, title: "title", tasks: "tasks", date: 1595670780000, link: "null" }
            add(val.title, val.tasks, val.date, val.ID, val.link);
        });
    });
});

function edit(id) {
    window.editing = true;
    let title = document.getElementById('title-' + id);
    let tasks = document.getElementById('tasks-' + id);
    let link = document.getElementById('link-' + id);
    let time = document.getElementById('time-' + id);
    let edit = document.getElementById('edit-' + id);

    title.innerHTML = `<input class="form-control" id="${title.id}" type="text" value="${title.innerText}">`;
    tasks.innerHTML = `<input class="form-control" id="${tasks.id}" type="text" value="${tasks.innerText}">`;
    link.innerHTML = `<input class="form-control" id="${link.id}" type="text" value="${link.innerText}">`;
    time.innerHTML = `<input class="form-control" id="${time.id}" type="text" value="${time.innerText}">`;
    edit.innerText = "Save";

    title.id = "";
    tasks.id = "";
    link.id = "";
    time.id = "";
    edit.onclick = function () { window.save(this.parentElement.parentElement.id) }

}

function save(id) {
    window.editing = false;
    let title = document.getElementById('title-' + id);
    let tasks = document.getElementById('tasks-' + id);
    let link = document.getElementById('link-' + id);
    let time = document.getElementById('time-' + id);
    let edit = document.getElementById('edit-' + id);

    let data = {};
    data.title = title.value;
    data.tasks = tasks.value;
    data.link = link.value;
    data.id = id;
    let dateArr = time.value.split(' ');
    let year = dateArr[0];
    let month = dateArr[1] -1;
    let day = dateArr[2];
    let timeArr = dateArr[3].split(':');
    let hour = timeArr[0];
    let minute = timeArr[1];
    data.date = new Date(year, month, day, hour, minute, 0).getTime();

    title.parentElement.id = title.id;
    tasks.parentElement.id = tasks.id;
    link.parentElement.id = link.id;
    time.parentElement.id = time.id;

    title.parentElement.innerText = title.value;
    tasks.parentElement.innerText = tasks.value;
    link.parentElement.innerText = link.value;
    time.parentElement.innerText = time.value;
    edit.innerText = "Edit";
    edit.onclick = function () { window.edit(this.parentElement.parentElement.id) }

    $.ajax({
        type: "POST",
        url: '/api/editHomework',
        data: data
    });

}

function remove(id) {
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
    
    let data = {};
    data.id = id;
    $.ajax({
        type: "POST",
        url: '/api/deleteHomework',
        data: data
    });
}