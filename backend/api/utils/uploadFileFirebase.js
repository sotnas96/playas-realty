// const { storage }= require("../firebaseConfig")
// const  { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

// const  uploadFileToFirebase = file => {
//     const storageRef = ref(storage, `houseImg/${file.originalname}`);

//     //file. buffer
//     uploadBytes(storageRef, file.buffer)
//         .then( snapshot => {
//             console.log(`file uploaded successfully`);
//             getDownloadURL(snapshot.ref)
//                 .then((downloadURL) => {
//                     console.log('file available at', downloadURL);
//                 })
//                 .catch(error => {
//                     console.log("error getting download URL:", error)
//                 });
            
//         })
//         .catch(error => {
//             console.log('error uploading file:', error);
//         });
// }
// module.exports = uploadFileToFirebase;
const bucket = require("../firebaseConfig");
const sharp = require("sharp")
const uploadFileToFirebase = (files) => {
    const uploadPromises = files.map(file => {
        return sharp(file.buffer)
            .resize({ width:1024 })
            .toBuffer()
            .then(buffer => {
                return new Promise((resolve, reject) => {
                    const blob = bucket.file(`houseImg/${file.originalname + Date.now()}`);
                    const blobStream = blob.createWriteStream({
                        resumable: true, // Enable resumable uploads
                        metadata: {
                            contentType: file.mimetype,
                        },
                    });

                    blobStream.on('error', (err) => {
                        console.error('Upload error:', err);
                        reject(err);
                    });

                    blobStream.on('finish', async () => {
                        try {
                            await blob.makePublic();
                            let publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                            resolve(publicUrl);
                        } catch (err) {
                            console.error('Error making file public:', err);
                            reject(err);
                        }
                    });

                    blobStream.end(buffer); // Upload compressed image buffer
                });
            });
    });
    return Promise.all(uploadPromises);
};

module.exports = uploadFileToFirebase;


