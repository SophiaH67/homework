/**
 * 
 * @param {String} title 
 * @param {String} tasks 
 * @param {Number} status 
 * @param {Number} date 
 * @param {String} link 
 */
function generateCard(title, tasks, date, id, link) {
    let time = new Date(date);
    console.log(link);
    console.log(link.length);
    return `<div class="card" style="width: 18rem;" id="${id}">
                <img class="card-img-top" src="${title}.png" onerror="this.src='error.png'" alt="Image of ${title}" width="247" height="160">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <a ${link.length > 6 ? "href='" + link + "' " : "onClick=' notify(\"Homework hasn't been added yet\", \"error\"); '"} class="btn btn-${link.length > 6 ? "success" : "danger"}">${tasks}</a>
                </div>
            <div class="card-footer">
                <small type="text" class="text-muted" placeholder="Date & time">${('0' + (time.getMonth() + 1)).slice(-2)}/${('0' + time.getDate()).slice(-2)} ${('0' + time.getHours()).slice(-2)}:${('0' + time.getMinutes()).slice(-2)}</small>
            </div>
            </div>`;
}

function generateEditableCard(title, tasks, date, id, link) {
    let time = new Date(date);
    return `<div class="card" style="width: 18rem;" id="${id}">
                <img class="card-img-top" src="${title}.png" onerror="this.src='error.png'" alt="Image of ${title}" width="247" height="160">
                <div class="card-body">
                    <input id="title-${id}" type="text" class="form-control" placeholder="Title" value="${title}">
                    <input id="tasks-${id}" type="text" class="form-control" placeholder="Tasks" value="${tasks}">
                    
                </div>
                <div class="card-footer">
                    <input id="time-${id}" type="text" class="form-control" placeholder="YYYY MM DD hh:mm" value="${time.getFullYear()} ${('0' + (time.getMonth() + 1)).slice(-2)} ${('0' + time.getDate()).slice(-2)} ${time.getHours()}:${time.getMinutes()}">
                    <button type="button" class="btn btn-primary" onclick="save(this.parentElement.parentElement.id)">Save</button>
                </div>
            </div>`;
}

function appendCard(html) {
    let container = document.getElementById('container');
    let element = document.createElement("div");
    element.innerHTML = html;
    container.appendChild(element);
}

function notify(msg, type) {
    let notification = document.createElement('div');
    notification.classList = "alert alert-" + type;
    notification.style.top = '-50px';
    let img = '';
    switch (type) {
        case 'danger':
            img = '/noti-danger.png';
            break;
        case 'success':
            img = '/noti-success.png';
            break;
        case 'info':
            img = '/noti-info.png';
            break;

        default:
            break;
    }
    notification.innerHTML = `<img src="${img}"> ${msg}`;
    document.body.appendChild(notification);
    let i = -20; // starting point
    let interval = setInterval(() => {
        if (i < 20) {
            i++;
            notification.style.top = `${i}px`;
            return;
        } else {
            setTimeout(() => {
                notification.parentNode.removeChild(notification);
            }, 5000);
            clearInterval(interval);
        }
    }, 10);
}