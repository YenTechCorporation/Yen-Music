import React, {createRef, useState} from 'react'
import firestore from '../../firebase'
import {storage} from '../../firebase'
import './style.css'
function UploadMusic() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const file = createRef();
    const [composer, setComposer] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [releaseDate, setReleaseDate] = useState('2021/01/23');
    const [tag, setTag] = useState([]);
    const [music, setMusic] = useState(null);
    const [songs, setSongs] = useState([]);
    const ref = storage.ref();
    const uploadData = (e)=>{
            e.preventDefault();
            setMusic({
                title,
                description,
                artist,
                album,
            })
            
            ref.child(`${title}.mp3`).put(file.current.files[0]).then(snapshot => {
                console.log("file uploaded");
                
                
             });
            ref.child(`${title}.mp3`).getDownloadURL(null).then((resultURL) =>setSongUrl(resultURL))
            
            console.log(songUrl)
            
           firestore.collection('Album').doc(album).collection('Song').add(
               {
                   title: title,
                   description: description,
                   artist: artist,
                   album: album,
                   url: songUrl,
               }
           )

        //    firestore.collection('Album').doc(album).set(
        //     {
        //         title: title,
        //         description: description,
        //         artist: artist,
        //         album: album,
        //     }
        // )
    }

    return (
        <div className="uploadMusic_container">
            <legend>Upload new Music</legend>
            <form >
                <input type="file" ref={file} />

                <label >Music Title</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>

                <label >Description</label>
                <textarea type="text" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
           
                <label >artist</label>
                <input type="text" value={artist} onChange={e=>setArtist(e.target.value)}/>

                <label >album name</label>
                <input type="text" value={album} onChange={e=>setAlbum(e.target.value)}/>
                <button type="submit" onClick={uploadData}>Submit</button>
            </form>
        </div>
    )
}

export default UploadMusic
