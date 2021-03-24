let cat;

let fishes = [];
let fishes_count = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);

    create_cat();
    create_fishes();

    canvas_updated();
}

function draw() {
    background(255);

    draw_cat();
    draw_fishes();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvas_updated();
}

function canvas_updated() {
    update_cat_layout();
    update_fishes_layout();
}

// Fish

function create_fishes() {
    colorMode(HSB);

    for (let fish_index = 0; fish_index < fishes_count; fish_index++) {
        fish = new Fish();
        fish.color = color(fish_index / fishes_count * 360, 44, 77);
        fish.orbit_enabled = true;
        fish.orbit_angle = fish_index / fishes_count * TAU;
        fish.rotation_angle = random() * TAU;  // This is more uniform if we use 'fish_index / fishes_count * TAU' instead.
        fishes[fish_index] = fish;
    }
}

function draw_fishes() {
    for (let fish_index = 0; fish_index < fishes_count; fish_index++) {
        let fish = fishes[fish_index];
        fish.set_color_hue(fish.color_hue() + 0.5);
        fish.orbit_angle = fish.orbit_angle + 0.001;
        fish.rotation_angle = fish.rotation_angle + 0.008;
        fish.draw();
    }
}

function update_fishes_layout() {
    for (let fish_index = 0; fish_index < fishes_count; fish_index++) {
        fish = fishes[fish_index];
        fish.orbit_center.x = width / 2;
        fish.orbit_center.y = height / 2;
        fish.orbit_width = width * 0.5;
        fish.orbit_height = height * 0.6;
    }
}

// Cat

function create_cat() {
    cat = new Cat();
}

function draw_cat() {
    cat.draw();
}

function update_cat_layout() {
    cat.center.x = width / 2;
    cat.center.y = height / 2;
}
