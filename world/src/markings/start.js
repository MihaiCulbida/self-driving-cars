class Start extends Marking {
    constructor(center, directionVector, width, height) {
        super(center, directionVector, width, height);
        this.type = "start";

        this.img = new Image();
        this.img.src = "car.png";
        
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(angle(this.directionVector) - Math.PI / 2);
        
        const maxCarWidth = 30;
        const ratio = maxCarWidth / this.img.width;
        const carWidth = this.img.width * ratio;
        const carHeight = this.img.height * ratio;

        ctx.drawImage(
            this.img,
            -carWidth / 2,
            -carHeight / 2,
            carWidth,
            carHeight
        );

        ctx.restore();
    }
}