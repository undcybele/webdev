import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false
firebase.initializeApp({
  apiKey: "AIzaSyAj1dDZ8DybgZMvGmTfWyF30uCU34hSGiU",
  authDomain: "vue-calendar-b7aac.firebaseapp.com",
  projectId: "vue-calendar-b7aac",
  storageBucket: "vue-calendar-b7aac.appspot.com",
  messagingSenderId: "67815168397",
  appId: "1:67815168397:web:f8c8a8bad779b9a366c5c4"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
