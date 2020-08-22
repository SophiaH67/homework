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
      <td id="time-${id}">${time.getFullYear()} ${('0'+time.getMonth()).slice(-2)} ${('0'+time.getDate()).slice(-2)} ${time.getHours()}:${time.getMinutes()}</td>
      <td id="actions-${id}">
        <button id="edit-${id}" class="btn btn-primary" onclick="edit(this.parentElement.parentElement.id)">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
    `;
    element.id = id;
    tbody.appendChild(element);
}

function init() {
    window.editing = false;
    $.getJSON("/api/getHomework", function (data) {
        $.each(data, function (key, val) {
            // Object { ID: 1, title: "title", tasks: "tasks", date: 1595670780000, link: "null" }
            add(val.title, val.tasks, val.date, val.ID, val.link);
        });
    });
}

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
    edit.onclick = function(){ window.save(this.parentElement.parentElement.id) }

}

function save(id) {
    window.editing = false;
    let title = document.getElementById('title-' + id);
    let tasks = document.getElementById('tasks-' + id);
    let link = document.getElementById('link-' + id);
    let time = document.getElementById('time-' + id);
    let edit = document.getElementById('edit-' + id);

    title.parentElement.id = title.id;
    tasks.parentElement.id = tasks.id;
    link.parentElement.id = link.id;
    time.parentElement.id = time.id;

    title.parentElement.innerText = title.value;
    tasks.parentElement.innerText = title.value;
    link.parentElement.innerText = title.value;
    time.parentElement.innerText = title.value;
    edit.innerText = "Edit";
    edit.onclick = function(){ window.edit(this.parentElement.parentElement.id) }

}