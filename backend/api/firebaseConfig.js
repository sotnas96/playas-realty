// // Import the functions you need from the SDKs you need
// const  { initializeApp } = require("firebase/app");
// const  { getStorage } = require("firebase/storage");

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY ,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE.PROYECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };
// const firebaseApp = initializeApp(firebaseConfig)
// const storage = getStorage(firebaseApp)
// module.exports = {
//   storage
// }
const admin = require("firebase-admin");

const serviceAccount = require("./config/inmob-tijuana-firebase-adminsdk-koj89-7eed1a1881.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});
const bucket = admin.storage().bucket();

module.exports = bucket;