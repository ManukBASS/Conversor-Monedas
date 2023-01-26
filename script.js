const monedaElegida_one = document.getElementById('moneda-uno');
const monedaElegida_two = document.getElementById('moneda-dos');
const cantidadElegida_one = document.getElementById('cantidad-uno');
const cantidadElegida_two = document.getElementById('cantidad-dos');
const cambioElegido = document.getElementById('cambio');
const tazaElegida = document.getElementById('taza');


function calcular(){
    const moneda_one = monedaElegida_one.value;
    const moneda_two = monedaElegida_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioElegido.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadElegida_two.value = (cantidadElegida_one.value * taza).toFixed(2);

    } );
    
}

monedaElegida_one.addEventListener('change', calcular);
cantidadElegida_one.addEventListener('input', calcular);
monedaElegida_two.addEventListener('change', calcular);
cantidadElegida_two.addEventListener('input', calcular);

taza.addEventListener('click', () =>{
    const temp = monedaElegida_one.value;
    monedaElegida_one.value = monedaElegida_two.value;
    monedaElegida_two.value = temp;
    calcular();
} );


calcular();