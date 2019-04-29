const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bicycle = new Image();
bicycle.src = "../Icons/BLUE/bicycle.png";



function NewImage(bicycle, x, y, dx, dy, width, height) {
  this.bicycle = bicycle;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.width = width;
  this.height = height;

  this.draw = function () {

    ctx.drawImage(this.bicycle, this.x, this.y, this.width, this.height)
  }

  this.update = function () {

    if (this.x + this.width > window.innerWidth || this.x - this.width < 0) {

      this.dx = -this.dx
    } else if (this.y + this.height || this.y - this.height < 0) {
      this.dy = -this.dy;

    }

    this.y += this.dy;

    this.x += this.dx;

  }




}

// array for images

let bicycleArray = []

for (let index = 0; index < 5; index++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dx = (Math.random() - 0.5) + Math.random() * 2;
  let dy = (Math.random() - 0.5) + Math.random() * 2;
  let width = 100;
  let height = 100;
  bicycleArray.push(new NewImage(bicycle, x, y, dx, dy, width, height));

}

// function for moving images

// animate()

window.onload = function (params) {
  animate()
  console.log(bicycleArray)

}

function animate() {
  requestAnimationFrame(animate);
  // ctx.clearRect(0, 0, innerWidth, innerHeight);

  bicycleArray.forEach((e) => {
    e.draw();
    e.update();

  })


}