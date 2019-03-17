function hundred() {
    for (var i = 1; i <= 100; i++) {
        let node = document.createElement('li');
        node.id = i.toString();
        node.classList.add('hilonumber');
        node.innerText = i;
        let numbers = document.getElementById('numbers');
        numbers.appendChild(node);
    }
}

function numberGen() {
    let play = Math.ceil(Math.random() * 100);
    return play;
}


window.onload = () => hundred();