import admin from 'firebase-admin';
import serviceAccount from './FireBaseConnection.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: "gs://estamparia-db.appspot.com"
});

console.log('Firebase connected');

const bucket = admin.storage().bucket();

export default bucket;