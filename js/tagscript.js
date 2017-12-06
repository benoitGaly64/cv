var settings = {
//height of sphere container
    height: 200,
//width of sphere container
    width: 250,
//radius of sphere
    radius: 40,
//rotation speed
    speed: 0.6,
//sphere rotations slower
    slower: 0.9,
//delay between up<a href="https://www.jqueryscript.net/time-clock/">date</a> position
    timer: 5,
//dependence of a font size on axis Z
    fontMultiplier: 30,
//tag css stylies on mouse over
    hoverStyle: {
        border: 'none',
        color: '#0b2e6f'
    },
    //tag css stylies on mouse out
    mouseOutStyle: {
        border: '',
        color: ''
    }
};
$(document).ready(function () {
    $('#tagcloud').tagoSphere(settings);
});
