import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApitrxProvider } from '../../providers/apitrx/apitrx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public apitrxProvider: ApitrxProvider
  ) {}

  ionViewDidLoad(){
    this.apitrxProvider.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
