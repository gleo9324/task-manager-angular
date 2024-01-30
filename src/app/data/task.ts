import { Persona } from './persona';

export interface Task {
  titolo: string;
  descrizione: string;
  dataCreazione: Date;
  dataConsegna: Date;
  isDone: boolean;
  persona: Persona;
}
