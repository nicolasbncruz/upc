import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  listarClientes: any[] = [
    { item: '1', ruc: '20100128056', razonSocial: 'Falabelle', datosContacto: 'Manuel Gonzales'},
    { item: '2', ruc: '20337564373', razonSocial: 'Ripley', datosContacto: 'Sara Tapia'},
    { item: '3', ruc: '20493020618', razonSocial: 'Oechsle', datosContacto: 'Ana Castro'},
    { item: '4', ruc: '20100016681', razonSocial: 'Hiraoka', datosContacto: 'Manuel Tanaka'},
    { item: '5', ruc: '20109072177', razonSocial: 'Metro', datosContacto: 'Dayana Moreno'},
    { item: '6', ruc: '20347100316', razonSocial: 'Adidas', datosContacto: 'Jose Lopez'}
  ];

  constructor() { }

  ngOnInit(): void {}

}
