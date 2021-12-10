import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async signup({ email, password }): Promise<UserCredential> {
    try {
      const credentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const docUser = doc(this.firestore, `users/${credentials.user.uid}`);
      await setDoc(docUser, { email });
      return credentials;
    } catch (error) {
      throw error;
    }
  }

  login({ email, password }) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
