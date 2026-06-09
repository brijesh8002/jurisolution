
// load header
fetch("./include/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // after loading header, attach events
    initNavbar();
  });

// load footer
fetch("./include/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });






const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.querySelector(".testimonial-dots");

let indexTest = 0;
let visibleCards = 3;
let totalSlides = 0;
let autoSlideInterval;




// 
// 
function showing() {
  let form = document.querySelector(".free-consult-fixed-div");
  let overlay = document.querySelector(".blur-overlay");

  let isOpen = form.classList.toggle("show");
  overlay.classList.toggle("show");

  document.body.style.overflow = isOpen ? "hidden" : "auto";
}


// 
let form = document.querySelector(".addtocart");
let overlay = document.querySelector(".blur-overlay");

function openAddToCart() {
  let Open = form.classList.add("show");
  overlay.classList.toggle("show");
  document.body.style.overflow = "hidden";
}

function closeAddToCart() {
  let Open = form.classList.remove("show");
  overlay.classList.toggle("show");
  document.body.style.overflow = "auto";
}




function finx3OpenPopup() {
  document.getElementById("finx3Popup").style.display = "flex";
}

function finx3ClosePopup() {
  document.getElementById("finx3Popup").style.display = "none";
}

/* Close when clicking outside */
window.onclick = function(e) {
  let popup = document.getElementById("finx3Popup");
  if (e.target === popup) {
    popup.style.display = "none";
  }
}



// querry from
function toggleQueryForm() {
  const form = document.getElementById("lawFixedForm");

  if (!form) return;

  form.classList.toggle("active");
}