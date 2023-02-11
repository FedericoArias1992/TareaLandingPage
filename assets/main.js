const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCjWIi8e9Q5px-4_TdkP7Tng&part=snippet%2Cid&order=date&maxResults=5";

//la url viene de copiar el code snipet que da la pagina del rapidApi - segun se seleccione una APi u otra se elije la opcion fetch
const options = { //esto viene de copiar el code snipet que da la pagina del rapidApi - segun se seleccione una APi u otra se elije la opcion fetch
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64417eafe3msh5c8ba7617cc207ap1ed67ajsn01efeb448fcf',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//creamos la funcion asincrona que permita obtener la respuesta json
async function fetchData (urlApi){
    const response = await fetch(urlApi,options) //no supe por que llamo a optiones como argumento, en otros ejemplos solo le pasa el urlApi
	const data = await response.json();
	return data;
}

//creamos una variable para vincular el id del HTML con el elemento video devuelto por la API (Manipulacion del DOM)
const content = null || document.getElementById('content');

//Creamos una funcion anonima que se autoconvoque, talque no le asigne un espacio en memoria a esta funcion,
//pero que se ejecute cuando sea necesario:
(async () => {
	try {
		const videos = await fetchData(API);
		//A partir de aca, tenemos que crear un template en HTML que permita iterar sobre cada elemento de la respuesta json, para poder
		//presentar los elementos en el HTML usando template strings
		let view = `
		${videos.items.map(video=>`
			<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${video.snippet.title}
					</h3>
				</div>
			</div>
		`).slice(0,4).join('')}
	`; // de la response partimos el vector en los 1eros 4 videos
	content.innerHTML = view; //va a iterar con el uso de Map para devolver un nuevo arreglo para popular el HTML. 
	} catch (error) {
		console.log(error);
	}
})();