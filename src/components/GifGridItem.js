import React from 'react'

const GifGridItem = ({id_img, title, url}) => {

    return (
       <div className='card animate__animated animate__fadeInDown'>
           <img src={url} alt={title}/>
           <p>{title}</p>

       </div>
        
    )
}

export default GifGridItem
