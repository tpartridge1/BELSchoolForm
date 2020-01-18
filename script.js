var button = document.getElementById('button');
var button2 = document.getElementById('button2');

button.onclick = function() {
    var div = document.getElementById('newpost');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
   else {
        div.style.display = 'block';
    }
};

button2.onclick = function() {
    var div = document.getElementById('newpost2');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
   else {
        div.style.display = 'block';
    }
};