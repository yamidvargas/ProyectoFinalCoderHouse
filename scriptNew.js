//alerta de inicio de sesion con llamado a api para imagenes de perros
function showData(data) {
    data.forEach((Element) => {
        Swal.fire({
            title: "Bienvenido Grommer, aqui puedes ver tu agenda de citas",
            imageUrl: `${Element.url}`,
        })
    })

}

function welcomeGromer() {
    const url = "https://api.thedogapi.com/v1/images/search"
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            showData(data)
        })
}
//welcomeGromer()
let grabLista = document.getElementById("lista"),

    grabOwner = document.getElementById("owner"),
    grabPetName = document.getElementById("pet-name"),
    grabBreed = document.getElementById("breed-pet"),
    grabPhone = document.getElementById("phone-number"),
    grabCalendar = document.getElementById("calendar");

class Services {
    constructor(appoinments) {
        this.appoinments = appoinments;
    }

    //agregar citas al array
    addApoinment(appoinment) {

        this.appoinments.push(appoinment)
    }

    //mirar agenda de citas
    showApoinment() {
            console.log(`las citas programadas en su agenda son `, this.appoinments);

        }
        //mostrar busqueda realizada por usuario
    searchAppoinment(newSearch) {
            const addSearch = this.appoinments.filter(search => {
                return search.day === newSearch;
            })
            console.log(`para el dia ${newSearch} estan agendadas estas citas:`, addSearch);
        }
        //borrar una cita agendada
    clearAppoinment(writeClear) {
        const index = this.appoinments.findIndex(element => {
            return element.idAppoinment === writeClear;
        });

        let clear = this.appoinments.splice(index, 1)

        console.log(`la cita con id ${writeClear} se ha eliminado correctamente`)
        console.log(`agenda actualizada`, this.appoinments);

    }
}
//clase con los requisitos para agendar una cita
class Appoinment {
    constructor(owner, petName, breedPet, phoneNumber, myCalendar) {

        this.owner = owner
        this.petName = petName
        this.breedPet = breedPet
        this.phoneNumber = phoneNumber
        this.myCalendar = myCalendar
    }
}
//agregar evento a boton agregar
function appoinmentSaved() {

    grabBtnNuevaTarea = document.getElementById("btn-agregar")

    grabBtnNuevaTarea.addEventListener("click", () => {

        savedAppoinments()

    })

}
//agregar citas agendadas al array
function savedAppoinments() {
    const appoinment = createAppoinment();
    service.addApoinment(appoinment);

    const myAppoinments = service.appoinments;
    localStorage.setItem("guardarmiscitas", JSON.stringify(myAppoinments));
    appoinmentDom()
        //message(appoinment)

}
//funcion para agregar cita al doom
function appoinmentDom() {
    let arrayGuardado = JSON.parse(localStorage.getItem("guardarmiscitas"));
    const grabFather = document.querySelector("#padre");
    // const creteDiv = document.createElement("div");
    const creteDiv = document.createElement("div");
    creteDiv.onclick = quitar;

    //creteDiv.onclick = quitar;
    grabFather.appendChild(creteDiv);


    console.log("mi array en el local", arrayGuardado)
    arrayGuardado.forEach((mostrar) => {

        creteDiv.innerHTML = `<div id="hijo"> 
                              <p> nombre de mascota: <b>${mostrar.petName}</b> <br>
                                                raza:<b>${mostrar.breedPet} </b>  <br>
                                         propietario:<b>${mostrar.owner}</b>   <br>
                                   numero telefonico:<b>${mostrar.phoneNumber}</b>   <br>
                                         fecha:      <b>${mostrar.myCalendar}</b>    </p>
                                         
                `

    })

}
//tomar los nombres ingresados por el usuario
function createAppoinment() {
    let owner = grabOwner.value,
        petName = grabPetName.value,
        breedPet = grabBreed.value,
        phoneNumber = grabPhone.value,
        myCalendar = grabCalendar.value

    return new Appoinment(owner, petName, breedPet, phoneNumber, myCalendar)

}
//mostrar en el dom las citas guardadas en el local storage
function message(appoinment) {

    let arrayGuardado = JSON.parse(localStorage.getItem("guardarmiscitas"));
    const grabFather = document.querySelector("#padre");
    // const creteDiv = document.createElement("div");
    const creteDiv = document.createElement("div");

    grabFather.appendChild(creteDiv);

    console.log("mi array en el local", arrayGuardado)
    arrayGuardado.forEach((mostrar) => {

        creteDiv.innerHTML += `<div id="hijo" class="hijos"> 
                              <p> nombre de mascota: <b>${mostrar.petName}</b> <br>
                                                raza:<b>${mostrar.breedPet} </b>  <br>
                                         propietario:<b>${mostrar.owner}</b>   <br>
                                   numero telefonico:<b>${mostrar.phoneNumber}</b>   <br>
                                         fecha:      <b>${mostrar.myCalendar}</b>    </p>`



    })


}

appoinmentSaved()

service = new Services([]);
message()

function quitar() {
    console.log("vamos a eliminarlo")
    document.getElementById("padre").removeChild(this);
    let arrayGuardado = JSON.parse(localStorage.getItem("guardarmiscitas"))
    console.log(arrayGuardado)
    console.log(creteDiv)

}