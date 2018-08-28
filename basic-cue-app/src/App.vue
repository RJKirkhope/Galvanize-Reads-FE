<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    Header
  },

  data(){
    return{
      books: [],
      authors: []
    }
  },

methods: {
    getData(){
      fetch('https://galvanizereadsdrill.herokuapp.com/books')
        .then(response => response.json())
        .then(response => {this.books = response.books});
      
      fetch('https://galvanizereadsdrill.herokuapp.com/authors')
        .then(response => response.json())
        .then(response => {this.authors = response.authors});
    }
  },
  mounted() {
    this.getData()
  }
}

</script>

<style>
body{
background-image: url(https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&h=350);
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
