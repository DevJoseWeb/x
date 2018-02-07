import { Component, Input } from '@angular/core';

import { AgendaService } from '../agenda.service';

import { Agenda } from '../agenda-model';

@Component({
  selector: 'agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.scss'],
})
export class NoteDetailComponent {

  @Input()
  agenda: Agenda;

  constructor(private agendaService: AgendaService) { }

  ativarStatus(val: string) {
    if (this.agenda.id) {
      this.agendaService.updateAgenda(this.agenda.id, { status: val });
    } else {
      console.error('Agenda missing ID!');
    }
  }

  deleteAgenda(id: string) {
    this.agendaService.deleteAgenda(id);
  }

}
