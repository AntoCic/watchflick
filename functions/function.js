// ____ ____ ____ ____ ____ ____ ____ 
// ||A |||n |||t |||o |||C |||i |||c ||
// ||__|||__|||__|||__|||__|||__|||__||
// |/__\|/__\|/__\|/__\|/__\|/__\|/__\|

/* eslint-disable no-undef */

const { TMDB_KEY } = process.env;

let database = {};

exports.handler = async function (event) {
    await router.start(event);


    await router.GET('all', async () => {
        if (!database.film || !database.series) {
            await fillDatabase();
        }
        router.setRes(database);
    })

    await router.POST('search', async () => {
        let { query } = router.bodyParams
        if (data) {
            const res = await callTMDB('search/multi', { query, language: 'it_IT' })

            if (res) { router.setRes(res); }
        } else {
            router.error(400, '|I| Missing query');
        }

    })

    await router.POST('search-film', async () => {
        let { query } = router.bodyParams
        if (data) {
            const res = await callTMDB('search/movie', { query, language: 'it_IT' })

            if (res) { router.setRes(res); }
        } else {
            router.error(400, '|I| Missing query');
        }
    })

    await router.POST('search-series', async () => {
        let { query } = router.bodyParams
        if (data) {
            const res = await callTMDB('search/tv', { query, language: 'it_IT' })

            if (res) { router.setRes(res); }
        } else {
            router.error(400, '|I| Missing query');
        }
    })


    return router.sendRes()
};

// %-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%
//  _   _ _____ ___ _     ___ _____ ___ ______ ___             |
// | | | |_   _|_ _| |   |_ _|_   _|_ _| ____/ ___|            |
// | | | | | |  | || |    | |  | |  | ||  _| \___ \            |
// | |_| | | |  | || |___ | |  | |  | || |___ ___) |           |
//  \___/  |_| |___|_____|___| |_| |___|_____|____/            |
//                                                             |
// %-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%

async function fillDatabase() {
    database.film = {}
    database.film.popular = await callTMDB('discover/movie', { language: 'it_IT', sort_by: 'popularity.desc' })
    database.film.action = await callTMDB('discover/movie', { language: 'it_IT', sort_by: 'popularity.desc', with_genres: 28 })
    database.film.comedy = await callTMDB('discover/movie', { language: 'it_IT', sort_by: 'popularity.desc', with_genres: 35 })
    database.film.upcoming = await callTMDB('movie/upcoming', { language: 'it_IT' })

    database.series = {}
    database.series.popular = await callTMDB('discover/tv', { language: 'it_IT', sort_by: 'popularity.desc' })
    database.series.action = await callTMDB('discover/tv', { language: 'it_IT', sort_by: 'popularity.desc', with_genres: 10759 })
    database.series.on_the_air = await callTMDB('tv/on_the_air', { language: 'it_IT' })
    return
}

async function callTMDB(action = 'discover/movie', params = { language: 'it_IT', sort_by: 'popularity.desc' }) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + TMDB_KEY
        }
    };
    const query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
    console.log([`https://api.themoviedb.org/3/${action}?${query}`]);

    return await fetch(`https://api.themoviedb.org/3/${action}?${query}`, options)
        .then(res => res.json())
        .then(res => {
            return parseMovies(res.results)
        })
        .catch(err => console.error('|I| ' + err));

}
function parseMovies(res) {
    return res.map((movie) => {
        const {
            adult,
            backdrop_path,
            first_air_date,
            genre_ids, id,
            title,
            name,
            original_language,
            original_title,
            original_name,
            overview,
            popularity,
            poster_path,
            vote_average
        } = movie;
        return {
            movieType: original_title ? 'film' : 'series',
            adult,
            img_main: backdrop_path,
            genre_ids,
            id,
            original_language,
            original_title: original_title ?? original_name,
            plot: overview,
            popularity,
            img_poster: poster_path,
            release_date: first_air_date,
            title: title ?? name,
            vote_average
        }
    });
}


// %-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%
//  ____  _____ _____ _   _   _ _   _____                      |
// |  _ \| ____|  ___/ \ | | | | | |_   _|                     |             
// | | | |  _| | |_ / _ \| | | | |   | |                       |
// | |_| | |___|  _/ ___ \ |_| | |___| |                       |
// |____/|_____|_|/_/   \_\___/|_____|_|_____ ____             |
// | | | |_   _|_ _| |   |_ _|_   _|_ _| ____/ ___|            |
// | | | | | |  | || |    | |  | |  | ||  _| \___ \            |
// | |_| | | |  | || |___ | |  | |  | || |___ ___) |           |
//  \___/  |_| |___|_____|___| |_| |___|_____|____/            |
//                                                             |
// %-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%-%

