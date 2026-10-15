class Building {
    constructor(poly, heightCoef = 0.4) {
        this.base = poly;
        this.heightCoef = heightCoef;
    }

    draw(ctx, viewPoint) {
        const topPoints = this.base.points.map((p) => 
            add(p, scale(subtract(p, viewPoint), this.heightCoef * 0.6))
        );
        const ceiling = new Polygon(topPoints);

        const sides = [];
        for(let i = 0; i < this.base.points.length; i++) {
            const nextI = (i + 1) % this.base.points.length;
            const poly = new Polygon([
                this.base.points[i], this.base.points[nextI],
                topPoints[nextI], topPoints[i]
            ]);
            sides.push(poly);
        }
        sides.sort(
            (a, b) =>
                b.distanceToPoint(viewPoint) -
                a.distanceToPoint(viewPoint)
        );

        const baseMidpoints = [
            average(this.base.points[0], this.base.points[1]),
            average(this.base.points[2], this.base.points[3])
        ];

        const topMidpoints = baseMidpoints.map((p) => 
            add(p, scale(subtract(p, viewPoint), this.heightCoef))
        );

        const roofPolys = [
            new Polygon([
                ceiling.points[0], ceiling.points[3],
                topMidpoints[1], topMidpoints[0]
            ]),
            new Polygon([
                ceiling.points[2], ceiling.points[1],
                topMidpoints[0], topMidpoints[1]
            ])
        ];

        this.base.draw(ctx, { fill: "white", stroke: "#AAA" });
        for (const side of sides) {
            side.draw(ctx, { fill: "white", stroke: "#AAA" });
        }
        ceiling.draw(ctx, { fill: "white", stroke: "#AAA" });
        for (const poly of roofPolys) {
            poly.draw(ctx, { fill: "#D44", stroke: "#C44", lineWidth: 8, join: "round" });
        }
    }
}