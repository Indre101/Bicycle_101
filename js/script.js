let header1 = document.getElementById("container");
header1.classList.add("classHeader");

// let h = document.createElement("img"); // Create a <img> element
// h.classList.add("images");

let welcome = ["B", "i", "k", "i", "n", "g", " "];

function getText(obj) {
  return obj.src;
}

let image1 = new Image();
image1.src = "../Icons/Hvid/4__Barnevogn_Hvid_5.png";

let image2 = new Image();
image2.src = "../Icons/Hvid/bus_white.png";

let image3 = new Image();
image3.src = "../Icons/Hvid/white_cyckle.png";

let image4 = new Image();
image4.src = "../Icons/Hvid/4__Ladcykel_Hvid_2.png";

let image5 = new Image();
image5.src = "../Icons/Hvid/4__Trafikfyr_Hvid_6.png";

let image6 = new Image();
image6.src = "../Icons/Hvid/4__Skraldebil_Hvid_3.png";

let possible = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src
];

setTimeout(() => {
  var handle = setInterval(changeImage, 100);
}, 100);

let j = 0;

let arrayLength = welcome.length;

for (let i = 0; i < arrayLength; i++) {
  let h = document.createElement("img");
  h.classList.add("images");
  header1.appendChild(h);
}

let images = document.querySelectorAll(".images");

function changeImage() {
  images.forEach(e => {
    setTheImage(e);
  });
}

function setTheImage(e) {
  let randNumber = Math.floor(Math.random() * possible.length);
  e.src = possible[randNumber];

  j++;
  let d = document.createElement("div");
  d.classList.add("divClass");

  switch (j) {
    case 100:
      header1.removeChild(e);

      let imageC = new Image();
      imageC.src = "../Icons/KBH_Maerke_UK_White_RGB.png";
      imageC.classList.add("images");
      // e.style.display = "none";

      d.innerHTML = "B";
      header1.appendChild(imageC);

      header1.appendChild(d);
      break;
    case 120:
      header1.removeChild(e);

      // e.style.display = "none";

      d.innerHTML = "i";
      header1.appendChild(d);
      break;
    case 150:
      header1.removeChild(e);
      // e.style.display = "none";

      d.innerHTML = "k";
      header1.appendChild(d);
      break;
    case 180:
      header1.removeChild(e);
      // e.style.display = "none";

      d.innerHTML = "i";
      header1.appendChild(d);
      break;
    case 200:
      header1.removeChild(e);
      // e.style.display = "none";

      d.innerHTML = "n";
      header1.appendChild(d);
      break;
    case 230:
      // e.style.display = "none";
      header1.removeChild(e);
      d.innerHTML = "g";
      header1.appendChild(d);
      break;
    case 231:
      header1.removeChild(e);
      d.innerHTML = " ";
      header1.appendChild(d);
      break;
    //
    case 232:
      d.innerHTML = "1";
      header1.appendChild(d);
      clearInterval(handle);
      break;
    case 233:
      d.innerHTML = "0";
      header1.appendChild(d);
      clearInterval(handle);
      break;
    case 234:
      d.innerHTML = "1";
      header1.appendChild(d);
      clearInterval(handle);
      break;
  }
}
