let listaContainer = document.getElementById('listaContainer')
let tarefa = document.getElementById('tarefa')
let tarefinha1head = document.getElementById('tarefinha1head')
let tarefinha2head = document.getElementById('tarefinha2head')
let tarefinha3head = document.getElementById('tarefinha3head')
let dropZone = document.getElementById('dropZone')

function dragstart_handler(ev) {
    console.log("dragStart")
    // Adiciona o id do elemento em questão ao objeto de transferência de dados (dataTransfer)
    ev.dataTransfer.setData("text/plain", ev.target.id)
    ev.dataTransfer.dropEffect = "copy";
   
}

tarefinha1head.addEventListener("dragstart", dragstart_handler)
// dragstart_handle()

let dragged
tarefa.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target
      
})

tarefa.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault()
  })

dropZone.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault()
  console.log('dropzone')
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = ""
    dragged.parentNode.removeChild(dragged)
    event.target.appendChild(dragged)
  }
})