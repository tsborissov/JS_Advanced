function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convertTime(value, unit) {
        const inDays = value / ratios[unit];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }

    const inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    document.querySelector('main').addEventListener('click', showResult);

    function showResult(ev) {

        if (ev.target.tagName == 'INPUT' && ev.target.type == 'button') {
            const input = ev.target.parentElement.querySelector('input[type="text"]');

            var time = convertTime(Number(input.value), input.id);
            Object.keys(time).forEach(k => inputs[k].value = time[k]);
        }
    }
}