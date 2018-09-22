// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
  	apiKey: "AIzaSyDJXUpQT1mUlPOkmP452XRX13M7jFZqEuE",
    authDomain: "testa-digital.firebaseapp.com",
    databaseURL: "https://testa-digital.firebaseio.com",
    projectId: "testa-digital",
    storageBucket: "testa-digital.appspot.com",
    messagingSenderId: "1099096264517"
  }
};
