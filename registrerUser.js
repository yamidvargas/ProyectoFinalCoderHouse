//creo clase usuario para almacenar los datos
class Users {
    constructor(dates) {
        this.dates = dates
    }

    addPerson(storedName) {
        this.dates.push(storedName)
    }

    showUsers() {
        console.log(this.dates)
    }
}
//creo la clase datos que recibe nombre email y contraseña
class Dates {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
//funcion recibe los nombres del formulario y devuelve nuevo Dates
function receiveNames() {

    let agarrarNombre = document.querySelector(".nombre");
    let agarrarContrasena = document.querySelector(".clave");
    let agarrarcorreo = document.querySelector(".correo");


    let name = agarrarNombre.value;
    let email = agarrarcorreo.value;
    let password = agarrarContrasena.value
    return new Dates(name, email, password)
}

//rebibe el nuevo Dates y le hace push al array de datos
function sendUser() {
    let storedName = receiveNames()
    storedData.addPerson(storedName)
    storedData.showUsers();
}

//funcion para tomar los elementos de formulario y crear nuevo usuario
function createUser() {

    let agarrarNombre = document.querySelector(".nombre");
    let agarrarContrasena = document.querySelector(".clave");
    let agarrarcorreo = document.querySelector(".correo");

    let name = agarrarNombre.value;
    let email = agarrarcorreo.value;
    let password = agarrarContrasena.value

    return new Users(name, email, password)
}


//agarrar nodos y agregar evento a boton de registrar usuario
function registrarUsuario() {
    let grabNewUser = document.querySelector("#nuevo_usuario");
    let grabName = document.querySelector(".nombre");
    let grabPassword = document.querySelector(".clave");
    let grabEmail = document.querySelector(".correo");


    //agregar evento a boton para que guarde los usuarios en el array
    grabNewUser.addEventListener("click", (e) => {
        e.preventDefault()
        let arrayGuardado = localStorage.getItem("guardarmisnombres")

        if (grabName.value.trim() !== "" || grabPassword.value.trim() !== "" || grabEmail.value.trim() !== "") {
            //agregar elementos de usuario a array
            sendUser()
            guardarEnLocalStorage()

            alert("usuario registrado correctamente")
                //ver los usuarios en consola

        } //else if (grabEmail.value.trim() == arrayGuardado.email) {
        // console.log("este usuario ya existe")
        // } 
        else {
            console.log("faltan datos")

        }

    })

}
registrarUsuario()


let storedData = new Users([])