function askName() {
    var nameReturn = document.getElementById
    ('ask-name');
    var name = prompt('plez enter your addres- i meant your name' , 'AQUI');
    if (name == '') {
        alert('please try again bestie');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! nice to meet you!';
    }
}

function askQuestion() {
    var q = prompt('am i the kewlest person in town');
    if (q != null) {
        document.getElementById('question').innerHTML = 'YIKES🐬 ' + q +' is a lot of wood!'
    }
}