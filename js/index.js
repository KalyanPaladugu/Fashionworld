'use strict';
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle("active");
}


function casual() {
  document.getElementById('mainformal').style.visibility='hidden';
    document.getElementById('maincasual').style.visibility='visible';
document.getElementById('mainjeans').style.visibility='hidden';
}
function formal() {
  document.getElementById('mainformal').style.visibility='visible';
  document.getElementById('mainjeans').style.visibility='hidden';

document.getElementById('maincasual').style.visibility='hidden';
}
function jeans() {
  document.getElementById('mainjeans').style.visibility='visible';
  document.getElementById('mainformal').style.visibility='hidden';
document.getElementById('maincasual').style.visibility='hidden';
}
