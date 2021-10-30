canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="turquoise"
ctx.lineWidth=2
ctx.arc(400,300,75,0,360)
ctx.stroke()
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clentY-canvas.offsetTop
    ctx.beginPath()
ctx.strokeStyle="turquoise"
ctx.lineWidth=2
ctx.arc(mousex,mousey,75,0,360)
ctx.stroke()

}