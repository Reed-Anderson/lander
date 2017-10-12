/**
 * @class terrain
 * A terrain to land on or collide with
 */
export default class Terrain {
    constructor(width, height) {
        var x = 0;
        var y = Math.random() * height / 2 + height / 2 - 10;
        var dist = Math.random() * 10;        
        this.path = [];

        function clampHeight(y) {
            do {
                var newHeight = y;
                var probability = Math.random();
                if (probability < .30) {
                    newHeight -= Math.random() * 50;
                }
                else if (probability < .60) {
                    newHeight += Math.random() * 50;
                }
            } while (newHeight < height/2 || newHeight > (height - 10))
            return newHeight;
        }
        while(x + dist < width) {
            // Push endpoint to our array  
            y = clampHeight(y);
            this.path.push({ 
                x: x, 
                y: y
            })
            x += dist;
            // Calculate a random distance
            dist = Math.random() * 10;
        }
    }
    render(ctx) {
        ctx.save();
        // TODO draw terrain
        ctx.beginPath();
        ctx.moveTo(this.path[0].x, this.path[0].y)
        this.path.forEach(point => {
            ctx.lineTo(point.x, point.y);
        })
        ctx.stroke();
        ctx.restore();
    }
}