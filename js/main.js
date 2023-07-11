function start() {
    let op = prompt("¡Bienvenido!\nIngrese el numero de opción elegida:\n\n   1: Ingresar\n   2: Registrarse\n\n   3: Salir");

    switch(op){
        case "1":
            logIn();
            break;
        case "2":
            register(); 
            break;
        case "3":
            alert('Hasta luego');
            break;  
        default: 
            console.log("Debe seleccionar una opción")
    }
}

start();