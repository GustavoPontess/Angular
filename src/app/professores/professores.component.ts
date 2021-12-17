import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public profSelecionado: Professor | any ;


  professores =[
    {id: 1, nome: 'Pedro',   disciplina: 'materia'},
    {id: 2, nome: 'Matheus', disciplina: 'materia'},
    {id: 3, nome: 'Marcos',  disciplina: 'materia'},
    {id: 4, nome: 'Teste',   disciplina: 'materia'},
    {id: 5, nome: 'Joao',    disciplina: 'materia'},
  ]

  profSelect(prof: any){
    this.profSelecionado = prof;
  }

  voltar(){
    this.profSelecionado=null;
  }

  constructor() { }

  ngOnInit() {
  }

}
