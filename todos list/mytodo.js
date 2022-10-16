var incomplete = [];
var complete = [];
var inp = document.getElementById("new-task");
function populate() {
    var text = "";
    for (i = 0; i < incomplete.length; i++) {
        text +=
            "<li><input type='checkbox' onclick='addtocompletetask(this)'><label>" +
            incomplete[i] +
            "</label><button class='edit' onclick='editincomplete(this)'>Edit</button><button class='delete' onclick='deleteincomplete(this)'>Delete</button></li>";
    }

    document.getElementById("incomplete-task").innerHTML = text;
    document.getElementById("new-task").value = "";
}
function movetocompletetask() {
    var task = "";
    for (j = 0; j < complete.length; j++) {
        task +=
            "<li><input type='checkbox'  checked onclick='movebacktoincompletetask(this)'><label>" +
            complete[j] +
            "</label><button class='edit' onclick='editcomplete(this)'>Edit</button><button class='delete' onclick='deletecomplete(this)'>Delete</button></li>";
    }
    document.getElementById("complete-task").innerHTML = task;
    document.getElementById("new-task").value = "";
}
function add() {
    var inp = document.getElementById("new-task").value;
    if (inp == "") {
        alert("please add some items to list....")
        return;

    }
    else {
        incomplete.push(inp);
        populate(incomplete);
    }
}
function editincomplete(args) {
    let li = args.closest("li");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);
    inp.value = incomplete[index];
    document.getElementById("btn").innerHTML = "update";
    document.getElementById("btn").setAttribute('onclick', 'updateincomplete(' + index + ')');
}

function deleteincomplete(args) {
    let li = args.closest("li");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);
    incomplete.splice(index, 1);
    populate();
}
function addtocompletetask(args) {
    let li = args.closest("li");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);
    complete.push(incomplete[index]);
    incomplete.splice(index, 1);
    movetocompletetask();
    populate(complete);
}
function editcomplete(args) {
    let li = args.closest("li");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);
    inp.value = complete[index];
    document.getElementById("btn").innerHTML = "update";
    document.getElementById("btn").setAttribute('onclick', 'updatecomplete(' + index + ')')
}
function deletecomplete(args) {
    let li = args.closest("li");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);
    complete.splice(index, 1);
    movetocompletetask();
}
function movebacktoincompletetask(args) {
    let li = args.closest("li");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);
    incomplete.push(complete[index]);
    complete.splice(index, 1);
    populate(incomplete)
    movetocompletetask();


}
function updateincomplete(args) {
    alert();

    incomplete[args] = inp.value;
    console.log(incomplete);
    populate();
    document.getElementById("btn").innerHTML = "Add";
    document.getElementById("btn").setAttribute('onclick', 'add()');

}
function updatecomplete(args) {

    complete[args] = inp.value;
    console.log(complete);
    movetocompletetask();
    document.getElementById("btn").innerHTML = "Add";
    document.getElementById("btn").setAttribute('onclick', 'add()');
}
