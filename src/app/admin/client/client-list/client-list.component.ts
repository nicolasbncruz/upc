import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  listarClientes: any[];

  constructor(private readonly ps: ClienteService) { }

  __getClientes(){
    this.ps._getClientes().subscribe((rest: any)=>{
      console.log("lita");
      this.listarClientes = rest.data;
    })
  };

  ngOnInit(): void {
    this.__getClientes();
  }

}
