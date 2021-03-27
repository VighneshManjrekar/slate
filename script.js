const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let draw = false

function start(e){
    draw = true
    paint(e)
}

function stop(){
    draw = false
    c.beginPath()
}

function paint(e){
    if(draw== true){
        c.lineWidth = "5"
        c.lineCap = "round"
        c.strokeStyle = "white"
        c.lineTo(e.clientX,e.clientY)
        c.stroke()
        c.beginPath()
        c.moveTo(e.clientX,e.clientY)
    }
}

canvas.addEventListener('mousedown',start)
canvas.addEventListener('mouseup',stop)
canvas.addEventListener('mousemove',paint)

document.getElementById('btn').addEventListener('click',()=>{
    c.clearRect(0,0,innerWidth,innerHeight)
    c.beginPath()
})
