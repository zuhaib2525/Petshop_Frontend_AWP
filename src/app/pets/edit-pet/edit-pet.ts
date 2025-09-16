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
  templateUrl: './edit-pet.html'
})
export class EditPetComponent implements OnInit {
  petForm!: FormGroup; // declare first

  constructor(
    private fb: FormBuilder,
    private petsService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // initialize form
    this.petForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required]
    });

    // fetch pet by id and populate form
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.petsService.getPetById(id).subscribe((pet: Pet) => {
      this.petForm.patchValue(pet);
    });
  }

  onSubmit() {
    if (this.petForm.valid) {
      const pet: Pet = {
        ...(this.petForm.value as Pet),
        age: Number(this.petForm.value.age) // ensure age is number
      };

      // ✅ use updatePet with two arguments
      this.petsService.updatePet(pet.id!, pet).subscribe(() => {
        this.router.navigate(['/pets']);
      });
    }
  }
}
