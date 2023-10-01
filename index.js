let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})
  
   const coursesTab = document.getElementById("courses-tab");
   const reportContainer = document.querySelector(".report-container");


   coursesTab.addEventListener("click", function() {
       
       if (reportContainer.style.display === "none" || reportContainer.style.display === "") {
           reportContainer.style.display = "block";
       } else {
           reportContainer.style.display = "none";
       }
   });
   