class Spiral {
    constructor() {
        this.center = createVector(0, 0);
        this.rotation_angle = 0;
    }

    draw() {
        push();

        translate(this.center.x, this.center.y);
        rotate(-this.rotation_angle);

        colorMode(HSB);
        stroke(256, 91, 37);

        let angle = 0;
        let radius = 0;

        for (let point_index = 0; point_index < 500; point_index++) {
            let x = radius * cos(angle);
            let y = radius * sin(angle);

            let stroke_weight = 4 * noise(point_index);

            strokeWeight(stroke_weight);
            point(x, y);

            angle = angle + 0.05;
            radius = radius + 0.07;
        }

        pop();
    }
}
