function add(title, tasks, date, id, link) {
    const tbody = document.getElementById('table-container');
    let element = document.createElement('td');
    element.innerHTML = `
    <tr>
      <th scope="row">${id}</th>
      <td>${title}</td>
      <td>${tasks}</td>
      <td>${link}</td>
      <td>${new Date(date).toLocaleString()}</td>
    </tr>
    `; 
    tbody.appendChild(element);
}

function init() {
    
}