import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig: admin.ServiceAccount = {
    projectId: process.env.project_id || "",
    privateKey: (process.env.private_key || "").replace(/\\n/g, '\n'),
    clientEmail: process.env.client_email || "",
};

console.log(firebaseConfig);


admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  storageBucket: "gs://estamparia-db.appspot.com"
});

console.log('Firebase connected');

const bucket = admin.storage().bucket();

export default bucket;