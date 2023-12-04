import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCX983QpxNb16HPwFyZnWWCUODphU1M9KM",
    authDomain: "crudreact-addf1.firebaseapp.com",
    projectId: "crudreact-addf1",
    storageBucket: "crudreact-addf1.appspot.com",
    messagingSenderId: "145167387933",
    appId: "1:145167387933:web:8dc65b8691fdb2442e25f4",
    measurementId: "G-RMKV0BSHF6"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };