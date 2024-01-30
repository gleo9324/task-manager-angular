import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/data/task';
import { TaskService } from 'src/app/services/task-service/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() task: Task = {
    titolo: 'titolo',
    descrizione: 'descrizione',
    dataCreazione: new Date('2023-02-15'),
    dataConsegna: new Date('2023-12-15'),
    isDone: false,
    persona: { nome: 'Gino', cognome: 'pino', email: 'g.p@gmail.com' },
  };

  @Input() id: number = 1000;

  status: string = 'to Do';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    if (this.task.isDone) {
      this.status = 'Done';
    }
  }

  onEdit() {
    this.router.navigate(['/new-task', this.id]);
  }

  onDelete() {
    this.taskService.deleteTask(this.id);
  }
}
