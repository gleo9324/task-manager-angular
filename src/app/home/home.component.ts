import { Component } from '@angular/core';
import { Persona } from '../data/persona';
import { Task } from '../data/task';
import { PersonaService } from '../services/persona-service/persona.service';
import { TaskService } from '../services/task-service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'front-end-basic';
  tasks!: Task[];
  persone!: Persona[];
  constructor(
    private personaService: PersonaService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.persone = this.personaService.getPersone();
    this.tasks = this.taskService.getTasks();
  }
}
