const word = "Ghost"
const pages = 10
var api = 'http://www.omdbapi.com/?apikey=c4ad9931&page=' + pages + '&type=movie&s=' + word
function f() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let lista = []
            while (1) {
                const peli_nro = Math.floor(Math.random() * pages);
                if (!lista.includes(peli_nro)) {
                    lista.push(peli_nro)
                }
                console.log(lista)
                if (lista.length == 4) {
                    break;
                }
            }
            for (let i = 1; i <= 4; i++) {
                let id = lista.pop();
                console.log(data["Search"][id].Year)
                document.getElementById("img" + i).src = data["Search"][id].Poster;
                document.getElementById("text" + i).innerHTML = data["Search"][id].Year;
            }
        });
}
f();

