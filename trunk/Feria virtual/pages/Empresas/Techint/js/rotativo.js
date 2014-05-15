/* ARRAY DE IMAGENES */
ads = new Array(3);
ads[0] = "images/s1top1.png";
ads[1] = "images/s1top2.png";
ads[2] = "images/s1top3.png";

/*ARRAY DE URLs */ 
arrayURLs = new Array(3);
arrayURLs[0] = "https://www.facebook.com/comunidadtjobs"
arrayURLs[1] = "https://www.facebook.com/comunidadtjobs"
arrayURLs[2] = "https://www.facebook.com/comunidadtjobs"

//variable para llevar la cuenta de las imagenes
var longuitudArray = ads.length;
var contador = 0

// Cojemos un numero aleatorio
contador = Math.floor((Math.random() * longuitudArray))

// Cambia la imagen cada segundo en este ejemplo
var tiempo = 4// En segundos
var timer = tiempo * 1000;

function banner() {
	contador++;
	contador = contador % longuitudArray
	$("#topUnilever").fadeOut(300, function() {
        	$("#topUnilever").attr('src',ads[contador]);
    	}).fadeIn(300);
    	
	setTimeout("banner()", timer);
}

function ponerURL() {
	contador2 = contador;
	url = window.open(arrayURLs[contador2]);
	return false;
}