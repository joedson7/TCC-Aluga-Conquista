import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Imovel {
  id?: number;
  area?: string;
  bairro?: string;
  banheiros?: number;
  endereco?: string;
  estabelecimentos?: string;
  garagem?: boolean;
  imagens?: Array<string>;
  pets?: boolean;
  quartos?: number;
  telefone?: string;
  tipo?: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor(private firestore: Firestore) { }

  getImoveis(): Observable<Imovel[]> {
    const imoveisRef = collection(this.firestore, 'imoveis')
    return collectionData(imoveisRef, {idField: 'id'}) as Observable<Imovel[]>
  }

  cadastrarImovel(imovel: Imovel) {
    const imoveisRef = collection(this.firestore, 'imoveis')
    return addDoc(imoveisRef, imovel)
  }
}
