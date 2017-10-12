import Terrain from './terrain'
import Ship from './ship'
import './index.css'

var canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 300;
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

var t = new Terrain(300, 300);
var s = new Ship(300, 300);

t.render(ctx);
s.render(ctx);