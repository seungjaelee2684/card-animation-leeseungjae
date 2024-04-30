const card = document.querySelector(".card");
const cardBox = document.querySelector(".card_box");

let isFront = false; // 카드 앞뒷면 확인하기 위한 값
let coordinateData; // 카드 위에 올린 마우스의 좌표값이 상하좌우를 판단하는 변수

// 카드에 마우스 올렸을 때 효과 함수
card.addEventListener("mousemove", function (event) {
  // 마우스를 올렸을 때 마우스의 위치 좌표에 따라 카드가 기울어지는(회전하는) 효과 구현
  // 앞면일 때는 효과 삭제
  if (!isFront) {
    let x = event.offsetX; // x 좌표
    let y = event.offsetY; // y 좌표
    let width = this.offsetWidth; // 요소의 넓이 값
    let height = this.offsetHeight; // 요소의 높이 값

    // 마우스의 위치 좌표값에 따라 바뀌는 회전율(최대 20deg까지)
    let rotateX = 1 / 10 * y - 20;
    let rotateY = -2 / 15 * x + 20;

    cardBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // 현재 마우스의 위치 좌표에 따라 카드를 어느 방향으로 회전시킬지 변수에 저장
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

// 카드를 클릭했을 때 효과 함수
function onClickCardHandler() {
  if (!isFront) {
    // 저장된 방향 변수에 따라 조건부로 회전 방향 결정
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

  // 앞뒷면 변경
  isFront = !isFront;
};