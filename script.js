window.onload = function () {
  const pictures = [{ name: "logo", alt: "logo", src: "img/camera.svg" },
  { name: "sobia", alt: "sobia", src: "img/photos/sobia.jpg" },
  { name: "sandhya", alt: "sandhya", src: "img/photos/sandhya.jpg" },
  { name: "maneka", alt: "maneka", src: "img/photos/maneka.jpg" },
  { name: "rahil", alt: "rahil", src: "img/photos/rahil.jpg" },
  { name: "gayatri", alt: "gayatri", src: "img/photos/gayatri.jpg" },
  { name: "kevin", alt: "kevin", src: "img/photos/kevin.jpg" },
  { name: "esha", alt: "esha", src: "img/photos/esha.jpg" },
  { name: "petula", alt: "petula", src: "img/photos/petula.jpg" },
  { name: "sama", alt: "sama", src: "img/photos/sama.jpg" },
  { name: "karina", alt: "karina", src: "img/photos/karina.jpg" },
  { name: "ved", alt: "ved", src: "img/photos/ved.jpg" },
  { name: "kavindi", alt: "kavindi", src: "img/photos/kavindi.jpg" }
  ];

  for (const picture of pictures) {
    var element = document.createElement("img");
    element.src = picture.src;
    element.alt = picture.alt;
    element.id = picture.name;
    element.className = "enlarge";
    if (picture.name == "logo") {
      element.className = "logo";
    }
    document.getElementById(picture.name).appendChild(element);
  }
}

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
