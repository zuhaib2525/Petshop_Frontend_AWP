import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetService } from '../../services/pet.service'; // ✅ must match your service filename

@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pets-list.html'
})
export class PetsListComponent implements OnInit {
  pets: any[] = [];

  constructor(private petsService: PetService) {} // ✅ match with import

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.petsService.getPets().subscribe((data: any[]) => {
      this.pets = data;
    });
  }

  deletePet(id: number) {
    this.petsService.deletePet(id).subscribe(() => this.loadPets());
  }
}
