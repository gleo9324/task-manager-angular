import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Persona } from 'src/app/data/persona';
import { PersonaService } from 'src/app/services/persona-service/persona.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css'],
})
export class PersonaFormComponent {
  newPersona: Persona = {
    nome: '',
    cognome: '',
    email: '',
  };

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      surename: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.newPersona.nome = this.form.value['name'];
    this.newPersona.cognome = this.form.value['surename'];
    this.newPersona.email = this.form.value['email'];

    this.personaService.setPersona(this.newPersona);
    this.router.navigate(['']);
  }
}
