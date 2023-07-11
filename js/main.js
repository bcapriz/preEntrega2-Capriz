const date = new Date();
const hour = date.getHours();
const nameWelcome = prompt ("Ingrese su nombre");

function getInformationForFilter() {
  let brand = prompt("¿Qué marca de calzado estás buscando?");
  let priceMin = prompt("Coloca el precio mínimo que deseas");
  let priceMax = prompt("Coloca el precio máximo que deseas");
  let color = prompt("¿Qué color deseas buscar?");
  }
  
function greeting (hour) {
if (hour < 12) {
  greeting = console.log ("¡Buenos dias " + nameWelcome + "!"),
  document.write ("¡Buenos dias " + nameWelcome + "!");
} else if (hour < 18) {
  greeting = console.log ("¡Buenas tardes " + nameWelcome + "!"),
  document.write ("¡Buenas tardes " + nameWelcome + "!");
} else {
  greeting = console.log ("¡Buenas noches " + nameWelcome + "!")
  document.write ("¡Buenas noches " + nameWelcome + "!");
} }


/**********************************************************************/


const searchData = {
  brand: brand,
  model: '',
  priceMin: priceMin,
  priceMax: priceMax,
  color: color,
}

function showSnkrs(snkrs) {
  snkrs.forEach(snkrs => {
    console.log( "Marca: " + snkrs.brand + " | Modelo: " + snkrs.model + " |Color: " + snkrs.color + " |Precio: $ " + snkrs.price)

    document.write("<p>" + "Marca: " + snkrs.brand + " | Modelo: " + snkrs.model + " |Color: " + snkrs.color + " |Precio: $ " + snkrs.price + "</p>")

  })
}

function noResults() {
  console.log("No hay Resultados")
  document.write("<p>No hay Resultados</p>")
}


function filterBrand(snkrs) {
  if (searchData.brand) {
    return snkrs.brand == searchData.brand
  }
  return snkrs;
}

function filterModel(snkrs) {
  if (searchData.model) {
    return snkrs.model == searchData.model
  }
  return snkrs;
}

function filterMin(snkrs) {
  if (searchData.priceMin) {
    return snkrs.price >= searchData.priceMin
  }
  return snkrs;
}

function filterMax(snkrs) {
  if (searchData.priceMax) {
    return snkrs.price <= searchData.priceMax
  }
  return snkrs;
}



function filterColor(snkrs) {
  if (searchData.color) {
    return snkrs.color == searchData.color
  }
  return snkrs;
}


function filterSnkrs() {
  getInformationForFilter();  
  let result = snkrs.filter(filterBrand).filter(filterModel).filter(filterMin).filter(filterMax).filter(filterColor);


  if (result.length) {
    showSnkrs(result)
  } else {
    noResults()
  }
}


function start() {
   greeting();
    let op = prompt("Ingrese el numero de opción elegida:\n\n   1: Ver productos disponibles \n   2: Filtrar busqueda \n\n   3: Salir");

    switch(op){
        case "1":
           showSnkrs(snkrs);
            break;
        case "2":
            filterSnkrs(); 
            break;
        case "3":
            alert('Hasta luego');
            break;  
        default: 
            console.log("Debe seleccionar una opción")
    }
}

start();
