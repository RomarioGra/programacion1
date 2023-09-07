var alturaCuadrado, baseCuadrado, areaCuadrado, baseTriangulo, areaTrinagulo, alturaTriangulo, areaCirculo, Radio;
var PI=3.1416;
var figurageometrica;

figurageometrica = parseInt(prompt("Seleccione la figura geometrica a la que le desea encontrar el area: 1. Cuadrado 2. Triangulo 3. Circulo"));
switch (figurageometrica) {
    case 1:
        alturaCuadrado = parseFloat(prompt("Ingrese la altura del Cuadrado"));
        baseCuadrado = parseFloat(prompt("Ingrese la base del Cuadrado"));
        areaCuadrado = alturaCuadrado*baseCuadrado;
        alert("El area del cuadrado es igual a" + areaCuadrado);

    case 2:
            alturaTriangulo= parseFloat(prompt("Ingrese la altura del Triangulo"));
            baseTriangulo = parseFloat(prompt("Ingrese la base del Triangulo"));
            areaCuadrado = alturaTriangulo*baseTriangulo/2
            alert("El area del triangulo es igual a" + areaTrinagulo); 
            
    case 3:
                Radio= parseFloat(prompt("Ingrese el radio del circulo"));
                areaCirculo= PI*radio*radio;
                alert("El area del circulo es igual a" + areaCirculo); 

    default:
        alert("La opcion es invalida")
        break;
}