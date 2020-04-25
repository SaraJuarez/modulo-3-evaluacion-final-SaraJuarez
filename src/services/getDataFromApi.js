const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            return data.results.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    species: user.species,
                    image: user.image,
                    planet: user.location.name,
                    episodes: user.episode.length,
                    alive: user.status
                }
            })
        })


}


export default getDataFromApi;