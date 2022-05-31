
document.querySelectorAll(".galeria_div img").forEach(element => {
  element.addEventListener("click",function(e){
    e.stopPropagation();
    let modal = document.querySelector(".modal")
    modal.classList.remove("ocultar");
    let img = document.querySelector(".modal img")
    img.src = element.getAttribute("src");

    let scroll = document.getElementsByTagName("body")[0];
    scroll.classList.add("no_scrolling")

  })
});


document.querySelectorAll(".modal").forEach(element => {
  element.addEventListener("click",function(e){
    element.classList.add("ocultar")
    let scroll = document.getElementsByTagName("body")[0];
    scroll.classList.remove("no_scrolling")
  })
});

