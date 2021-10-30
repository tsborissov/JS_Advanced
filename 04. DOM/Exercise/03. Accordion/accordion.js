function toggle() {
    let displayStyle = document.getElementById('extra').style.display;
    displayStyle = displayStyle == 'block' ? 'none' : 'block';

    let buttonText = document.getElementsByClassName('button')[0].textContent;
    buttonText = buttonText == 'More' ? 'Less' : 'More';

    document.getElementById('extra').style.display = displayStyle;
    document.getElementsByClassName('button')[0].textContent = buttonText;
}