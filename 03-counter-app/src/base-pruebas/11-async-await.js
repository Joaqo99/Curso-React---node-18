

export const getImagen = async() => {

    try {

        const apiKey = 'NlumKTdgn22pwT9U9zAlwcxRu0FY25W5';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No se encontró la imagen'
    }
    
    
    
}

 getImagen();



