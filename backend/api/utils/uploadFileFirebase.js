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
// const bucket = require("../firebaseConfig");

// const uploadFileToFirebase = (files) => {
//     const uploadPromises = files.map(file => {
//         return new Promise((resolve, reject) => {
    
//             const blob = bucket.file(`houseImg/${file.originalname+Date.now()}`);
//         // Create a write stream for uploading the file
//             const blobStream = blob.createWriteStream({
//                 resumable: false, // You can enable resumable if needed
//                 metadata: {
//                 contentType: file.mimetype, // Ensure correct content type is set
//                 },
//             });
    
//             // Handle errors during upload
//             blobStream.on('error', (err) => {
//                 console.error('Upload error:', err);
//             });
//             // Handle the upload completion
//             blobStream.on('finish', async () => {
//                 // File uploaded successfully, now get the file's download URL
//                 try {
//                     await blob.makePublic();
//                     // Get the public URL for the file
//                     let publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
//                     resolve(publicUrl)
//                 } catch (err) {
//                     console.error('Error making file public:', err);
//                     reject(err)
//                 }
//             });
            
//             // Write the file buffer to Firebase Storage
//             blobStream.end(file.buffer);
//         });

//     })
//     return Promise.all(uploadPromises);
// };

// module.exports = uploadFileToFirebase;