// Oggetto che ho creato per gestire e semplificare le chiamate al server
const router = {
    // VAR UTILITY
    // contiene tuttu l'evento della chiamata
    event: null,
    // contiene un la risposta nel caso sono stete settate piú risposte é un array
    response: null,
    // status code che viene inviato con la risposta
    statusCode: 200,

    // var boolean di controllo si attiva se trova un errore
    stateError: false,
    // var boolean di controllo si attiva nel momento in cui viene settata la prima risposta
    // per fornire un riferimento per trasformare in caso di un secondo set la risposta in un array
    isSecondSet: false,

    // contiene tutti i path parems
    pathParams: [],
    // contiene tutti i body parems
    bodyParams: null,

    // conta le chiamata ricevute per debugging
    callCounter: 0,

    // contiene se presente nell header l'autentication il JWT
    authToken: null,

    // metodo OBLIGATORIO per inizializzare le variabili ricavate dallévento della chiamata
    async start(event) {
        this.callCounter++ // debugging
        let attesa = 0 // debugging
        while (this.event) {
            attesa++ // debugging
            await new Promise((resolve) => setTimeout(resolve, 10));
        }
        console.log(`Call ${this.callCounter}: ${event.httpMethod} ${event.path} => attesa totale fine chiamata precedente ms:${attesa * 10}`); // debugging
        this.event = event
        this.stateError = false;
        this.statusCode = 200;
        this.bodyParams = null;
        this.authToken = this.event.headers.authorization || null;

        this.clearRes();

        this.setBodyParams();

        this.pathParams = this.getPathParams();
    },

    // metodo per debugging ti ricorda che devi inizializzare la chiamata
    isStarted() {
        if (this.event && !this.stateError) {
            return true
        } else {
            console.error('|I| ERROR 500: non hai inizializzato il router, SCRIVI: router.start(event);');
            this.error(500, '|I| ERROR 500: non hai inizializzato il router, SCRIVI: router.start(event);')
            return false
        }
    },

    // metodo per settare una o piú risposte se eseguito piú volte
    setRes(response) {
        if (this.isStarted()) {
            if (this.response) {
                if (this.isSecondSet) {
                    this.response = [this.response]
                    this.isSecondSet = false
                }
                this.response.push(response)

            } else {
                this.response = response
                this.isSecondSet = true
            }
        }
    },

    // metodo che ripulisce la risposta
    clearRes() {
        if (this.isStarted()) {
            this.isSecondSet = false;
            this.response = null
        }
    },

    // metodo che setta delle variabili per inviare un errore
    error(statusCode = 400, error = '|I| Errore: 400 Bad Request') {
        this.stateError = true
        this.response = error;
        this.statusCode = statusCode
    },

    // metodo OBBLIGATORIO per inviare la risposta
    sendRes() {
        this.event = null;
        if (this.response === null) {
            this.error();
        }
        return {
            statusCode: this.statusCode,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.response),
        }
    },

    // metodo per settare su pathParams i path params utili
    getPathParams() {
        if (this.isStarted()) {
            const params = this.event.path.split("/")
            if (params.length > 2) {
                for (let index = 0; index < 2; index++) {
                    params.shift();
                }

                return params
            } else {
                return [""]
            }
        }
    },

    // metodo per ottenere i parametri
    // di defaul viene utilizzata per ottenere il primo parametro che viene indicato nelle richeste
    params(index = 0) {
        if (this.pathParams.length >= index + 1) {
            return this.pathParams[index]
        } else {
            return false
        }
    },

    // metodo per settare la mia var bodyParams con un oggetto contenete tutti i parametri del body
    setBodyParams() {
        if (this.event.body) {
            this.bodyParams = JSON.parse(this.event.body)
        }
    },

    // controllo dell'evento della chiamata e esegue la funzione richesta
    async checkCall(pathParam, ArrowFunction, method) {
        if (this.event.httpMethod === method) {
            if (pathParam === this.params()) {
                return await ArrowFunction();
            } else {
                return false
            }
        } else {
            return false
        }
    },

    // caso chiamata tipo GET
    async GET(pathParam, ArrowFunction) {
        return await this.checkCall(pathParam, ArrowFunction, "GET")
    },
    // caso chiamata tipo POST
    async POST(pathParam, ArrowFunction) {
        return await this.checkCall(pathParam, ArrowFunction, "POST")
    },
    // caso chiamata tipo PUT
    async PUT(pathParam, ArrowFunction) {
        return await this.checkCall(pathParam, ArrowFunction, "PUT")
    },
    // caso chiamata tipo PATCH
    async PATCH(pathParam, ArrowFunction) {
        return await this.checkCall(pathParam, ArrowFunction, "PATCH")
    },
    // caso chiamata tipo DELETE
    async DELETE(pathParam, ArrowFunction) {
        return await this.checkCall(pathParam, ArrowFunction, "DELETE")
    },
}