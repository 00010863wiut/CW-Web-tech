var div = document.getElementById("div");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");

function appear() {
  div.style.display = "block";
}
function disappear(){
  div.style.display = "none";
}

function appear1() {
  div1.style.display = "block";
}
function disappear1(){
  div1.style.display = "none";
}

function appear2() {
  div2.style.display = "block";
}
function disappear2(){
  div2.style.display = "none";
}

function appearimg() {
  div3.style.display = "block";
}
function disappearimg(){
  div3.style.display = "none";
}

function appear4() {
  div4.style.display = "block";
}
function disappear4(){
  div4.style.display = "none";
}

function appear5() {
  div5.style.display = "block";
}
function disappear5(){
  div5.style.display = "none";
}
function swipe() {
  var img = document.getElementById('img');
  img.style.display = 'block';
  var url=img.getAttribute('src');
  window.open(url,'img','width=img.stylewidth,height=img.style.height,resizable=1');
}
function swipe1() {
  var img1 = document.getElementById('img1');
  img1.style.display = 'block';
  var url=img1.getAttribute('src');
  window.open(url,'img1','width=img1.stylewidth,height=img1.style.height,resizable=1');
}
function swipe2() {
  var img2 = document.getElementById('img2');
  img2.style.display = 'block';
  var url=img2.getAttribute('src');
  window.open(url,'img2','width=img2.stylewidth,height=img2.style.height,resizable=1');
}
function swipe3() {
  var img3 = document.getElementById('img3');
  img3.style.display = 'block';
  var url=img3.getAttribute('src');
  window.open(url,'img3','width=img3.stylewidth,height=img3.style.height,resizable=1');
}
function swipe4() {
  var img4 = document.getElementById('img4');
  img4.style.display = 'block';
  var url=img4.getAttribute('src');
  window.open(url,'img4','width=img4.stylewidth,height=img4.style.height,resizable=1');
}
function swipe5() {
  var img5 = document.getElementById('img5');
  img5.style.display = 'block';
  var url=img5.getAttribute('src');
  window.open(url,'img5','width=img5.stylewidth,height=img5.style.height,resizable=1');
}

var btn = document.getElementById("hamMenu");
var x = document.getElementById("menu");

 btn.addEventListener("click", function() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }})
//form validation 
function validate() {
      
  if( document.myForm.fname.value == "" ) {
     alert( "Please provide your name!" );
     document.myForm.fname.focus() ;
     return false;
  }
  if( document.myForm.lname.value == "" ) {
     alert( "Please provide your last name!" );
     document.myForm.lname.focus() ;
     return false;
  }
  return( true );
}
