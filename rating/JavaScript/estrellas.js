
    $(document).ready(function() {
  
$("html").click(function() {
    for (let x = 1; x <= 5; x++) {
            document.getElementById(x).classList.remove('color1');
            document.getElementById(x).classList.add('color');
        }
});
$('.far').click(function (e) {
    e.stopPropagation();
});
});

function color(id) {

        for (let x = 1; x <= 5; x++) {
            document.getElementById(x).classList.remove('color1');
            document.getElementById(x).classList.add('color');
        }
   
        for (let i = 1; i <= id; i++) {
            document.getElementById(i).classList.remove('color');
            document.getElementById(i).classList.add('color1');    
        }
    
}
