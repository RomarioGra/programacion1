var nombre;
var estadoCivil;
nombre = prompt("Igrese el nombre d ela persona");
estadoCivil = parseInt(prompt("Ingrese el estado civil: 1. casado 2. soltero 3. separado 4. viudo"));

switch (estadoCivil) {
    case 1:
        alert (nombre + "es solter@")
        break;

    case 2:
        alert (nombre + "es casad@")
        break;
        
    case 3:
        alert (nombre + "es separad@")

    case 4:
        alert (nombre + "es viud@")
        
    case 5:
        alert (nombre + "esta en union libre")
    
    default:
        alert("estado civil no valido")
        break;

}