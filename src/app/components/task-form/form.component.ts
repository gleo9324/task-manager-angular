import { Component, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Persona } from 'src/app/data/persona';
import { Task } from 'src/app/data/task';
import { PersonaService } from 'src/app/services/persona-service/persona.service';
import { TaskService } from 'src/app/services/task-service/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newTask: Task = {
    titolo: '',
    descrizione: '',
    dataCreazione: new Date(),
    dataConsegna: new Date(),
    isDone: false,
    persona: {
      nome: '',
      cognome: '',
      email: '',
    },
  };

  id?: number;
  isEdit: boolean = false;
  testoBottone: string = 'Aggiungi Task';

  persone: Persona[] = [];

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != undefined) {
        this.id = +params.get('id')!;
        this.isEdit = true;
        this.testoBottone = 'Modifica Task';
        this.newTask = this.taskService.getTaskById(this.id);
      }

      this.form = this.formBuilder.group({
        title: new FormControl(this.newTask.titolo, Validators.required),
        description: new FormControl(
          this.newTask.descrizione,
          Validators.required
        ),
        status: new FormControl(this.newTask.isDone),
        dueDate: new FormControl(
          this.newTask.dataConsegna,
          Validators.required
        ),
        person: new FormControl(this.newTask.persona, Validators.required),
      });
    });

    this.persone = this.personaService.getPersone();
  }

  onSubmit() {
    this.newTask.titolo = this.form.value['title'];
    this.newTask.descrizione = this.form.value['description'];
    this.newTask.dataConsegna = this.form.value['dueDate'];
    this.newTask.dataCreazione = new Date();
    this.newTask.isDone = this.form.value['status'];
    this.newTask.persona = this.form.value['person'];

    if (this.isEdit) {
      this.taskService.editTask(this.id!, this.newTask);
    } else {
      this.taskService.setTask(this.newTask);
    }
    this.router.navigate(['']);
  }
}
