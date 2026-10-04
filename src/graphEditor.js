class GraphEditor {
    constructor(canvas, graph) {
        this.canvas = canvas;
        this.graph = graph;
        this.ctx = canvas.getContext('2d');

        this.selected = null;
        this.hovered = null;

        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousedown", (evt) => {
            if (evt.button == 2) {
                if (this.hovered) {
                    this.#removePoint(this.hovered);
                }
            }
             if (evt.button == 0) {
                const mouse = new Point(evt.offsetX, evt.offsetY);
                if (this.hovered) {
                    this.selected = this.hovered;
                    return;
                }
                this.graph.addPoint(mouse);
                this.selected = mouse;
            }
        });
        this.canvas.addEventListener("mousemove", (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points, 10);
        });
        this.canvas.addEventListener("contextmenu", (evt) => evt.preventDefault());
    }

    #removePoint(point) {
        this.graph.removePoint(point);
        this.selected = null;
        this.hovered = null;
    }
    
    display() {
        this.graph.draw(this.ctx);
        if (this.hovered) {
            this.hovered.draw(this.ctx, {fill: true });
        }
        if (this.selected) {
            this.selected.draw(this.ctx, {outline: true });
        }
    }
}