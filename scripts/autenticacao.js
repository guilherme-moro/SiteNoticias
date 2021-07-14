
function criarUsuario(event){
    event.preventDefault();
    let email = document.getElementById("emailCadastroId").value;
    let senha = document.getElementById("senhaId").value;
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(function(){
        document.getElementById("mensagemCadastrar").innerText = "Usuário cadastrado com sucesso!";
    })
    .catch(function(error) {
         let errorCode = error.code;
         let errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
         document.getElementById("mensagemErroCadastrar").innerText=errorMessage;

  });
}

function autenticarUsuario (event){
    event.preventDefault();
    email = document.getElementById("emailLoginId").value;
    senha = document.getElementById("senhaLoginId").value;
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(){
        let usuario = firebase.auth().currentUser;
        console.log(usuario);
        document.getElementById("mensagemAutenticar").innerText = "Usuário logado com sucesso!";
    })
    .catch(function(error) {
        console.log("Usuário não autenticado");
        let errorMessage = error.message;
        document.getElementById("mensagemErroAutenticar").innerText=errorMessage;
});
}