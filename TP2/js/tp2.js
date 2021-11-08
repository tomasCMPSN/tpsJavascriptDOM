class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }

    mostrarGeneracion(){
        if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            alert(`${this.nombre} pertenece a la Generación Z, su rasgo característico es la irreverencia.`);
        }else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            alert(`${this.nombre} pertenece a la Generación Y, su rasgo característico es la frustación.`);
        }else if(this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            alert(`${this.nombre} pertenece a la Generación X, su rasgo característico es la obsesión por el éxito.`);
        }else if(this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            alert(`${this.nombre} pertenece a la Generación Baby Boom, su rasgo característico es la ambición.`);
        }else{
            alert(`${this.nombre} pertenece a la Generación Silent Generation, su rasgo característico es la austeridad.`);
        }
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            alert(`${this.nombre} es mayor de edad.`)
        }else{
            alert(`${this.nombre} no es mayor de edad.`)
        }
    }

    mostrarDatos(){
        alert(`Nombre: ${this.nombre}.
        Edad: ${this.edad}.
        DNI: ${this.dni}.
        Sexo: ${this.sexo}.
        Peso: ${this.peso}kg.
        Altura: ${this.altura} metros.
        Año de nacimiento: ${this.anioDeNacimiento}.`)
    }

}

function crearPersona(){
    nombre = document.querySelector(`#nombre`).value;
    edad = document.querySelector(`#edad`).value;
    dni = document.querySelector(`#dni`).value;
    sexo = document.querySelector(`#sexo`).value;
    peso = document.querySelector(`#peso`).value;
    altura = document.querySelector(`#altura`).value;
    anio = document.querySelector(`#anio`).value;
    let persona = new Persona(nombre,edad,dni,sexo,peso,altura,anio)
    console.log(persona)
    return persona
}