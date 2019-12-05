$(document).ready(function(){
    $("#newTaskView").hide();

    $("#addTask").click(function(){
        $("#newTaskView").show();
    })

    $("body").on('keydown', function(e){
        if(e.keyCode == 27)
            $("#newTaskView").hide();
    })

    function appendHeader(appendOn, named){
        let headerToAppend = document.createElement('header')
        headerToAppend.setAttribute('class', 'taskName')
        appendOn.appendChild(headerToAppend)
        let name = document.createElement('h4')
        if(named == 1)
            name.appendChild(document.createTextNode(document.getElementById('taskName').value))
        else
        name.appendChild(document.createTextNode('Unnamed Task'))
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
        if(document.getElementById('taskName').value == '' && document.getElementById('taskDesc').value == '')
            return
        let named = 1
        if(document.getElementById('taskName').value == '')
            named = 0
        let task = document.createElement('div')
        task.setAttribute('class', 'Task')
        document.getElementById('contToDo').appendChild(task)
        appendHeader(task, named)
        appendDescription(task)
    }
    function clearInput(){
        document.getElementById('taskName').value = ''
        document.getElementById('taskDesc').value = ''
    }
    function attProgressBar(){
        let toDo = document.getElementById('contToDo').querySelectorAll(".Task").length
        let prog = document.getElementById('contProg').querySelectorAll(".Task").length
        let review = document.getElementById('contReview').querySelectorAll(".Task").length
        let complete = document.getElementById('contComplete').querySelectorAll(".Task").length
        let total = toDo + prog + review + complete

        $('#red').css('width', (toDo/total*100)+'%')
        $('#purple').css('width', (prog/total*100)+'%')
        $('#blue').css('width', (review/total*100)+'%')
        $('#green').css('width', (complete/total*100)+'%')
    }

    $("#newTaskInput").on('keydown', function(e){
        if(e.keyCode == 13){
            createTask()
            clearInput()
            $("#newTaskView").hide();
            attProgressBar()
        }
    })

    $("#content").mouseover(attProgressBar())

    

    $('#contToDo').mouseover(function(){
        $(".Task").click(function(e){
            let task = e.currentTarget
            e.currentTarget.remove()
            document.getElementById('contProg').appendChild(task)
            attProgressBar()
        })
    })
    $('#contProg').mouseover(function(){
        $(".Task").click(function(e){
            let task = e.currentTarget
            e.currentTarget.remove()
            document.getElementById('contReview').appendChild(task)
            attProgressBar()
        })
    })
    $('#contReview').mouseover(function(){
        $(".Task").click(function(e){
            let task = e.currentTarget
            e.currentTarget.remove()
            document.getElementById('contComplete').appendChild(task)
            attProgressBar()
        })
    })
})