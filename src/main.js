/* #region Imports */


//amended so that it gets all from vue library
import * as Vue from 'vue';
import App from './App.vue';


/* #endregion */


/* #region Setup */
//set
const app = Vue.createApp(App);

const vm = app.mount("#app");

vm;

/* #endregion */