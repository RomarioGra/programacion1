var edad, estadoCivil, estatura, genero, contadorPersonas=0, porcentajeCondicion, acumuladorEdad=0, acumuladorEstatura=0, promedioEdad=0, promedioEstatura=0;
for(var idPersona=1; idPersona<=10; idPersona++){

    edad=parseInt(prompt("Ingrese la edad de la persona número "+ idPersona));
    estadoCivil=parseInt(prompt("Ingrese el estado civil de la persona "+ idPersona+": 1.Soltero 2.Casado"));
    estatura=parseInt(prompt("ingrese la altura de la persona"+ idPersona));
    genero=parseInt(prompt("Ingrese el genero de la persona "+ idPersona+" 1.Masculino 2.Femenino"));

    if ((edad>=18)&&(estadoCivil==1)&&(estatura>170)&&(genero==1)) {

        contadorPersonas=contadorPersonas+1;
        acumuladorEdad=acumuladorEdad+edad;
        acumuladorEstatura=acumuladorEstatura+estatura;  
    }

}

porcentajeCondicion=(contadorPersonas/10)*100;
promedioEdad=acumuladorEdad/contadorPersonas;
promedioEstatura=acumuladorEstatura/contadorPersonas;

alert("La cantidad de persona con las condiciones dadas es "+porcentajeCondicion);
alert("El promedio de edad de las persona que cumplen con la condicione es "+promedioEdad);
alert("El promedio de estaturas de las personas que cumplen con la condicon es "+promedioEstatura);