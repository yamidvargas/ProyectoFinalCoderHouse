//guardar usuarios en el localstorage

function guardarEnLocalStorage() {

    localStorage.setItem("guardarmisnombres", JSON.stringify(storedData.dates));
    let arrayGuardado = JSON.parse(localStorage.getItem("guardarmisnombres"));
}

function usersList() {
    let nodeUser = document.getElementById("node-email");
    let nodePassword = document.getElementById("node-password");

    let EmailUser = nodeUser.value;
    let passwordUser = nodePassword.value;

    reviewData(EmailUser, passwordUser);

}

//revisa los datos y confirma si correo esta registrado y si la contrasena es correcta
function reviewData(EmailUser, passwordUser) {

    let SavedArray = JSON.parse(localStorage.getItem("guardarmisnombres"));
    let usersSaved = SavedArray

    //ciclo verificar si coninciden datos
    for (let index = 0; index < usersSaved.length; index++) {

        let filterUsers = usersSaved.filter(x => x.email == EmailUser)

        if (EmailUser == usersSaved[index].email && passwordUser == usersSaved[index].password) {
            console.log("aqui voy");
            window.location.href = "nuevapagina.html"

            //verifica si contrasena es correcta
        } else if (EmailUser == usersSaved[index].email && passwordUser !== usersSaved[index].password) {

            alert("la contraseña es incorrecta");

            //verifica si uduario ya esta registrado
        } else if (filterUsers.length == 0) {

            alert("correo electronico no esta registrado")
            break;
        }
    }
}


function IniciarSesion() {
    let nodoIniciar = document.getElementById("node-init");
    nodoIniciar.addEventListener("click", (e) => {
        e.preventDefault()

        usersList()

    })


}
IniciarSesion()