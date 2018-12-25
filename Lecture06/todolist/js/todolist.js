
window.onload = function () {
  let tasklist = document.getElementById('tasklist')
  let newtask = document.getElementById('newtask')
  let addbtn = document.getElementById('addbtn')

  function addNewTask () {
    let newTaskValue = newtask.value
    let newTaskListItem = document.createElement('li')

    newTaskListItem.innerText = newTaskValue
    newTaskListItem.className = "list-group-item"
    newTaskListItem.onclick = function (e) {
      console.log('hello')
      if (e.target.className.indexOf('disabled') === -1) {
        e.target.className = 'list-group-item disabled'
      } else {
        e.target.className = 'list-group-item'
      }
    }

    tasklist.appendChild(newTaskListItem)
    newtask.value = ""
  }

  newtask.addEventListener('keyup', function (ev) {
    if (ev.keyCode == 13) {
      addNewTask()
    }
  })


  addbtn.onclick = function () {
    addNewTask()
  }


}
