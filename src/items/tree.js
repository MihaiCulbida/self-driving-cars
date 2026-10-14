class Tree {
    constructor(center, size, heightCoef = 0.3) {
        this.center = center;
        this.size = size;
        this.heightCoef = heightCoef;
    }

    draw(ctx, viewPoint) {
        const diff = subtract(this.center, viewPoint);

        const top = add(this.center, scale(diff, this.heightCoef));
        
        const levelCount = 7;
        for(let level = 0; level < levelCount; level++) {
            const t = level / (levelCount - 1);
            const point = lerp2D(this.center, top, t);
            point.draw(ctx, { size: this.size, color: "darkgreen" })
        }
        new Segment(this.center, top).draw(ctx);
    }
}