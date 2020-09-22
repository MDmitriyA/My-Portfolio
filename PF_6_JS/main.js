var app = document.getElementById('app')
document.body.style.cssText = `
    overflow: hidden
`

let modal = document.createElement('div')
modal.style.cssText = `
    height: 50px;  
    width: 200px; 
    background: white;
    top: calc(50% - ${50 / 2}px); 
    left: calc(50% - ${200 / 2}px);;
    font-size: 24px; 
    z-index: 9; 
    display: none; 
    position: fixed;
    border: 5px solid #383838;
`
document.body.appendChild(modal)

let hello = document.createElement('div')
hello.innerHTML = 'Game Of Darts'
hello.style.cssText = `
    text-align: center;
    position: relative;
    top: 180px;
    z-index: 2;
    color: black;
    font-size: 100px; 
    font-family: Time New Romans, serif; 
`
document.body.appendChild(hello)

let startButton = document.createElement('input')
startButton.type = 'button'
startButton.value = 'Start Game'
startButton.style.cssText = `
    height: 50px;  
    width: 200px;
    font-family: Time New Romans;
    font-size: 25px
`
modal.appendChild(startButton)

let sum = 0

function showModalWin() {
    let darkLayer = document.createElement('div')
    darkLayer.style.cssText = `
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: blue;
        left:0;
        top:0
    `
    document.body.appendChild(darkLayer)

    modal.style.display = 'block'

    startButton.addEventListener('click', function startGame() {
        darkLayer.style.display = 'none'
        modal.style.display = 'none'
        hello.style.display = 'none'
        app.style.display = 'block'
    }, false)
    startButton.addEventListener('click', function playMusic() {
        music.play()
    }, false)
    startButton.addEventListener('click', function countPoints() {
        points.innerText = ''
        sum = 0
        setTimeout(() => {
            showModalWin()
            let yourPoints = document.createElement('div')
            yourPoints.style.cssText = `
                width: 300px;
                height: 50px;
                background: white;
                top: 200px; 
                left: calc(50% - ${300 / 2}px);
                font-family: Time New Romans;
                font-size: 25px; 
                z-index: 9; 
                position: fixed;
                border: 1px solid #383838;
                text-align: center;  
        `
            document.body.appendChild(yourPoints)
            app.style.display = 'none'
            yourPoints.innerText = `You scored ${sum} points`
            setTimeout(() => {
                yourPoints.style.display = 'none'
            }, 3000)

        }, 50000)
    }, false)
}

showModalWin()

app.style.display = 'none'

let music = document.createElement('audio')
music.src = 'audio/muzyka-dlya-montazha-epichnaya-muzyka-2.mp3'
music.loop = true
music.volume = 0.2
app.appendChild(music)

let points = document.createElement('div')
points.style.cssText = `
    width: 200px;
    height: 50px;
    font-size: 40px;
    font-family: Time New Romans, cursive;
    position: absolute;
    line-height: 50px;
    right: 0;
    left: 0;
    border: 1px solid black;
    border-radius: 25%;
    background: black;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`
app.appendChild(points)

let audioOne = document.createElement('audio')
audioOne.src = 'audio/TWANG4.WAV'
app.appendChild(audioOne)

