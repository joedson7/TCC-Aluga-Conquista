import { Injectable } from '@angular/core';
import { deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Imovel {
  id?: number;
  areaDoImovel?: string;
  bairro?: string[];
  banheiros?: number;
  endereco?: string;
  estabelecimentos?: string[];
  possuiGaragem?: boolean;
  imagens?: Array<string>;
  aceitaPets?: boolean;
  aceitaGeneros?: string;
  infoAdicionais?: string;
  quartos?: number;
  eMail?: string;
  telefone?: string;
  tipo?: string;
  valorDoAluguel: number;
}

@Injectable({
  providedIn: 'root',
})
export class ImoveisService {
  constructor(private firestore: Firestore) {}

  getImoveis(): Observable<Imovel[]> {
    const imoveisRef = collection(this.firestore, 'imoveis');
    return collectionData(imoveisRef, { idField: 'id' }) as Observable<
      Imovel[]
    >;
  }

  getImovelById(id: string): Observable<Imovel> {
    const imovelDocRef = doc(this.firestore, `imoveis/${id}`);
    return docData(imovelDocRef, { idField: id }) as Observable<Imovel>;
  }

  cadastrarImovel(imovel: Imovel) {
    const imoveisRef = collection(this.firestore, 'imoveis');
    return addDoc(imoveisRef, imovel);
  }

  updateImovel(imovel: Imovel) {
    const imovelDocRef = doc(this.firestore, `imoveis/${imovel.id}`);
    return updateDoc(imovelDocRef, { imovel });
  }

  deleteImovel(imovel: Imovel) {
    const imovelDocRef = doc(this.firestore, `imoveis/${imovel.id}`);
    return deleteDoc(imovelDocRef);
  }
}
