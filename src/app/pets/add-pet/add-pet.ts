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
  templateUrl: './add-pet.html',
  styleUrls: ['./add-pet.scss']
})
export class AddPetComponent implements OnInit {
  petForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private petsService: PetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      breed: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required]
    });
  }

  // ✅ easy getter for template access
  get f() {
    return this.petForm.controls;
  }

  onSubmit(): void {
    if (this.petForm.invalid) return;

    const pet: Pet = {
      ...(this.petForm.value as Pet),
      age: Number(this.petForm.value.age)
    };

    this.petsService.addPet(pet).subscribe({
      next: () => {
        alert('Pet added successfully!');
        this.router.navigate(['/pets']);
      },
      error: (err) => {
        console.error('Error adding pet:', err);
        alert('Failed to add pet. Please check backend.');
      }
    });
  }

  // ✅ Cancel navigation
  cancel(): void {
    this.router.navigate(['/pets']);
  }
}
