const sliders = document.querySelectorAll('input');
const copy = document.getElementById('copy');
const colorElement = document.getElementById('color');

sliders.forEach(slider =>
    slider.addEventListener('input', () => {
        let [r, g, b] = [sliders[0].value, sliders[1].value, sliders[2].value]
        let color = `rgb(${r}, ${g}, ${b})`;
        document.body.style.background = color;
        colorElement.innerHTML = color;
}));

copy.addEventListener('click', () => {
    copy.classList.add('animate');
    navigator.clipboard
        .writeText(colorElement.innerHTML);
    navigator.clipboard
        .readText()
        .then( clipText =>
            console.log(clipText)
    );
    setTimeout(() => copy.classList.remove('animate'), 1000);
});