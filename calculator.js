window.onload = function () {
    var buttons = document.getElementsByTagName('span'),
    result = document.querySelectorAll('.result p')[0],
    clear = document.getElementsByClassName('clear')[0];
};

for (var i = 0; i < buttons.length; i += 1) {
    if (buttons[i] === '=') {
    addEventListener("click", calculate(i));
} else {
    addEventListener("click", addValue(i));
    }
}

function addValue (i)

function calculate (i)