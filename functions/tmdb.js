
// // const { TMDB_KEY } = process.env;

// // import axios from "axios";

// // let fulldb = {};

// exports.handler = async function (event, context) {

//     // const dati = await axios.get('https://api.themoviedb.org/3/discover/movie', {
//     //     params: {
//     //         api_key: TMDB_KEY,
//     //         language: 'it_IT',
//     //         sort_by: 'popularity.desc'
//     //     }
//     // }).then((res) => {
//     //     return res.data
//     // })

//     console.log(event);
//     console.log(context);

//     const dati = "ciao a tutti" 

//     return {
//         statusCode: 200,
//         body: JSON.stringify(dati),
//     };
// };

const { TMDB_KEY } = process.env;

let fulldb = {};
let conterCallApi = 0

exports.handler = async function (event, context) {
    try {
        //  var to send
        let response = {};

        switch (event.httpMethod) {
            case 'GET':

                if (fulldb.popularity) {
                    response = fulldb.popularity
                } else {
                    response = await getMoviePopularity()
                }


                break;
            case 'POST':
                switch (getParameter(event)) {
                    case 'film':
                        response = { msg: 'FILM' };
                        break;
                    case 'series':
                        response = { msg: 'SERIES' };
                        break;
                    default:
                        return returnError(400, 'Bad request.');
                }
                break;

            default:
                return returnError(405, 'Invalid request type.');
        }

        //  send response 
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };

    } catch (e) {
        console.log(e);
        return returnError(500, e.toString().substr(16));
    }
};

function returnError(statusCode, error) {
    return {
        statusCode,
        body: JSON.stringify({ error })
    }
}

function getParameter(event) {
    let parmetro = event.path.split("/");
    if (parmetro.length === 4) {
        return parmetro[3]
    } else {
        return false
    }
}

function parseMovies(res) {
    return res.map((movie) => {
        const {
            adult,
            backdrop_path,
            first_air_date,
            genre_ids, id,
            title,
            original_language,
            original_title,
            overview,
            popularity,
            poster_path,
            vote_average } = movie;

        return {
            adult,
            img_main: backdrop_path,
            genre_ids,
            id,
            original_language,
            original_title,
            plot: overview,
            popularity,
            img_poster: poster_path,
            release_date: first_air_date,
            title,
            vote_average
        }
    });
}

async function getMoviePopularity() {
    const moviesPopularity = await fatchGetMovie({
        language: 'it_IT',
        sort_by: 'popularity.desc'
    })
    fulldb.popularity = parseMovies(moviesPopularity)
    return fulldb.popularity
}

async function fatchGetMovie(params) {
    const paramsPlusKey = {
        api_key: TMDB_KEY,
        ...params,
    }
    const query = Object.keys(paramsPlusKey)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(paramsPlusKey[k]))
        .join('&');

    conterCallApi++;
    console.log("--- chiamata API n: " + conterCallApi);

    return fetch('https://api.themoviedb.org/3/discover/movie?' + query)
        .then(result => result.json())
        .then((res) => {
            return res.results
        }).catch(function (error) {
            console.log('request failed', error)
        });
}

