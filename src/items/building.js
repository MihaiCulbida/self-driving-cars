class Building {
    constructor(poly, heightCoef = 0.4) {
        this.base = poly;
        this.heightCoef = heightCoef;
    }

    draw(ctx, viewPoint) {
        const topPoints = this.base.points.map((p) => 
            add(p, scale(subtract(p, viewPoint), this.heightCoef))
        );
        const ceiling = new Polygon(topPoints);


        this.base.draw(ctx, { fill: "white", stroke: "#AAA" })
        ceiling.draw(ctx, { fill: "white", stroke: "#AAA" })
    }
}