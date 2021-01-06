//thêm công việc mới khi ấn add//
function newElement() {
    var li = document.createElement("li");
    var input = document.createElement("input")
    input.type = "checkbox";
    var inputValue = document.getElementById("myInput").value
    var newText = document.createTextNode(inputValue);
    li.appendChild(input);
    li.appendChild(newText);
    if (inputValue == "") {
        alert("wrong!You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

}
// thêm công viêc ở completed//
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'input') {
        ev.target.classList.toggle('checked');
    }
}, false);





