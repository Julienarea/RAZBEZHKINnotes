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
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    document.getElementById("note-input").value = "";
  }
}
