var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    return false;
});

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    if (end === 100) {
        element.innerHTML = `${value}%`;
    } else {
        element.innerHTML = `+${value}`;
    }
    if (progress < 1) {
        window.requestAnimationFrame(step);
    }
    };
    window.requestAnimationFrame(step);
}

document.querySelectorAll('.number').forEach((element) => {
    const endValue = parseInt(element.getAttribute('data-count'));
    animateValue(element, 0, endValue, 2000);
});
