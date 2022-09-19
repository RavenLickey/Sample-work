function navigate(navIndex) {
    let i;
    let top = document.getElementsByClassName("top");
    //change all elements of top nav from "active" to ""
    for (i = 0; i < top.length; i++) { 
        top[i].className = top[i].className.replace("active", "");
    }
    //set the selected topnav to "active"
    top[navIndex-1].className += " active";
  }

