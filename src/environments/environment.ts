// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  socialShareOption: [
    {
      title: 'Whatsapp',
      logo: '/assets/t.png',
      shareType: 'shareViaWhatsApp'
    },
    {
      title: 'Facebook',
      logo: '/assets/t.png',
      shareType: 'shareViaFacebook'
    },
    {
      title: 'Twitter',
      logo: '/assets/t.png',
      shareType: 'shareViaTwitter'
    },
    {
      title: 'Instagram',
      logo: '/assets/t.png',
      shareType: 'shareViaInstagram'
    },
    {
      title: 'Email',
      logo: '/assets/t.png',
      shareType: 'viaEmail'
    }
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
