import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies: any = [];

  constructor(private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.obtenerEmpresasCliente();
  }

  obtenerEmpresasCliente() {
    this.companyService.getCompanies().subscribe((rest: any) => {
      console.log(rest.data)
      this.companies = rest.data;
    })
  }

}
