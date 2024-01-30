import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './components/task-form/form.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-task', component: FormComponent },
  { path: 'new-task/:id', component: FormComponent },
  { path: 'new-persona', component: PersonaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
