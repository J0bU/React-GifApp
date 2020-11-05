import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    // console.log(id, title, url);

    // 10. To create <div></div> tag with image and title of request.
    // 11. To return this div and GifGrid use it.
    return (
        <div className="card animate__animated animate__fadeInDown ">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
