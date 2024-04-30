const cardBox = document.querySelector(".card_box");

let isFront = false;

function onClickCardHandler() {
  if (isFront) {
    cardBox.style.transform = "rotateY(0deg)";
  } else {
    cardBox.style.transform = "rotateY(180deg)";
  };
  
  isFront = !isFront;
};