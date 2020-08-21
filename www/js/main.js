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
    return `<div class="card" style="width: 18rem;" id="${id}">
                <img class="card-img-top" src="${title}.png" onerror="this.src='error.png'" alt="Image of ${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${('0' + time.getMonth()).slice(-2)}/${('0' + time.getDate()).slice(-2)} ${('0' + time.getHours()).slice(-2)}:${('0' + time.getMinutes()).slice(-2)}</h6>

                    <a ${link.length < 5 ? "href='" + link +"' " : "onClick=' notify(\"Homework hasn't been added yet\", \"error\"); '"} class="btn btn-${ link.length == 0 ? "success" : "danger"}">${tasks}</a>
                </div>
            </div>`;
}

function appendCard(html) {
    let container = document.getElementById('container');
    let element = document.createElement("div");
    element.innerHTML = html;
    container.appendChild(element);
}