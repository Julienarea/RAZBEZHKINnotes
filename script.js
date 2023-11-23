// Загрузка заметок при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  loadNotes();
});

// Проверка нажатия клавиши Enter
function checkEnter(event) {
  if (event.key === "Enter") {
    addNote();
  }
}

function addNote() {
  var noteText = document.getElementById("note-input").value;
  if (noteText !== "") {
    var ul = document.getElementById("notes-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(noteText));

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode(""));
    deleteButton.onclick = function() {
      ul.removeChild(li);
      saveNotes();
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);

    document.getElementById("note-input").value = "";
    saveNotes();
  }
}

// Сохранение заметок в localStorage
function saveNotes() {
  var notes = [];
  var ul = document.getElementById("notes-list");
  for (var i = 0; i < ul.children.length; i++) {
    notes.push(ul.children[i].textContent);
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Загрузка заметок из localStorage
function loadNotes() {
  var ul = document.getElementById("notes-list");
  var notes = localStorage.getItem("notes");
  if (notes) {
    notes = JSON.parse(notes);
    for (var i = 0; i < notes.length; i++) {
      addNoteFromStorage(notes[i]);
    }
  }
}

// Добавление заметки из localStorage
function addNoteFromStorage(noteText) {
  var ul = document.getElementById("notes-list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(noteText));

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode(""));
  deleteButton.onclick = function() {
    ul.removeChild(li);
    saveNotes();
  };

  li.appendChild(deleteButton);
  ul.appendChild(li);
}
