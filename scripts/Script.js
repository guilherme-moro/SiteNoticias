
function carregarNoticiasIndex(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;

    document.getElementById("categoriaNoticiaIndex1").innerText = noticias.PaginaIndex[0].CATEGORIA;
    document.getElementById("tituloNoticiaIndex1").innerText = noticias.PaginaIndex[0].TITULO;
    document.getElementById("autorNoticiaIndex1").innerText = noticias.PaginaIndex[0].AUTOR;
    document.getElementById("textoNoticiaIndex1").innerText = noticias.PaginaIndex[0].TEXTO;

    document.getElementById("categoriaNoticiaIndex2").innerText = noticias.PaginaIndex[1].CATEGORIA;
    document.getElementById("tituloNoticiaIndex2").innerText = noticias.PaginaIndex[1].TITULO;
    document.getElementById("autorNoticiaIndex2").innerText = noticias.PaginaIndex[1].AUTOR;
    document.getElementById("textoNoticiaIndex2").innerText = noticias.PaginaIndex[1].TEXTO;

    document.getElementById("categoriaNoticiaIndex3").innerText = noticias.PaginaIndex[2].CATEGORIA;
    document.getElementById("tituloNoticiaIndex3").innerText = noticias.PaginaIndex[2].TITULO;
    document.getElementById("autorNoticiaIndex3").innerText = noticias.PaginaIndex[2].AUTOR;
    document.getElementById("textoNoticiaIndex3").innerText = noticias.PaginaIndex[2].TEXTO;
    }
}

function carregarNoticiasPolitica(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;

    document.getElementById("categoriaNoticiaPolitica1").innerText = noticias.PaginaPolitica[0].CATEGORIA;
    document.getElementById("tituloNoticiaPolitica1").innerText = noticias.PaginaPolitica[0].TITULO;
    document.getElementById("autorNoticiaPolitica1").innerText = noticias.PaginaPolitica[0].AUTOR;
    document.getElementById("textoNoticiaPolitica1").innerText = noticias.PaginaPolitica[0].TEXTO;

    document.getElementById("categoriaNoticiaPolitica2").innerText = noticias.PaginaPolitica[1].CATEGORIA;
    document.getElementById("tituloNoticiaPolitica2").innerText = noticias.PaginaPolitica[1].TITULO;
    document.getElementById("autorNoticiaPolitica2").innerText = noticias.PaginaPolitica[1].AUTOR;
    document.getElementById("textoNoticiaPolitica2").innerText = noticias.PaginaPolitica[1].TEXTO;

    document.getElementById("categoriaNoticiaPolitica3").innerText = noticias.PaginaPolitica[2].CATEGORIA;
    document.getElementById("tituloNoticiaPolitica3").innerText = noticias.PaginaPolitica[2].TITULO;
    document.getElementById("autorNoticiaPolitica3").innerText = noticias.PaginaPolitica[2].AUTOR;
    document.getElementById("textoNoticiaPolitica3").innerText = noticias.PaginaPolitica[2].TEXTO;

    document.getElementById("categoriaNoticiaPolitica4").innerText = noticias.PaginaPolitica[3].CATEGORIA;
    document.getElementById("tituloNoticiaPolitica4").innerText = noticias.PaginaPolitica[3].TITULO;
    document.getElementById("autorNoticiaPolitica4").innerText = noticias.PaginaPolitica[3].AUTOR;
    document.getElementById("textoNoticiaPolitica4").innerText = noticias.PaginaPolitica[3].TEXTO;
    }
}

function carregarNoticiasSaude(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;

    document.getElementById("categoriaNoticiaSaude1").innerText = noticias.PaginaSaude[0].CATEGORIA;
    document.getElementById("tituloNoticiaSaude1").innerText = noticias.PaginaSaude[0].TITULO;
    document.getElementById("autorNoticiaSaude1").innerText = noticias.PaginaSaude[0].AUTOR;
    document.getElementById("textoNoticiaSaude1").innerText = noticias.PaginaSaude[0].TEXTO;

    document.getElementById("categoriaNoticiaSaude2").innerText = noticias.PaginaSaude[1].CATEGORIA;
    document.getElementById("tituloNoticiaSaude2").innerText = noticias.PaginaSaude[1].TITULO;
    document.getElementById("autorNoticiaSaude2").innerText = noticias.PaginaSaude[1].AUTOR;
    document.getElementById("textoNoticiaSaude2").innerText = noticias.PaginaSaude[1].TEXTO;

    document.getElementById("categoriaNoticiaSaude3").innerText = noticias.PaginaSaude[2].CATEGORIA;
    document.getElementById("tituloNoticiaSaude3").innerText = noticias.PaginaSaude[2].TITULO;
    document.getElementById("autorNoticiaSaude3").innerText = noticias.PaginaSaude[2].AUTOR;
    document.getElementById("textoNoticiaSaude3").innerText = noticias.PaginaSaude[2].TEXTO;

    document.getElementById("categoriaNoticiaSaude4").innerText = noticias.PaginaSaude[3].CATEGORIA;
    document.getElementById("tituloNoticiaSaude4").innerText = noticias.PaginaSaude[3].TITULO;
    document.getElementById("autorNoticiaSaude4").innerText = noticias.PaginaSaude[3].AUTOR;
    document.getElementById("textoNoticiaSaude4").innerText = noticias.PaginaSaude[3].TEXTO;
    }
}

