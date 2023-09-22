const button = document.querySelector(".bubbly-button");
document.querySelector(".bubbly-button").onclick = function () {
  let posLeft = 0;
  let intervalIdLeft;
  let posR = 0;
  let intervalIdR;
  let posText
  let intervalIdText;
  clearInterval(intervalIdLeft);
  posLeft = 0;
  intervalIdLeft = setInterval(move, 30);
  console.log("функция start left");
  posR = 185;
  intervalIdR = setInterval(move, 30);
  posText = 530
  intervalIdText = setInterval(move,30);

  function move() {
    const elemLeft = document.getElementById("leftDoor");
    posLeft += 1;
    elemLeft.style.left = posLeft + "px";
    const elemR = document.getElementById("rightDoor");
    posR += 1;
    elemR.style.right = posR + "px";
    const elemText = document.getElementById("cardText")
    posText +=1
    elemText.style.right = posText +"px"
    if (posLeft >= 400) {
      clearInterval(intervalIdLeft);
      console.log("Конец left");
    }
    if (posR >= 400) {
      clearInterval(intervalIdR);
      console.log("конец right");
    }
    if (posText >= 400) {
      clearInterval(intervalIdText);
      console.log("конец text");
    }

    btn = setInterval(hide, 150);
    function hide() {
      button.style.display = "none";
    }

    btn = setInterval(cls, 3000);
    function cls() {
      containDoors.style.display = "none";
    }

    btn = setInterval(increaseSize, 3000);
    function increaseSize() {
      var myObject = document.getElementById("card");
      
      myObject.style.transition = "width 0.8s ease-in-out, height 0.8s ease-in-out"; // Длительность и тип перехода
       
      myObject.style.width = "450px";
      myObject.style.height = "550px";
    }

    btn = setInterval(increaseSizeText, 3000);
    function increaseSizeText() {
      var myObject = document.getElementById("cardText");
      
      myObject.style.transition = "width 0.8s ease-in-out, height 0.8s ease-in-out"; // Длительность и тип перехода
       
      myObject.style.width = "300px";
      myObject.style.height = "550px";
    }

  }
 
 
  }

