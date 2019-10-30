import firebase from 'firebase/app'
import 'firebase/firestore'
// Get a Firestore instance:
export const db = firebase.initializeApp({ projectId: 'fun33-cd381' }).firestore()