function carregarNoticiasEducacao(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;

    document.getElementById("categoriaNoticiaEducacao1").innerText = noticias.PaginaEducacao[0].CATEGORIA;
    document.getElementById("tituloNoticiaEducacao1").innerText = noticias.PaginaEducacao[0].TITULO;
    document.getElementById("autorNoticiaEducacao1").innerText = noticias.PaginaEducacao[0].AUTOR;
    document.getElementById("textoNoticiaEducacao1").innerText = noticias.PaginaEducacao[0].TEXTO;

    document.getElementById("categoriaNoticiaEducacao2").innerText = noticias.PaginaEducacao[1].CATEGORIA;
    document.getElementById("tituloNoticiaEducacao2").innerText = noticias.PaginaEducacao[1].TITULO;
    document.getElementById("autorNoticiaEducacao2").innerText = noticias.PaginaEducacao[1].AUTOR;
    document.getElementById("textoNoticiaEducacao2").innerText = noticias.PaginaEducacao[1].TEXTO;

    document.getElementById("categoriaNoticiaEducacao3").innerText = noticias.PaginaEducacao[2].CATEGORIA;
    document.getElementById("tituloNoticiaEducacao3").innerText = noticias.PaginaEducacao[2].TITULO;
    document.getElementById("autorNoticiaEducacao3").innerText = noticias.PaginaEducacao[2].AUTOR;
    document.getElementById("textoNoticiaEducacao3").innerText = noticias.PaginaEducacao[2].TEXTO;

    document.getElementById("categoriaNoticiaEducacao4").innerText = noticias.PaginaEducacao[3].CATEGORIA;
    document.getElementById("tituloNoticiaEducacao4").innerText = noticias.PaginaEducacao[3].TITULO;
    document.getElementById("autorNoticiaEducacao4").innerText = noticias.PaginaEducacao[3].AUTOR;
    document.getElementById("textoNoticiaEducacao4").innerText = noticias.PaginaEducacao[3].TEXTO;
    }
}

function carregarNoticiasSorteadas(){
    let requestURL = "http://localhost:3000/Noticias";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    request.onload = function(){
    let noticias = request.response;
	
	const min = 1;
	const max = 4;

	let sort = Math.floor(Math.random()*Math.floor(max))

	while(sort<min){
		sort = Math.floor(Math.random()*Math.floor(max));
	}
	
	if(sort==1){
	document.getElementById("categoriaNoticiaIndex1").innerText = noticias.PaginaPolitica[0].CATEGORIA;
    document.getElementById("tituloNoticiaIndex1").innerText = noticias.PaginaPolitica[0].TITULO;
    document.getElementById("autorNoticiaIndex1").innerText = noticias.PaginaPolitica[0].AUTOR;
    document.getElementById("textoNoticiaIndex1").innerText = noticias.PaginaPolitica[0].TEXTO;
	}else if(sort==2){
	document.getElementById("categoriaNoticiaIndex1").innerText = noticias.PaginaSaude[0].CATEGORIA;
    document.getElementById("tituloNoticiaIndex1").innerText = noticias.PaginaSaude[0].TITULO;
    document.getElementById("autorNoticiaIndex1").innerText = noticias.PaginaSaude[0].AUTOR;
    document.getElementById("textoNoticiaIndex1").innerText = noticias.PaginaSaude[0].TEXTO;
	}else if(sort==3){
	document.getElementById("categoriaNoticiaIndex1").innerText = noticias.PaginaEducacao[0].CATEGORIA;
    document.getElementById("tituloNoticiaIndex1").innerText = noticias.PaginaEducacao[0].TITULO;
    document.getElementById("autorNoticiaIndex1").innerText = noticias.PaginaEducacao[0].AUTOR;
    document.getElementById("textoNoticiaIndex1").innerText = noticias.PaginaEducacao[0].TEXTO;
    }
}
}