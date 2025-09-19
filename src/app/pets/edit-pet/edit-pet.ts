import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-edit-pet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-pet.html',
  styleUrls: ['./edit-pet.scss']
})
export class EditPetComponent implements OnInit {
  petForm!: FormGroup;
  petId!: number;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petId = Number(this.route.snapshot.paramMap.get('id'));

    this.petForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      breed: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required]
    });

    // ✅ Load existing pet data
    this.petService.getPetById(this.petId).subscribe({
      next: (pet) => this.petForm.patchValue(pet),
      error: (err) => {
        console.error('Error loading pet:', err);
        alert('Pet not found.');
        this.router.navigate(['/pets']);
      }
    });
  }

  // getter for form controls
  get f() {
    return this.petForm.controls;
  }

  // submit form
  onSubmit(): void {
    if (this.petForm.invalid) return;

    const updatedPet: Pet = {
      ...(this.petForm.value as Pet),
      age: Number(this.petForm.value.age)
    };

    this.petService.updatePet(this.petId, updatedPet).subscribe({
      next: () => {
        alert('Pet updated successfully!');
        this.router.navigate(['/pets']);
      },
      error: (err) => {
        console.error('Error updating pet:', err);
        alert('Failed to update pet.');
      }
    });
  }

  // ✅ new cancel method
  cancel(): void {
    this.router.navigate(['/pets']);
  }
}
