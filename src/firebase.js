import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXt90kJyqeyvKT-RR961TKhWg5Rs6rGN8",
    authDomain: "yenmusic-15d0c.firebaseapp.com",
    projectId: "yenmusic-15d0c",
    storageBucket: "yenmusic-15d0c.appspot.com",
    messagingSenderId: "524876014639",
    appId: "1:524876014639:web:3994d8c9aea902aa3092da",
    measurementId: "G-HEQ4JYFX8Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const firestore = firebaseApp.firestore();
  const storage = firebaseApp.storage();
  const provider = new firebase.auth.EmailAuthProvider();
  export {auth, provider, storage};
  export default firestore
  firebaseApp.analytics();