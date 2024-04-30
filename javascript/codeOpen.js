const codeBox = document.querySelector(".code_box");

let isCodeOpen = false; // 코드 박스 오픈 여부

// 버튼을 클릭하여 숨겨져있던 코드 박스 오픈 기능 함수
function onClickCodeOpenHandler() {
    if (isCodeOpen) {
        codeBox.style.transform = "translateX(500px)";
    } else {
        codeBox.style.transform = "translateX(0)";
    };

    isCodeOpen = !isCodeOpen;
};