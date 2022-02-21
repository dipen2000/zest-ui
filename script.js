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