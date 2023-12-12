let sideMenu = document.querySelector('.sideMenu')
let filter = document.querySelector('.filter')
let body = document.querySelector('body')

function closeMenu(){
    sideMenu.style.display = "none"
}
function openMenu(){
    sideMenu.style.display = "flex"
}

function closeFilter(){
    filter.style.display = "none"
}
function openFilter(){
    filter.style.display = "initial"
}

function random() {
    for (var i = 1; i < 11; i++) {
        document.querySelector(`.i${i}`).style.marginBottom = `${
            Math.random(i) * 85
          }px`;
      document.querySelector(`.i${i}`).style.height = `${Math.random(i) * 250}px`;
      document.querySelector(`.i${i}`).style.backgroundColor = color()
    }
    document.querySelector(".title").style.color = "white";
    
  }
  function color(){
    for (var i = 1; i < 11; i++) {
      if (document.querySelector(`.i${i}`).style.height < '30px') {
        document.querySelector(`.i${i}`).style.backgroundColor = "coral";
      } else if(document.querySelector(`.i${i}`).style.height > '60px'){
        document.querySelector(`.i${i}`).style.backgroundColor = "lightgreen";
      }else {
        document.querySelector(`.i${i}`).style.backgroundColor = "lightskyblue"
      }
    }
  }

  random()
  

