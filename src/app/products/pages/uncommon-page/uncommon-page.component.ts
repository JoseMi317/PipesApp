import { Component } from '@angular/core';
import { rejects } from 'assert';
import { interval, Observable, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelects
  public name: string = 'Jose Miguel'
  public gender: 'male' | 'Female' = 'male';
  public invitationMap = {
    'male': "invitarlo",
    'Female' :"invitarla"
  }

  changeClient() : void{
    this.name = "Melisa"
    this.gender = "Female"
  }

  // in18nPlural

  public clientes : string[] = ['Maria','Jose','Melisa','Carlos','Natalia', 'Elizabeth'];
  public clientesMap ={
    '=0':'No hay Clientes en Espera',
    '=1':'Tenemos 1 cliente en Espera',
    'other':'Tenemos # clientes en Espera'

  }

  deleteClient() : void{
    this.clientes.shift();
  }

  //KeyValuePie

  public Person ={
    name:'Jose Miguel',
    age: 21,
    address:'Guatemala',
  }

  //Async Pipe

  public myObservableTimer: Observable<number>= interval(2000).pipe(
    tap(value => console.log('tap', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa')
    },3500);
  })

}
