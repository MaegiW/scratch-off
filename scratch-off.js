function setup() {
    createCanvas(405, 265);
    //給我一個一張大小跟視窗大小一樣的畫布
    //給我寬405,高265的視窗畫布
  }
  
  function draw() {
    strokeWeight(35);
    if (mouseIsPressed) line(mouseX, mouseY, pmouseX, pmouseY);
  }
  