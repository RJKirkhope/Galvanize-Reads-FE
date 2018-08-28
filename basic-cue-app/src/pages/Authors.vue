<template>
  <div class="authors">
    <h1>Authors</h1>
    <router-link to="/authors" class ="authors-main"> 
    <img class="landing-img" src="https://files.slack.com/files-pri/T1T555TL0-FAHJ2BW8M/stache.png" alt="Authors">
    <h2>Authors</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Authors',
  
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
}
</style>