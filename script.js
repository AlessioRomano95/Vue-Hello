console.log('js ok')

// 1.
const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio: 'Hello World',
      img: 'https://tinypic.host/images/2024/03/11/pillola-blu-pillola-rossa.png',
    }
  }
}).mount('#app')