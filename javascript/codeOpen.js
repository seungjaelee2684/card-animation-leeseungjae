const codeBox = document.querySelector(".code_box");

let isCodeOpen = false;
let codeValue;

function onClickCodeOpenHandler() {
    if (isCodeOpen) {
        codeBox.style.transform = "translateX(500px)";
    } else {
        codeBox.style.transform = "translateX(0)";
    };

    isCodeOpen = !isCodeOpen;
};

function onClickCodeValueHandler() {
    if (isCodeOpen) {

    };
};