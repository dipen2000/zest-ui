const checkbox = document.getElementById("checkbox");
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if(currentTheme == "light"){
    checkbox.checked=false;
}
else{
    checkbox.checked=true;
    document.body.classList.add("dark");
}


checkbox.addEventListener("change", (e) => {
  if(e.target.checked){
      document.body.classList.add("dark");
      localStorage.setItem("theme" , "dark");
  }
  else{
    document.body.classList.remove("dark");
    localStorage.setItem("theme" , "light");
  }
})

const btnHambuger = document.querySelector(".btnHambuger");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const movingContainer = document.querySelector(".moving-container");

btnHambuger.addEventListener("click" , ()=>{
  console.log("hit it!");
  drawerBackdrop.classList.remove("drawer-backdrop-hide");
  movingContainer.classList.add("moving-container-show");
});

drawerBackdrop.addEventListener("click" , ()=>{
  drawerBackdrop.classList.add("drawer-backdrop-hide");
  movingContainer.classList.remove("moving-container-show");
})