class Cat {
    constructor() {
        this.center = createVector(0, 0);
        this.cat_line_segments = [];
        
        //// Test stuff.
        let cat_point_1 = new CatPoint(-100, -100);
        let cat_point_2 = new CatPoint(200, 200);
        let cat_point_3 = new CatPoint(-100, 300);

        let cat_line_segment_1 = new CatLineSegment(cat_point_1, cat_point_2);
        let cat_line_segment_2 = new CatLineSegment(cat_point_1, cat_point_3);
        let cat_line_segment_3 = new CatLineSegment(cat_point_2, cat_point_3);

        this.cat_line_segments.push(cat_line_segment_1);
        this.cat_line_segments.push(cat_line_segment_2);
        this.cat_line_segments.push(cat_line_segment_3);
        //// End of test stuff.
    }

    draw() {
        push();

        translate(this.center.x, this.center.y);
        
        for (let cat_line_segment_index = 0; cat_line_segment_index < this.cat_line_segments.length; cat_line_segment_index++) {
            let cat_line_segment = this.cat_line_segments[cat_line_segment_index];
            cat_line_segment.draw();
        }

        pop();
    }
}

class CatPoint {
    constructor(x, y) {
        this.center = createVector(x, y);
        this.drift_distance = 0;
        this.drift_angle = 0;
    }

    drifted_center() {
        let drifted_center = p5.Vector.fromAngle(this.drift_angle, this.drift_distance);
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
