function mOver(obj) {obj.innerHTML = "Hello and welcome, did you know that you can make your own website too?! All you need to do is get a computer and start coding. HTML and CSS are easy to use and learn. Good Luck!" }

function mOut(obj) {obj.innerHTML = "Hover over me"}

function target_popup(form) {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var very_sat = document.getElementById('very_sat').value;
    var most_sat = document.getElementById('most_sat').value;
    var sat = document.getElementById('sat').value;
    var some_sat = document.getElementById('some_sat').value;
    var not_sat = document.getElementById('not_sat').value;
    var opt1 = document.getElementById('opt1').value;
    var out2 = document.getElementById('opt2').value;
    var out3 = document.getElementById('opt3').value;
    var helpful = document.getElementById('helpful').value;
    var message = document.getElementById('message').value;
    window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
    form.target = 'formpopup';
    
    localStorage.setItem("fname1", fname);
    localStorage.setItem("lname1", lname);
    localStorage.setItem("very_sat1", very_sat);
}
