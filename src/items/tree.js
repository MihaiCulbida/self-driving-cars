class Tree {
    constructor(center, size) {
        this.center = center;
        this.size = size;
    }

    draw(ctx) {
        this.center.draw(ctx, { size: this.size, color: "green" })
    }
}