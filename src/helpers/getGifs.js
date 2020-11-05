
// 12. create a function that allows obtain información from API.
export const getGifs = async( category ) => {

    // Request http
    const apiKey = 'GUvPCLeRnIBFQx2DwolwDnJVjJIeF55W';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;
    const response = await fetch( url );
    const {data} = await response.json();
    
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
    
};