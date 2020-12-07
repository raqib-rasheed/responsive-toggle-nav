const toggler = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const header = document.querySelector("h1");
const footer = document.querySelector("footer");
const arrowBtn = document.querySelector(".top-link");
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();
console.log(date.innerHTML);

function fixNavBarOnScroll(){
  if(footer.getBoundingClientRect().y-footer.offsetTop<-1300){
    arrowBtn.classList.add("show-link")
  }else{
    arrowBtn.classList.remove("show-link");
  }

  let headerPosition = header.getBoundingClientRect().y-header.offsetTop;
  if(headerPosition<-1){
  nav.classList.add("fixed-nav");
  }else{
  nav.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll",fixNavBarOnScroll);
