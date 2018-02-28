import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  
  public objectFeed = {
    titulo: "Denys Wylliam",
    data: "November 5, 1955",
    descricao: "Meu app incrivel",
    likes: 12,
    comments: 4,
    timeComment: "11h ago"
  }

  public nomeUsuario:string = "Denys Wylliam da Silva";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }
  
  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
