function hello() {
  alert("hello")
}

$(document).keydown(function () {
  move(event);
});

function select(ele){
  ele.classList.remove("bg-secondary")
  ele.classList.add("bg-primary","display-1","font-weight-bold","text-center")
}

function remove(ele){
  ele.classList.remove("bg-primary","display-1","font-weight-bold","text-center")
  ele.classList.add("bg-secondary")
}

function move(e) {
  var key = e.which ? e.which : e.keyCode;
  // alert(key)
  if (key == 37) {
    left();
  }
  if (key == 39) {
    right();
  }
  if (key == 38) {
    up();
  }
  if (key == 40) {
    down();
  }
}

function left() {
  var sels = document.getElementsByClassName("bg-primary");
  for (let i = 0; i < sels.length; i++) {
    var sel = sels[i];
    var next = sel.previousElementSibling;

    if (document.getElementById("first3") != next) {
      if (document.getElementById("3") != next) {
        if (document.getElementById("6") != next) {
          if (sels[i - 1] != next) {
            sel.classList.remove("bg-primary","display-1","font-weight-bold","text-center")
            sel.classList.add("bg-secondary")

            next.classList.remove("bg-secondary");
            next.classList.add("bg-primary","display-1","font-weight-bold","text-center");
          }
        }
      }
    }

  }




}

function right() {
  var sels = document.getElementsByClassName("bg-primary");
  for (let i = sels.length - 1; i >= 0; i--) {

    var sel = sels[i];

    var next = sel.nextElementSibling;
    // alert("selected:"+sel.id+" next selected:"+sels[i+1].id+" next:"+next.id)
    if (document.getElementById("4") != next) {
      if (document.getElementById("7") != next) {
        if (document.getElementById("last1") != next) {

          if (sels[i + 1] != next) {

            sel.classList.remove("bg-primary")
            sel.classList.add("bg-secondary")

            next.classList.remove("bg-secondary");
            next.classList.add("bg-primary");
          }
        }
      }
    }
  }
}
function up() {
  var sels = document.getElementsByClassName("bg-primary");
  for (let i = 0; i < sels.length; i++) {
    var sel = sels[i];
    var next = sel.previousElementSibling.previousElementSibling.previousElementSibling;
    if (document.getElementById("first1") != next && document.getElementById("first2") != next && document.getElementById("first3") != next) {
      
      if (sels[i - 1] != next && sels[i - 2] != next && sels[i - 3] != next) {
        sel.classList.remove("bg-primary")
        sel.classList.add("bg-secondary")

        next.classList.remove("bg-secondary");
        next.classList.add("bg-primary");
      }
    }
  }

}
function down() {
  var sels = document.getElementsByClassName("bg-primary");
  for (let i = sels.length - 1; i >= 0; i--) {

    var sel = sels[i];

    var next = sel.nextElementSibling.nextElementSibling.nextElementSibling;
    if (document.getElementById("last1") != next && document.getElementById("last2") != next && document.getElementById("last3") != next) {

      if (sels[i + 1] != next && sels[i + 2] != next && sels[i + 3] != next) {

        // alert("work")
        sel.classList.remove("bg-primary")
        sel.classList.add("bg-secondary")

        next.classList.remove("bg-secondary");
        next.classList.add("bg-primary");
      }
    }
  }

}


