import React from 'react'
import ImageGallery from 'react-image-gallery';
import './style.css'

const images = [
    {
        original :'https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

    },
    {
        original: 'https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
]


function Banner() {
    return (
        <div className="banner_container">
            
            <ImageGallery
                showFullscreenButton = {false}
                showPlayButton = {false}
                showThumbnails = {false}
                showBullets = {false}
                showNav = {false}
                slide = {true}
                items = {images}
            />
            <div className="banner_search">
                    <input type="text" className="search_bar"/>
            </div>
        </div>
    )
}

export default Banner
