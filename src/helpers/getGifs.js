
export const getGifs = async( category ) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=1xBCf2OFVp1IRRiUJujGSDV0EZXqBAqD&q=${ encodeURI(category) }&limit=10`    
    const resp = await fetch(url);
    const {data} = await resp.json(); 

    const gifs = data.map((img)=>{
        return {
            id_img: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })        
    return(gifs); 

}
// export default getGifs  se omite porque se coloco la palabra export en linea 2