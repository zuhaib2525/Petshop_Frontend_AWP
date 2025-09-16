import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://localhost:3000/pets'; // adjust if backend URL differs

  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${id}`);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  // ✅ Two-argument updatePet
  updatePet(id: number, pet: Pet): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
