var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');

// Função dispara quando o botão add é clicado
addButton.addEventListener('click', function () {
    create(nameInput.value, ageInput.value);
});

function create(name, age) {
    var data = {
        name: name,
        age: age
    };

    // Passando a coleção users para o banco
    // Mesmo que não exista no banco ela é criada
    // Push serve para enviar data(informação) para o banco
    return firebase.database().ref().child('users').push(data);
}

// toda vez que um valor for incluso ou alterado a função será disparada
firebase.database().ref('users').on('value', function (snapshot) {
    // Userlist é o <li>
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ' : ' + item.val().age));
        usersList.appendChild(li);
    });
});
