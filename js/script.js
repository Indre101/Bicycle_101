const body = document.querySelector("body");
const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

const bicycle = new Image();
bicycle.src = "../Icons/BlÜ/4__Cykel_BlÜ_1.png";

// context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

c.drawImage(bicycle, 100, 100, 300, 300, 300);



// const bicycle = document.createElement("div");
// bicycle.classList.add("bicycleBG");

// bicycleContainer.width = window.innerWidth;


// console.log(window.getPropertyValue("innerWidth"));

// for (let index = 0; index < 10; index++) {
//   const bicycle = document.createElement("div");
//   bicycle.classList.add("bicycleBG");

//   bicycle.style.left = (Math.random() * 90) + "vw";
//   bicycle.style.top = (Math.random() * 90) + "vh";
//   bicycleContainer.appendChild(bicycle);

// }


// const test = document.querySelector(".test");
// test.style.left = (Math.random() * 90) + "vw";
// test.style.top = (Math.random() * 90) + "vh";

// let x = (Math.random() * 3);
// let y = (Math.random() * 3);




// animate()

// function animate() {
//   requestAnimationFrame(animate)

//   let bgSize = 100


//   let leftVal = parseInt(test.style.left, 10);
//   test.style.left = (leftVal + x) + "vw";
//   leftVal = parseInt(test.style.left, 10);


// let topVal = parseInt(test.style.top, 10);
// test.style.top = -((topVal + y) + "vh");
// topVal = parseInt(test.style.top, 10)

// if (leftVal + bgSize > bicycleContainer.innerWidth || leftVal - bgSize < 0) {
//   test.style.left = -((leftVal + x) + "vw");

//   console.log(leftVal)

// }
// else if (topVal + bgSize > window.innerHeight || topVal - bgSize < 0) {
//   topVal = -topVal;
//   console.log("topVal")

// }

// }

// bicycleContainer.width = window.innerWidth;
// bicycleContainer.height = window.innerHeight;