$(document).ready(function(){
    $("#newTaskView").hide();

    $("#addTask").click(function(){
        $("#newTaskView").show();
    })

    $("body").on('keydown', function(e){
        if(e.keyCode == 27)
            $("#newTaskView").hide();
    })

    function appendHeader(appendOn){
        let headerToAppend = document.createElement('header')
        headerToAppend.setAttribute('class', 'taskName')
        appendOn.appendChild(headerToAppend)
        let name = document.createElement('h4')
        name.appendChild(document.createTextNode(document.getElementById('taskName').value))
        headerToAppend.appendChild(name)
    }
    function appendDescription(appendOn){
        let divToAppend = document.createElement('div')
        divToAppend.setAttribute('class', 'taskContent')
        appendOn.appendChild(divToAppend)
        let name = document.createElement('p')
        name.appendChild(document.createTextNode(document.getElementById('taskDesc').value))
        divToAppend.appendChild(name)
    }
    function createTask(){
        let task = document.createElement('div')
        task.setAttribute('class', 'Task')
        document.getElementById('contToDo').appendChild(task)
        appendHeader(task)
        appendDescription(task)
    }
    function clearInput(){
        document.getElementById('taskName').value = ''
        document.getElementById('taskDesc').value = ''
    }

    $("#newTaskInput").on('keydown', function(e){
        if(e.keyCode == 13){
            createTask()
            clearInput()
            $("#newTaskView").hide();
        }
    })

    $(".taskName").click(function(e){
        console.log("fui clicado")
    })
})