// WIP

// import { initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytes } from "firebase/storage";

// const firebaseConfig = {
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_URL
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);

// async function upload(file) {
//     const storageRef = ref(storage, 'images/' + file.name);
//     const snapshot = await uploadBytes(storageRef, file)

//     console.log(snapshot)
//     return snapshot
// }

// export {
//     upload
// }