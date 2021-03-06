class Fish {
    constructor() {
        this.center = createVector(0, 0);
        this.color = color(0, 0, 0);
        this.rotation_angle = 0;

        this.orbit_enabled = false;
        this.orbit_angle = 0;
        this.orbit_center = createVector(0, 0);
        this.orbit_height = 0;
        this.orbit_width = 0;

        this.debug_drawing_enabled = false;
        this.debug_color = color(255, 0, 0);
    }

    draw() {
        if (this.orbit_enabled) {
            this.update_orbit_position();

            if (this.debug_drawing_enabled) {
                this.draw_debug_orbit();
            }
        }

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
        rotate(-this.rotation_angle);

        ellipse(0, 0, body_width, body_height);
        triangle(tail_front_x, tail_front_y, tail_back_x, tail_back_top, tail_back_x, tail_back_bottom);

        if (this.debug_drawing_enabled) {
            this.draw_debug_center();
        }

        pop();
    }

    // Color

    set_color_hue(color_hue) {
        colorMode(HSB);
        this.color = color(color_hue, saturation(this.color), brightness(this.color));
    }

    color_hue() {
        let color_hue = hue(this.color);
        return color_hue;
    }

    // Orbit

    update_orbit_position() {
        this.center.x = this.orbit_center.x + (cos(this.orbit_angle) * this.orbit_width / 2);
        this.center.y = this.orbit_center.y - (sin(this.orbit_angle) * this.orbit_height / 2);
    }

    // Debug

    draw_debug_center() {
        push();

        fill(this.debug_color);
        stroke(this.debug_color);

        circle(0, 0, 10);

        pop();
    }

    draw_debug_orbit() {
        push();

        stroke(this.debug_color);

        ellipse(this.orbit_center.x, this.orbit_center.y, this.orbit_width, this.orbit_height);

        fill(this.debug_color);
        circle(this.orbit_center.x, this.orbit_center.y, 10);

        pop();
    }
}
