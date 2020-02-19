function hello(){
  alert("hello")
}

$(document).keydown(function(){
  move(event);
});

function start(){
  
  document.getElementById("4").classList.remove("bg-secondary")
  document.getElementById("4").classList.add("bg-primary")
  document.getElementById("4").classList.add("selected")
  
}

function move(e){
  var key=e.which? e.which:e.keyCode;
  // alert(key)
  if(key==37){
    left();
  }
  if(key==39){
    right();
  }
  if(key==38){
    up();
  }
  if(key==40){
    down();
  }
}

function left(){
  var sel=document.getElementsByClassName("bg-primary")[0];
  var next=sel.previousElementSibling;

  if(document.getElementById("first")!=next){
    sel.classList.remove("bg-primary")
  sel.classList.add("bg-secondary")
  
  
  next.classList.remove("bg-secondary");
  next.classList.add("bg-primary");
  }

  

  
}

function right(){
  var sel=document.getElementsByClassName("bg-primary")[0];
  var next=sel.nextElementSibling;

  if(document.getElementById("last")!=next){
  sel.classList.remove("bg-primary")
  sel.classList.add("bg-secondary")
  
  
  next.classList.remove("bg-secondary");
  next.classList.add("bg-primary");
  
  }
}
function up(){
  var sel=document.getElementsByClassName("bg-primary")[0];
  var next=sel.previousElementSibling.previousElementSibling.previousElementSibling;

  if(document.getElementById("first")!=next){
  sel.classList.remove("bg-primary")
  sel.classList.add("bg-secondary")
  
  
  next.classList.remove("bg-secondary");
  next.classList.add("bg-primary");
  }
  
}
function down(){
  var sel=document.getElementsByClassName("bg-primary")[0];
  var next=sel.nextElementSibling.nextElementSibling.nextElementSibling;

  if(document.getElementById("last")!=next){
  sel.classList.remove("bg-primary")
  sel.classList.add("bg-secondary")
  
  
  next.classList.remove("bg-secondary");
  next.classList.add("bg-primary");
  }
  
}


