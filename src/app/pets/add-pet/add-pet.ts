import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet.service'; 
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-add-pet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-pet.html'
})
export class AddPetComponent implements OnInit {
  petForm!: FormGroup; // ✅ declare only

  constructor(
    private fb: FormBuilder,
    private petsService: PetService,
    private router: Router
  ) {}

  ngOnInit() {
    // ✅ initialize AFTER fb is available
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.petForm.valid) {
      const pet: Pet = {
        ...(this.petForm.value as Pet),
        age: Number(this.petForm.value.age) // ensure age is number
      };

      this.petsService.addPet(pet).subscribe(() => {
        this.router.navigate(['/pets']);
      });
    }
  }
}
