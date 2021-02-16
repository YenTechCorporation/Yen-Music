import React from 'react'
import './style.css'
function UploadMusic() {

    return (
        <div className="uploadMusic_container">
            <legend>Upload new Music</legend>
            <form action="GET">
                <input type="file"/>
                <label >Music Title</label>
                <input type="text"/>
                <label >Description</label>
                <textarea type="text"></textarea>
                <label>
                private
                <input type="checkbox" name="private" placeholder="private"/>
                </label>
                <label>
                public
                <input type="checkbox" name="public"/>
                </label>
                <label >artist</label>
                <input type="text"/>
                <label >composer</label>
                <input type="text"/>
                <label >album name</label>
                <input type="text"/>
            </form>
        </div>
    )
}

export default UploadMusic
