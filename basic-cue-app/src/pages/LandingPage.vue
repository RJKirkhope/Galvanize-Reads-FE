<template>
  <div class="landing">
    <router-link to="/authors" class ="authors-main"> 
    <img class="landing-img" src="https://files.slack.com/files-pri/T1T555TL0-FAHJ2BW8M/stache.png" alt="Authors">
    <h2>Authors</h2>
    </router-link>
    
    <router-link to="/books" class = "authors-main">
    <img class="landing-img" src="https://images-na.ssl-images-amazon.com/images/I/71Ac1yx%2BpWL.jpg" alt="Books">
    <h2>Books</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  
};

</script>

<style>
.landing{
display:flex;
justify-content: space-around;
margin-top: 5%
}
.landing-img{
height: 200px;
width: 250px;
border-radius: 25%;
border: 5px solid #2c3e50;
}
</style>

