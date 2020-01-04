let canvas = document.getElementById("star-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

function Star(x, y, dx, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.radius = radius;

    this.draw = function() {
        c.fillStyle = 'rgba(255, 255, 255, 1)';
        c.fillRect(this.x, this.y, this.radius, this.radius);
    };

    this.update = function() {

        if (this.x > innerWidth) {
           this.x = 0;
        }
        this.x += this.dx;

        this.draw();
    }
}

function Logo(text, y_offset, size) {
    this.x = innerWidth/2;
    this.y = innerHeight/2 + y_offset;

    this.draw = function() {
        c.font = size + "px Molengo";
        c.textAlign = "center";
        c.fillText(text, this.x, this.y);
    }
}

// Initialize the stars
let starArray = [];
let velocityRange = 0.1;
let sizeRange = 2.5;

// Number of stars = height of canvas
for ( let i = 0; i < innerHeight; i+=2) {
    let x = Math.random() * innerWidth;
    let dx = Math.random() * velocityRange;
    let radius = Math.random() * sizeRange;
    starArray.push(new Star(x, i, dx, radius));
}

// Initialize logo
let name_offset = -20, name_size = 100;
let subname_offset = 25, subname_size = 45;
let logo = new Logo("Andrew Tran", name_offset, name_size);
let sublogo = new Logo("Software Engineer", subname_offset, subname_size);


function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( let i = 0; i < starArray.length; i++ ) {
        starArray[i].update();
    }

    logo.draw();
    sublogo.draw();
}
animate();