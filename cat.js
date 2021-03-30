class Cat {
    constructor() {
        this.center = createVector(0, 0);

        let left_ear_tip = new CatPoint(-193, -41);
        let right_ear_tip = new CatPoint(-105, -99);
        let left_cheek = new CatPoint(-127, 51);
        let right_cheek = new CatPoint(-35, -21);
        let tail = new CatPoint(193, 19);
        let haunch = new CatPoint(131, 99);
        let forehead = new CatPoint(-121, -27);

        this.cat_line_segments = [];
        this.cat_line_segments.push(new CatLineSegment(right_ear_tip, left_cheek));
        this.cat_line_segments.push(new CatLineSegment(right_ear_tip, right_cheek));
        this.cat_line_segments.push(new CatLineSegment(left_ear_tip, right_cheek));
        this.cat_line_segments.push(new CatLineSegment(left_ear_tip, left_cheek));
        this.cat_line_segments.push(new CatLineSegment(right_cheek, left_cheek));
        this.cat_line_segments.push(new CatLineSegment(right_cheek, tail));
        this.cat_line_segments.push(new CatLineSegment(tail, haunch));
        this.cat_line_segments.push(new CatLineSegment(left_cheek, haunch));
    }

    draw() {
        push();

        stroke(23, 66, 60);
        strokeWeight(14);

        translate(this.center.x, this.center.y);
        
        for (let cat_line_segment_index = 0; cat_line_segment_index < this.cat_line_segments.length; cat_line_segment_index++) {
            let cat_line_segment = this.cat_line_segments[cat_line_segment_index];
            cat_line_segment.draw();
        }

        pop();
    }

    update() {
        let drift_angle_change = 0.005;
        let drift_distance_noise_offset_change = 0.001;

        for (let cat_line_segment_index = 0; cat_line_segment_index < this.cat_line_segments.length; cat_line_segment_index++) {
            let cat_line_segment = this.cat_line_segments[cat_line_segment_index];
            cat_line_segment.first_cat_point.drift_angle += drift_angle_change;
            cat_line_segment.first_cat_point.drift_distance_noise_offset += drift_distance_noise_offset_change;

            cat_line_segment.second_cat_point.drift_angle += drift_angle_change;
            cat_line_segment.second_cat_point.drift_distance_noise_offset += drift_distance_noise_offset_change;
        }
    }
}

class CatPoint {
    constructor(x, y) {
        this.center = createVector(x, y);
        this.drift_angle = random(TAU);
        this.drift_distance_min = 1;
        this.drift_distance_max = 5;
        this.drift_distance_noise_offset = random(10);
    }

    drifted_center() {
        let drift_noise = noise(this.drift_distance_noise_offset);
        let drift_distance = map(drift_noise, 0.0, 1.0, this.drift_distance_min, this.drift_distance_max);
        let drifted_center = p5.Vector.fromAngle(this.drift_angle, drift_distance);
        drifted_center.add(this.center);
        return drifted_center;
    }
}

class CatLineSegment {
    constructor(first_cat_point, second_cat_point) {
        this.first_cat_point = first_cat_point;
        this.second_cat_point = second_cat_point;
    }

    draw() {
        let first_point = this.first_cat_point.drifted_center();
        let second_point = this.second_cat_point.drifted_center();
        line(first_point.x, first_point.y, second_point.x, second_point.y);
    }
}
