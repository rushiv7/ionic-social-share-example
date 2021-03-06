import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {

  public sharingList = environment.socialShareOption;
  loader: any = null;
  sharingText = 'You can download our app from playstore or use this link to download the app. And you can share awesome coupons with your loved once, Thank you';
  emailSubject = 'Download Apps'
  recipent = ['recipient@example.org'];
  sharingImage = ['https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg'];
  img = 'https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg';
  sharingUrl = 'https://store.enappd.com';
  constructor(
    private modal: ModalController,
    private socialSharing: SocialSharing,
    private aletController: AlertController
  ) { }

  ngOnInit() { }
  closeModal() {
    this.modal.dismiss();
  }

  async shareVia(shareData) {
    if (shareData.shareType === 'viaEmail') {
      this.shareViaEmail();
    } else {
      this.socialSharing[`${shareData.shareType}`](this.sharingText, this.sharingImage, this.sharingUrl)
        .then((res) => {
          this.modal.dismiss();
        })
        .catch((e) => {
          console.log('error', e)
          this.modal.dismiss();
        });
    }
  }

  shareViaEmail() {
    this.socialSharing.canShareViaEmail().then((res) => {
      this.socialSharing.shareViaEmail(this.sharingText, this.emailSubject, this.recipent, null, null, this.sharingImage).then(() => {
        this.modal.dismiss();
      })
    }).catch((e) => {
      // Error!
    });
  }

  share() {
    this.socialSharing.share(this.sharingText, this.emailSubject, null, this.sharingUrl).then(() => {
      this.presentAlert("Shared Success with Only Share");
    }).catch((e) => {
      // Error!
      this.presentAlert("Some error with Only Share (NOT SUPPORTED)");
    });
  }

  shareFb() {
    this.socialSharing.shareViaFacebook(this.sharingText, this.img, this.sharingUrl).then(() => {
      this.presentAlert("Shared Success with Facebook sharing");
    }).catch((e) => {
      // Error!
      this.presentAlert("Some error with Facebook sharing (NOT SUPPORTED)");
    });
  }

  shareEmail() {
    this.socialSharing.shareViaEmail(this.sharingText, this.emailSubject, this.recipent, null, null, this.sharingImage).then(() => {
      this.presentAlert("Shared Success with email sharing");
    }).catch((e) => {
      // Error!
      this.presentAlert("Some error with email sharing (NOT SUPPORTED)");
    });
  }

  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.sharingText, this.img, this.sharingUrl).then(() => {
      this.presentAlert("Shared Success with whatsapp sharing");
    }).catch((e) => {
      // Error!
      this.presentAlert("Some error with whatsapp sharing (NOT SUPPORTED)");
    });
  }

  async presentAlert(msg) {
    const alert = await this.aletController.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}