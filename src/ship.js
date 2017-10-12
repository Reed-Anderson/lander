export default class Ship {
    constructor(screenWidth, screenHeight) {
        this.x = screenWidth / 2
        this.y = 10;
        this.angle = -5;
    }
    render(ctx) {
        ctx.save()
        ctx.strokeStyle = '#000'
        ctx.beginPath()
        //ctx.rotate(this.angle)
        //ctx.translate(this.x, this.y)
        ctx.moveTo(this.x, this.y - 5)
        ctx.lineTo(this.x + 2, this.y + 5)
        ctx.lineTo(this.x - 2, this.y + 5)
        ctx.lineTo(this.x, this.y - 5)
        ctx.stroke()
        ctx.restore()
        console.log('here')
    }
}