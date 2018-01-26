// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBXYwZ4BLLyflObNfDo_bUkniV5im1WI64',
    authDomain: 'sd-feed.firebaseapp.com',
    databaseURL: 'https://sd-feed.firebaseio.com',
    projectId: 'sd-feed',
    storageBucket: 'sd-feed.appspot.com',
    messagingSenderId: '160772235690'
  }
};
