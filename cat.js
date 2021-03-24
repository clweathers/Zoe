class Cat {
    constructor() {
        this.center = createVector(0, 0);
    }

    draw() {
        push();

        translate(this.center.x, this.center.y);

        // Draw cat stuff here.

        pop();
    }
}
