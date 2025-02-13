document.addEventListener("DOMContentLoaded", () => {
    //Declare variables for the elements of the html 
    const icon = document.getElementById("icon");
    const iconTwo = document.getElementById("icontwo");
    const ul = document.querySelector("ul");
    //condition to check if the icon,icontwo and ul exist
    if (icon && iconTwo && ul) {
        //When fa-bars is clicked it adds the show class,then it's replaced with the fa-times
      icon.addEventListener("click", () => {
        ul.classList.add("show");
        icon.style.display = "none";
        iconTwo.style.display = "block";
      });
      //when fa-times is clicked it removes the .show class, then it's display is replaced with the fa-bars
      iconTwo.addEventListener("click", () => {
        ul.classList.remove("show");
        icon.style.display = "block";
        iconTwo.style.display = "none";
      });
    }
  });
  