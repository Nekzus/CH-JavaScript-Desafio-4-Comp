/*** En este cuarto desafio complementario genere el codigo para realizar el calculo del monto en dolares que el usuario ingresa, para que mediante 3 funciones relacionadas
 se realice la conversion a pesos argentinos conforme a la cotizacion oficial del dolar, calcular y aplicar el impuesto pais para compras de servicios digitales en el exterior. ***/


let montoDolares = Number(prompt("INGRESAR VALOR EN U$D.\nPara salir ingrese [0] o presione Cancelar")); //Se solicita al usuario ingrese el valor del servicio en dolares
	

while(montoDolares != 0) {
	//** Declaro como constantes la cotización actual del dolar $98.58 y el porcentaje del 30% del impuesto */
	const dolarHoy = 98.58;
	const porcentaje = 30;

	//** Declaro función de conversión de moneda para convertir el valor del servicio digital en dolares a pesos */
	const conversionMoneda = (dolares, cotizacion) => {
		pesos = dolares * cotizacion;
		return impuestoPais(pesos, porcentaje); // Ejecuto función para calcular el impuesto
	}

    //** Declaro función de calculo de impuesto sobre el monto convertido a pesos */
	const impuestoPais = (pesos) => {
		impuesto = (pesos * porcentaje) / 100;
		return montoFinal(pesos, impuesto); // Ejecuto función para aplicar el valor del impuesto al monto final en pesos
	}
    
	//** Declaro función para aplicar el valor del impuesto al monto final en pesos */
	const montoFinal = (pesos, impuesto) => {
		pesosFinal = pesos + impuesto;
		return alert(`Conversión ${(montoDolares).toFixed(2)}U$D ===> ${(pesosFinal).toFixed(2)}AR$, con un impuesto del ${porcentaje}% \ny una cotización del dolar de ${98.58}AR$.`);
	}
	
	conversionMoneda(montoDolares, dolarHoy); // Inicio ejecución de conversión, enlazadas a las funciones de calculo y aplicacion de impuesto al valor final

	montoDolares = Number(prompt("VOLVER A INGRESAR VALOR EN U$D\nPara salir ingrese [0] o presione Cancelar")); // Se vuelve a solicitar se ingrese el valor del servicio en dolares

};