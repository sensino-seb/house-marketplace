import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYXrTzxipRTUSJDQS05WVTlnsnmQPZepw',
  authDomain: 'house-marketplace-app-8a22c.firebaseapp.com',
  projectId: 'house-marketplace-app-8a22c',
  storageBucket: 'house-marketplace-app-8a22c.appspot.com',
  messagingSenderId: '938320054957',
  appId: '1:938320054957:web:cab2b25593ae855e549424',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
