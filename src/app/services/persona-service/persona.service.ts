import { Injectable } from '@angular/core';
import { Persona } from 'src/app/data/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private persone: Persona[] = [
    { nome: 'Gino', cognome: 'pino', email: 'g.p@gmail.com' },
    { nome: 'Gina', cognome: 'pina', email: 'g.pa@gmail.com' },
    { nome: 'Pippo', cognome: 'pina', email: 'p.pa@gmail.com' },
  ];
  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersonaById(id: number) {
    return this.persone[id];
  }

  setPersona(persona: Persona) {
    this.persone.push(persona);
    return this.persone;
  }

  editPersona(id: number, persona: Persona) {
    this.persone[id] = persona;
  }
}
