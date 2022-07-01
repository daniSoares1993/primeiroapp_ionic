import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public resultado: String = 'Resultado';
  public precoAlcool: string = ''
  public precoGasolina: string = ''

  calcular(){
  if(this.precoAlcool && this.precoGasolina){
    var alcool = parseFloat(this.precoAlcool)
    var gasolina = parseFloat(this.precoGasolina);

    var res = alcool/gasolina

    if(res>= 0.7){
      this.resultado =  'Melhor Utilizar o Gasolina'
    } else{
      this.resultado = 'Melhor utilizar o Álcool'
    }

  } else{
    this.resultado =  'erro'
  }}

  constructor(private navegacao: NavController) {}

}
