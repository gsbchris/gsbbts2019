import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { User } from "../../models/user";
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AngularFireAuth } from "angularfire2/auth";
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: Toast,
    public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    /*console.log('ionViewDidLoad LoginPage');*/
    // this.navCtrl.push(HomePage)
  }

  async login(user: User) {
     //this.navCtrl.push(HomePage)
    //  try {
    //   this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
    //   console.log(result);
    //   if (result) {
    //     this.user=result.i.user.providerData[0];
    //     console.log(this.user);
    //     this.navCtrl.setRoot(HomePage);
    //   }
    // }
    // catch(e){
    //         this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
    //           toast => {
    //             console.log(toast);
    //     }
    //   );
    // }

    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password).then(
      val => {
        console.log(val)
        this.navCtrl.setRoot(HomePage);
        let loader = this.loadingCtrl.create({
        content: "Récupération des données",
        duration: 3000
        });
        loader.present();
      },
      error => {
        console.log(error);
        this.toast.show(`Veuillez rentrer des id`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    );
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
