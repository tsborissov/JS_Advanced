function attachGradientEvents() {
    const gradient = document.getElementById('gradient-box');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', gradientOut)

    function onMove(ev) {
        let perceantage = Math.floor(ev.offsetX / (ev.target.clientWidth - 1) * 100);
        result.textContent = `${perceantage}%`
    }

    function gradientOut(ev) {
        result.textContent = '';
    }
}