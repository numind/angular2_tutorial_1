import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html',
})
export class JumbotronComponent {

  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor (){
    this.jbtHeading = "Jumbo";
    this.jbtText = "Ciao come stai?";
    this.jbtBtnText = "click";
    this.jbtBtnUrl = "/about";
  }

}
