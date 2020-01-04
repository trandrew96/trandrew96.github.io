// canvas setup
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

// Circle is a class (but written as a function in js)
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
    }

    this.update = function() {
        if (this.x > innerWidth - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }

        if (this.y > innerHeight - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

let circleArray = [];

for ( let i = 0; i < 100; i++ ) {
    let radius = Math.random()*35;

    let x = Math.random() * ( innerWidth - radius * 2) + radius;
    let y = Math.random() * ( innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( let i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
    }

}
animate();

/*** Start Drawing Basics ***/
// // draw stuff
// c.fillStyle = 'rgba(255, 0, 0, 0.8)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.6)';
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 1)';
// c.fillRect(100, 700, 100, 100);
// c.fillRect(500, 700, 100, 100);
//
// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "red";
// c.stroke();
//
// // Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI*2, false);
// c.strokeStyle = 'blue';
// c.stroke();
//
// // Draw 3 circles in random places
// for (var i = 0; i < 100; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//
//     c.beginPath();
//     c.arc(x, y, 1, 0, Math.PI*2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }