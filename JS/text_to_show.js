const hiddenTexts = document.querySelectorAll('.hiddenText');
let textToShow = null;

const hideAllTexts = () => {
    hiddenTexts.forEach(text => text.style.display = 'none');
};

const showText = num => {
    const newTextToShow = document.getElementById(`text${num}`);
    // const newImgToShow = document.getElementById(`img${num}`);

    if (newTextToShow === textToShow && textToShow.style.display === 'block') {
        hideAllTexts();
    } else {
        hideAllTexts();
        newTextToShow.style.display = 'block';
        // newImgToShow.style.display = 'block';
        textToShow = newTextToShow;
    }
};

hideAllTexts();