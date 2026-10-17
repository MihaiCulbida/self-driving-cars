class Crossing {
    constructor(center, directionVector, width, height) {
        this.center = center;
        this.directionVector = directionVector;
        this.width = width;
        this.height = height;

        this.support = new Segment(
            translate(center, angle(directionVector), height / 2),
            translate(center, angle(directionVector), -height / 2),
        );
        this.poly = new Envelope(this.support, width, 0).poly;

        this.borders = [this.poly.segments[0], this.poly.segments[2]];
    }

    draw(ctx) {
        const perp = perpendicular(this.directionVector);
        const line = new Segment(
            add(this.center, scale(perp, this.width / 2)),
            add(this.center, scale(perp, -this.width / 2))
        );

        line.draw(ctx, {
            width: this.height,
            color: "white",
            dash: [11, 11]
        });
    }
}