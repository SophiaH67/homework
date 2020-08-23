'use strict';
document.addEventListener("DOMContentLoaded", function(){
    $.getJSON("/api/getHomework", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            // Object { ID: 1, title: "title", tasks: "tasks", date: 1595670780000, link: "null" }
            appendCard(generateCard(val.title, val.tasks, val.date, val.ID, val.link));
        });
    });
});

