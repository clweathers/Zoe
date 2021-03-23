let cat;
let fishes;
let spiral;

function setup() {
    cat = new Cat();
    spiral = new Spiral();
}

function draw() {
    fish = new Fish();
    fish.draw();
}

class Cat {
    constructor() {
        this.center = createVector(0, 0);
    }
}

class Fish {
    constructor() {
        this.center = createVector(0, 0);
        this.color = color(0, 0, 0);
        this.rotation = 0;

        this.debug_should_draw_center = false;
    }

    draw() {
        push();

        fill(this.color);
        stroke(this.color);

        const body_height = 20;
        const body_width = 30;

        const tail_height = 20;
        const tail_width = 20;

        let tail_back_x = -tail_width;
        let tail_back_bottom = tail_height / 2;
        let tail_back_top = -(tail_height / 2);

        let tail_front_x = 0;
        let tail_front_y = 0;

        translate(this.center.x, this.center.y);
        rotate(-this.rotation);

        ellipse(0, 0, body_width, body_height);
        triangle(tail_front_x, tail_front_y, tail_back_x, tail_back_top, tail_back_x, tail_back_bottom);

        if (this.debug_should_draw_center) {
            let center_color = color(255, 0, 0);
            fill(center_color);
            stroke(center_color);

            circle(0, 0, 10);
        }

        pop();
    }
}

class Spiral {
    constructor() {
        this.center = createVector(0, 0);
    }
}
