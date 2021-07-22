import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    // console.log({id, title, url});
    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <figure>
                <img src={url} alt={title}/>
            </figure>
            <p>{title}</p>
        </div>
    )
}
 