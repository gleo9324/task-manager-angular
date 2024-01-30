import { Injectable } from '@angular/core';
import { Task } from 'src/app/data/task';
import { PersonaService } from '../persona-service/persona.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      titolo: 'titolo1',
      descrizione: 'descrizione1',
      dataCreazione: new Date('2023-02-15'),
      dataConsegna: new Date('2023-12-15'),
      isDone: false,
      persona: this.personaService.getPersone()[0],
    },
    {
      titolo: 'titolo2',
      descrizione: 'descrizione2',
      dataCreazione: new Date('2023-02-15'),
      dataConsegna: new Date('2023-12-15'),
      isDone: false,
      persona: this.personaService.getPersone()[1],
    },
    {
      titolo: 'titolo3',
      descrizione: 'descrizione3',
      dataCreazione: new Date('2023-02-15'),
      dataConsegna: new Date('2023-12-15'),
      isDone: false,
      persona: this.personaService.getPersone()[2],
    },
  ];

  constructor(private personaService: PersonaService) {}

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks[id];
  }

  setTask(task: Task) {
    this.tasks.push(task);
    return this.tasks;
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  editTask(id: number, task: Task) {
    this.tasks[id] = task;
  }
}
