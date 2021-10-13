//localStorage.clear()
// Add note to local storage
let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let textSpace = document.getElementById('note-text');
let container = document.querySelector('.notes-container');
let addTxt = document.getElementById("note-text");
let cancelBtn = document.querySelector('.can-Btn');


if (!localStorage.getItem(0)){
  localStorage.setItem(0,'0');
}
let idxs = localStorage.getItem(0).split(' ');
let lastIndex = idxs[idxs.length-1];


addBtn.addEventListener('click',saveNote);
container.addEventListener('click', modify);
cancelBtn.addEventListener('click',cancelEdit)

document.getElementById('note-text').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +"\t" + this.value.substring(end);
    // put caret at right position again
    this.selectionStart =
    this.selectionEnd = start + 1;
  }
});

function saveNote(){
  if (Boolean(textSpace.value)){
      let newIndex = Number(lastIndex) + 1;
      let d = new Date();
      let noteData = {'creation':d.toString(), 'modified':d.toString(),'title': addTitle.value,
      'note':addTxt.value};
      let strData = JSON.stringify(noteData);
      localStorage.setItem(newIndex, strData);
      textSpace.value = '';
      let renewIndexes = localStorage.getItem(0) + ' '  + String(newIndex);
      localStorage.setItem(0, renewIndexes);
      idxs = localStorage.getItem(0).split(' ')
      lastIndex = idxs[idxs.length-1];
      displayNotes();
  }
}
function cancelEdit(){
  let editButton = document.querySelector('.e-Btn');
  editButton.removeEventListener('click', saveEdited);
  let saveButton = document.querySelector('.add-btn');
  let dates = document.querySelector(".dates");
  cancelBtn.style.display = 'none';
  editButton.style.display = "none";
  editButton.textContent = 'Save changed note';
  saveButton.style.display = 'inline';
  container.style.display = 'block';
  textSpace.readOnly = false;
  dates.style.display = 'none';
}
function saveEdited(evt){
  let parameters = evt.currentTarget.parameters;
  let {editButton, saveButton, container, textSpace, parsedData, dates, cancelBtn,
      dbid} = parameters;
  editButton.style.display = "none";
  saveButton.style.display = 'inline';
  container.style.display = 'block';
  if (Boolean(textSpace.value) && parsedData['note'] !== textSpace.value || parsedData['title'] !== addTitle.value){
      let d = new Date;
      parsedData['title'] = addTitle.value;
      parsedData['note'] = textSpace.value;
      parsedData['modified'] = d.toString()
      let strData = JSON.stringify(parsedData);
      localStorage.setItem(dbid, strData);
  }
  textSpace.value = '';
  dates.style.display = 'none';
  cancelBtn.style.display = 'none';
  displayNotes();
}
function modify(ev){
  let clicked = ev.target;
  console.log(clicked)
  clickedClass = clicked.getAttribute('class');
  switch (clickedClass){
      case "view-btn":
          readNote(clicked);
      break;
      case "edit-btn":
          editNote(clicked);
      break;
      case "delete-btn":
          deleteNote(clicked);
      break;
  }
}
function displayNotes(){
  container.innerHTML = '';
  let fragment = document.createDocumentFragment()
  idxs.reverse();
  for (let i of idxs){
      if(i!=='0'){
          let temp = document.querySelector('#notes');
          let div = temp.content.querySelector('.note');  
          let p = div.querySelector('p.title');
          let p2 = div.querySelector('p.noteinfo');
          let buttons = div.querySelector('.buttons');
          let erraseB = buttons.querySelector('.delete-btn');
          erraseB.setAttribute('dbid', i);
          let editB = buttons.querySelector('.edit-btn');
          editB.setAttribute('dbid',i);
          let viewB = buttons.querySelector('.view-btn');
          viewB.setAttribute('dbid',i);
          let noteData = localStorage.getItem(i);
          let parsedData = JSON.parse(noteData);
          p.textContent = parsedData['title'];
          p2.textContent = parsedData['note'].slice(0,10);
          if (parsedData['note'].length > 10){
              p2.textContent +=  '...';
          }
          let a = document.importNode(div, true);
          fragment.appendChild(a);
      }
  }
  container.appendChild(fragment);
  idxs.reverse();
}

function deleteNote(event) {
    let confirmDel = confirm("Delete this note?");
    if (confirmDel == true) {
      let dbid = event.getAttribute('dbid');
      let currentIndexes = localStorage.getItem(0) + ' ';
      let exp = new RegExp(` ${dbid} `);
      currentIndexes = currentIndexes.replace(exp, ' ').slice(0,-1);
      localStorage.setItem(0, currentIndexes);
      idxs = localStorage.getItem(0).split(' ');
      lastIndex = idxs[idxs.length-1];
      displayNotes();
    }
  
}
// Edit notes

function editNote(event){
  let dbid = event.getAttribute('dbid');
  let text = localStorage.getItem(dbid);
  let editButton = document.querySelector('.e-Btn');
  let saveButton = document.querySelector('#add-btn');
  let parsedData = JSON.parse(text);
  let creation = document.querySelector('.creation');
  let modified = document.querySelector('.modified');
  let dates = document.querySelector(".dates");
  let controlBtn = document.querySelector(".btnMenu")
  controlBtn.style.display = 'inline';
  cancelBtn.style.display = 'inline';
  editButton.style.display = "inline";
  saveButton.style.display = 'none';
  container.style.display = "none";
  addTitle.value = parsedData['title'];
  textSpace.value = parsedData['note'];
  creation.textContent = `Creation date: ${parsedData['creation']}.`;
  modified.textContent = `Last modification: ${parsedData['modified']}`;
  dates.style.display = 'flex';
  editButton.addEventListener('click', saveEdited, {once : true});
  editButton.parameters = {'editButton':editButton, 'saveButton':saveButton, 'container':container,
                            'textSpace':textSpace, 'parsedData':parsedData,
                             'dates':dates, 'cancelBtn':cancelBtn, 'dbid':dbid  }
}
function readNote(event){
  let dbid = event.getAttribute('dbid');
  let editButton = document.querySelector('.e-Btn');
  let saveButton = document.querySelector('#add-btn');
  let dates = document.querySelector(".dates");
  let noteData = localStorage.getItem(dbid);
  let parsedData = JSON.parse(noteData);
  let text = parsedData['note'];
  let creation = document.querySelector('.creation');
  let modified = document.querySelector('.modified');
  let controlBtn = document.querySelector(".btnMenu")
  controlBtn.style.display = 'inline';
  editButton.style.display = "inline";
  saveButton.style.display = 'none';
  container.style.display = "none";
  addTitle.value = parsedData['title']
  addTitle.readOnly = true;
  textSpace.value = text;
  textSpace.readOnly = true;
  editButton.textContent = 'Go back';
  dates.style.display = 'flex';
  creation.textContent = `Creation date: ${parsedData['creation']}.`;
  modified.textContent = `Last modification: ${parsedData['modified']}`;
  editButton.addEventListener('click', ()=>{
      editButton.style.display = "none";
      editButton.textContent = 'Save changed note';
      saveButton.style.display = 'inline';
      container.style.display = 'block';
      addTitle.value = '';
      textSpace.value = '';
      textSpace.readOnly = false;
      dates.style.display = 'none';
      displayNotes();
      }, {once : true});
}
displayNotes();