function Circle(size, backgroundColor, point, zIndex = 0) {
    var element = document.createElement('div')
    element.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background-color: ${backgroundColor};
    position: absolute;
    top: calc(50% - ${size / 2}px);
    left: calc(50% - ${size / 2}px);
    z-index: ${zIndex};
    transition: .7s all;   
    `
    element.addEventListener('click', fPlay, false)

    function fPlay() {
        audioOne.play()
    }
    element.addEventListener('click', pointSum, false)

    function pointSum() {
        sum += +`${point}`
        points.innerHTML = sum
    }
    this.appendToApp = () => circlesContainer.appendChild(element)

}

let circlesContainer = document.createElement('div')
circlesContainer.style.cssText = `
        width: ${500}px;
        height: ${500}px;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - ${500 / 2}px);
        left: calc(50% - ${500 / 2}px)
        `
app.appendChild(circlesContainer)

let circles = [
    new Circle(390, 'black', 5),
    new Circle(330, 'green', 10, 1),
    new Circle(220, 'yellow', 20, 2),
    new Circle(150, 'blue', 30, 3),
    new Circle(100, 'purple', 40, 4),
    new Circle(30, 'red', 50, 5)
]
circles.forEach((circle) => circle.appendToApp())

function circlesMove() {
    circlesContainer.style.transition = `1s all`
    setInterval(() => {
        circlesContainer.style.top = `${random (0, 100)}px`
        circlesContainer.style.left = `${random (300, 700)}px`
    }, 500)
}
circlesMove()


circles.forEach((circle) => circle.appendToApp())

var random = (min, max) => Math.round(Math.random() * (max - min) + min)

function Bird(size, imageSrc, intervalTime, zIndex = 5) {
    var element = document.createElement('img')
    element.src = imageSrc
    element.style.cssText = `
    position: absolute;
    width: ${size}px;
    z-index: ${zIndex};
    transition: ${intervalTime / 1000}s all;
    `
    var random = (min, max) => Math.round(Math.random() * (max - min) + min)

    this.appendToApp = () => app.appendChild(element)
    this.startInterval = () => {
        setInterval(() => {
            element.style.top = `${random(0, window.innerHeight - size)}px`
            element.style.left = `${random(0, window.innerWidth - size)}px`
        }, intervalTime)
    }
}

var birds = []
var random = (min, max) => Math.round(Math.random() * (max - min) + min)
for (var i = 1; i <= 5; i++) {
    birds.push(new Bird(random(50, 200), 'img/orel.gif', random(1000, 3000)))
}

birds.forEach((bird) => bird.appendToApp())
birds.forEach((bird) => bird.startInterval())

var img = document.createElement('img')
img.src = 'dart.png'
img.style.zIndex = 10
img.style.width = '80px'
img.style.position = 'absolute'
app.appendChild(img)

var style = document.createElement('style')
style.innerText = `
html, body {
    height: 100%;
}
body:hover{
    cursor: none;
}
`
document.head.appendChild(style) 

var dartInMotion = false

window.onmousemove = (event) => {
    if (!dartInMotion) {
        img.style.top = `${event.clientY - 80}px`
        img.style.left = `${event.clientX - 80}px`
    }
}

window.onclick = (event) => {
    if (!dartInMotion) {
        dartInMotion = false
    }
    img.src = 'img/newDart.gif'
    setTimeout(() => {
        img.src = 'img/dart.png'
    }, 800)
    console.log(event)
}



// var orel = document.createElement('img')
// orel.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6165d18-54f5-4989-900d-ae5404b57f0b/dal9hu1-312417ff-2ea6-4173-bcd7-54d8ba098071.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MTY1ZDE4LTU0ZjUtNDk4OS05MDBkLWFlNTQwNGI1N2YwYlwvZGFsOWh1MS0zMTI0MTdmZi0yZWE2LTQxNzMtYmNkNy01NGQ4YmEwOTgwNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JPmCY9W7V-fPlPl7tXMgahfAZ8UmpeWPNRBqR3-vmuQ'
// orel.style.width = '100px'
// orel.style.position = 'absolute'
// orel.style.transition = '1.5s all'
// orel.style.zIndex = 4
// app.appendChild(orel)
// app.appendChild(orel)

// setInterval(() => {
//     orel.style.top = `${Math.round(Math.random()* window.innerHeight )}px`
//     orel.style.left = `${Math.round(Math.random()* window.innerWidth )}px`
// }, 1500)
// var circuleOne = document.createElement('div')

// circuleOne.style.height = '100px'
// circuleOne.style.width = '100px'
// circuleOne.style.borderRadius = '50%'
// circuleOne.style.backgroundColor = 'red'
// circuleOne.style.position = 'absolute'
// circuleOne.style.top = 'calc(50% - 50px)'
// circuleOne.style.left = 'calc(50% - 50px)'
// circuleOne.style.zIndex = 3
// circuleOne.onclick = (event) => {
//     console.log('Vi popali v tochku red')
// }

// var circuleTwo = document.createElement('div')
// app.appendChild(circuleTwo)
// circuleTwo.style.height = '200px'
// circuleTwo.style.width = '200px'
// circuleTwo.style.borderRadius = '50%'
// circuleTwo.style.backgroundColor = 'green'
// circuleTwo.style.position = 'absolute'
// circuleTwo.style.top = 'calc(50% - 100px)'
// circuleTwo.style.left = 'calc(50% - 100px)'
// circuleTwo.style.zIndex = 2
// circuleTwo.onclick = (event) => {
//     console.log('Vi popali v tochku green')
// }

// var circuleThree = document.createElement('div')
// app.appendChild(circuleThree)
// circuleThree.style.height = '400px'
// circuleThree.style.width = '400px'
// circuleThree.style.borderRadius = '50%'
// circuleThree.style.backgroundColor = 'blue'
// circuleThree.style.position = 'absolute'
// circuleThree.style.top = 'calc(50% - 200px)'
// circuleThree.style.left = 'calc(50% - 200px)'
// circuleThree.style.zIndex = 1
// circuleThree.onclick = (event) => {
//     console.log('Vi popali v tochku blue')
// }

// var circuleFour = document.createElement('div')
// app.appendChild(circuleFour)
// circuleFour.style.height = '600px'
// circuleFour.style.width = '600px'
// circuleFour.style.borderRadius = '50%'
// circuleFour.style.backgroundColor = 'purple'
// circuleFour.style.position = 'absolute'
// circuleFour.style.top = 'calc(50% - 300px)'
// circuleFour.style.left = 'calc(50% - 300px)'
// circuleFour.onclick = (event) => {
//     console.log('Vi popali v tochku green')
// }