import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda-model';

@Component({
  selector: 'agendas-list',
  templateUrl: './agendas-list.component.html',
  styleUrls: ['./agendas-list.component.scss'],
})
export class AgendasListComponent implements OnInit {

  agendas: Observable<Agenda[]>;
  players: string;
  inicio: string;
  termino: string;
  layout: string;
  sequencia: string;
  prioridade: string;
  ate: string;
  repeticoes: string;
  acada: string;
  showSpinner = true;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.agendas = this.agendaService.getSnapshot();
    this.showSpinner = false;
  }
  createAgenda() {
    this.agendaService.create(
    this.players, this.inicio, this.termino,
    this.repeticoes, this.acada, this.ate,
    this.layout, this.sequencia, this.prioridade);

    this.players = '';
    this.inicio  = '';
    this.termino  = '';
    this.layout  = '';
    this.sequencia  = '';
    this.prioridade  = '';
    this.repeticoes  = '';
    this.acada  = '';
    this.ate  = '';
   }
}
