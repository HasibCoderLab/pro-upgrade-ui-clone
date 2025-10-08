//  select  all button
const buttons = document.querySelectorAll(".btn button");
const popup = document.getElementById("successPopup")

// click event
buttons.forEach(btn => {
    btn.addEventListener("click" , () =>{
        popup.classList.add("show");
        setTimeout(() => {
popup.classList.remove("show");
        },3000);
    });
});
// console.log(show);
