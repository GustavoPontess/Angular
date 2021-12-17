import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm!: FormGroup;
  titulo = 'Alunos';
  public alunoSelecionado: Aluno | any;
  public textSimple!: string ;

  public alunos = [
    {id: 1 , nome:'Gustavo', sobrenome: 'Pontes',   telefone: '9999-9999'}, 
    {id: 2 , nome:'Nunes',   sobrenome: 'Gustavo',  telefone: '9999-9999'},
    {id: 3 , nome:'Pontes',  sobrenome: 'Nunes',    telefone: '9999-9999'},
    {id: 4 , nome:'Pedro',   sobrenome: 'Marcos',   telefone: '9999-9999'},
    {id: 5 , nome:'Marcos',  sobrenome: 'Olavo',    telefone: '9999-9999'},
    {id: 6 , nome:'Maria',   sobrenome: 'Carvalho', telefone: '9999-9999'},
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome:['', Validators.required],
      sobrenome:['', Validators.required],
      telefone:['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value)
  }

  alunoSelect(aluno: any){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado=null;
  }

}
