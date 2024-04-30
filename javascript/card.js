const card = document.querySelector(".card");
const cardBox = document.querySelector(".card_box");

let isFront = false; // 카드 앞뒷면 확인하기 위한 값
let coordinateData; // 카드 위에 올린 마우스의 좌표값이 상하좌우를 판단하는 변수

// 카드에 마우스 올렸을 때 효과
card.addEventListener("mousemove", function (event) {
  if (!isFront) {
    let x = event.offsetX;
    let y = event.offsetY;
    let width = this.offsetWidth;
    let height = this.offsetHeight;
    let rotateX = 1 / 10 * y - 20;
    let rotateY = -2 / 15 * x + 20;

    cardBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (x > width / 2) {
      if (y > height / 2) {
        coordinateData = "bottom";
      } else {
        coordinateData = "right";
      };
    } else {
      if (y > height / 2) {
        coordinateData = "left";
      } else {
        coordinateData = "top";
      };
    };
  };
});

// 카드에서 마우스가 벗어났을 때 카드 원위치
card.addEventListener("mouseleave", function () {
  if (!isFront) {
    cardBox.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };
});

function onClickCardHandler() {
  if (!isFront) {
    if (coordinateData === "right") {
      cardBox.style.transform = `rotateY(-180deg)`;
    } else if (coordinateData === "bottom") {
      cardBox.style.transform = "rotateX(180deg)";
    } else if (coordinateData === "left") {
      cardBox.style.transform = "rotateY(180deg)";
    } else {
      cardBox.style.transform = "rotateX(-180deg)";
    };
  } else {
    cardBox.style.transform = "rotateY(0deg)";
  };

  isFront = !isFront;
};