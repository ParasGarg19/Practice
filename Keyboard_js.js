let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    keys[i].addEventListener('click', function () {
        simulateKeyPress(keys[i].getAttribute('keyname'));
    });
}

function simulateKeyPress(key) {
    switch (key) {
        case 'Backspace':
            text_input.value = text_input.value.slice(0, -1);
            break;
        case 'Tab':
            break;
        case 'Enter':
            text_input.value += '\n';
            break;
        case 'Space':
            text_input.value += ' ';
            break;
        case 'Caps Lock':
            break;
        case 'Shift':
            break;
        case 'Ctrl':
            break;
        case 'Win':
            break;
        case 'Alt':
            break;
        case 'Fn':
            break;

        default:
            text_input.value += key;
            break;
    }
}

window.addEventListener('keydown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active');
        }
    }

    if (e.code == 'Space') {
        spaceKey.classList.add('active');
    }
});

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
            setTimeout(() => {
                keys[i].classList.remove('remove');
            }, 200);
        }
    }

    if (e.code == 'Space') {
        spaceKey.classList.remove('active');
        spaceKey.classList.add('remove');
        setTimeout(() => {
            spaceKey.classList.remove('remove');
        }, 200);
    }
});

night_mode.addEventListener('click', function () {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night');
    }
});

colors_input.addEventListener('input', function () {
    for (let i = 0; i < keys.length; i++) {
        keys[i].style.color = colors_input.value;
    }
    keyboard_lights.style.background = colors_input.value;
})