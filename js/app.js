console.log("hello");

// let menu = document.getElementById('menu-section');
// let navigation = document.getElementById('navigation');

// function DisplayMenu() {
//     let navigation = document.getElementById('navigation'); 
//     navigation.style.display = "block";
// }

$(function(){
$("#menu-section").click(()=> {
        $("#navigation").toggle();
})
  });