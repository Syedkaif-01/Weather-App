const bar = document.querySelector(".bars");
const header = document.querySelector("header");
let flag = false;

bar.addEventListener("click", () => {
   
    if (!flag) {
       header.style.height = "22rem";
       flag = !flag;
   
    }
    else {
       header.style.height = "5rem";
       flag = !flag;
   
    }



});

window.addEventListener("resize", () => {
   if (window.innerWidth >= 700) {
      header.style.height = "5rem";
      flag = false;
   }
   
});



document.getElementById("scrollButton").addEventListener("click", function() {
   // Get the position of the target section
   var targetSection = document.getElementById("targetSection");
   var targetPosition = targetSection.offsetTop;

   // Scroll to the target position smoothly
   window.scrollTo({
       top: targetPosition,
       behavior: "smooth"
   });
});





