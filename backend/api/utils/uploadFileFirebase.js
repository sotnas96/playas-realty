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

const uploadFileToFirebase = (files) => {
    const uploadPromises = files.map(file => {
        return new Promise((resolve, reject) => {
    
            const blob = bucket.file(`houseImg/${file.originalname+Date.now()}`);
        // Create a write stream for uploading the file
            const blobStream = blob.createWriteStream({
                resumable: false, // You can enable resumable if needed
                metadata: {
                contentType: file.mimetype, // Ensure correct content type is set
                },
            });
    
            // Handle errors during upload
            blobStream.on('error', (err) => {
                console.error('Upload error:', err);
            });
            // Handle the upload completion
            blobStream.on('finish', async () => {
                // File uploaded successfully, now get the file's download URL
                try {
                    await blob.makePublic();
                    // console.log('File is now publicly accessible.');
                    // Get the public URL for the file
                    let publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    // console.log('Public URL:', publicUrl);
                    resolve(publicUrl)
                } catch (err) {
                    console.error('Error making file public:', err);
                    reject(err)
                }
            });
            
            // Write the file buffer to Firebase Storage
            blobStream.end(file.buffer);
        });

    })
    return Promise.all(uploadPromises);
};

module.exports = uploadFileToFirebase;


