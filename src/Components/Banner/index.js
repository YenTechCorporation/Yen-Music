import React from 'react'
import ImageGallery from 'react-image-gallery';
import './style.css'

const images = [
    {
        original :'https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

    },
    {
        original: 'https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        original: 'https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        original: 'https://images.pexels.com/photos/2240766/pexels-photo-2240766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        original: 'https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        original: 'https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },

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
                autoPlay = {true}
                items = {images}
            />
        </div>
    )
}

export default Banner
