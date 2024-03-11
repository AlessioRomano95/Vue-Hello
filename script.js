console.log('js ok')

// 1.
const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio: 'Hello World'
    }
  }
}).mount('#app')