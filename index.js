const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 600
const numShirts = 5
const numRows = 5
const numCols = 5
let shirt1front, shirt1back,shirt2front, shirt2back,shirt3front, shirt3back
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

let shirts = []
const controlCircleSize = 50
let circlePositions
let counter = 0


function preload(){
  shirt1front = loadImage('shirt1-front.png');
  shirt1back = loadImage('test.png');

  shirt2front = loadImage('shirt1-front.png');
  shirt2back = loadImage('shirt1-back.png');

  shirt3front = loadImage('shirt1-front.png');
  shirt3back = loadImage('test.png');

  const shirt1 = {
    front: shirt1front,
    back: shirt1back,
  }

  const shirt2 = {
    front: shirt2front,
    back: shirt2back,
  }

  const shirt3 = {
    front: shirt3front,
    back: shirt3back,
  }

  shirts = [shirt1, shirt2, shirt3]
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);  


  circlePositions = Array.from({length: shirts.length}, (el, i) => {
    const x = canvasWidth/2 - controlCircleSize * 2
    const y = -canvasHeight/2 + controlCircleSize * 2 + (i + 1) * (controlCircleSize * 2)
    return {
        x,y
    }
})


}

function draw(){
  background(120)
  rectMode(CENTER);

  drawControlCircles()

  // rotateX(PI)
 
  // for(let i = 0; i< numCols; i++){
  //   for(let j = 0; j < numRows; j++){
  //     drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

  //     drawShirt(shirt1front, imgSize, (i * imgSize) - canvasWidth/3, (j * imgSize) - canvasHeight/3, 2)
  //     drawShirt(shirt1back, imgSize,(i * imgSize) - canvasWidth/3,  (j * imgSize) - canvasHeight/3 , -2)
  //     //shirtCount++
  //   }

  // }

    // drawBackgroundRectangle(imgSize, (imgSize) - canvasWidth/4, -100)

    drawShirtSide(shirts[counter].front, imgSize, 0, 0, 10)
    drawShirtSide(shirts[counter].back, imgSize, 0, 0 , -10)



  // // replace the images below with new images
  // drawBackgroundBox(imgSize, 250, -100)
  // drawShirt(shirt1front, imgSize, 250, -100, 1)
  // drawShirt(shirt1back, imgSize, 250, -100, -1)

  // theta+=0.01
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
  checkCircles(mouseX - canvasWidth/2, mouseY - canvasHeight/2)
}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    // console.log(theta)
}

function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff - imgSize/4, yOff,0)
    rotateX(-thetaX)
    rotateY(-thetaY)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(xOff, yOff, side)
    translate(xOff,yOff, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    translate(xOff, yOff, side)
    
    texture(img)
    rect(0,0, size, size)
  pop()
}


const drawControlCircles = () => {
  
      circlePositions.forEach((position, idx) => {
          stroke(0)
          if(idx === counter){
              fill(0)
          }else{
              noFill()
          }
          
          ellipse(position.x, position.y, 30)
      })
  
}


// const checkHover = () => {
//   if(mouseX > canvasWidth/4 && 
//       mouseX < canvasWidth/4 + canvasWidth/2 &&
//       mouseY > canvasHeight/4 && 
//       mouseY < canvasHeight/4 + canvasHeight/2){
//           return true
//       }else{
//           return false
//       }

// }

const checkCircles = (mX, mY) => {
  console.log(mX, mY)
  circlePositions.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })
}
