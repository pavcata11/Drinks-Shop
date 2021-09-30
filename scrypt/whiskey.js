function order() {
    let name = document.getElementById("Name").value;
    let adress = document.getElementById("adress").value;
    name = name + ", thanks for the order! Will be provided at the following address:" + adress;
    alert(name);
    document.getElementById("Name").value = "";
    document.getElementById("adress").value = "";

}

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let name = document.getElementById("Comment").value;
    let x = name + "  Commented:  " + inputValue;
    let t = document.createTextNode(x);
    li.appendChild(t);
    if (inputValue === '' || name === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    document.getElementById("Comment").value = "";



    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}