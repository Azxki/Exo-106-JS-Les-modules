export {createDiv, createInput, createLabel}

function createDiv(x) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = x;
}

function createInput(x, y, z) {
    let input = document.createElement('input');
    document.body.appendChild(input);
    input.type = x;
    input.value = y;
    input.innerHTML = z;
}

function createLabel(x) {
    let label = document.createElement('label');
    document.body.appendChild(label);
    label.innerHTML = x;
}

