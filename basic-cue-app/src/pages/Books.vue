<template>
  <div class="books">
    <h1>Books</h1>
    <router-link to="/books" class = "authors-main">
    <img class="landing-img" src="https://images-na.ssl-images-amazon.com/images/I/71Ac1yx%2BpWL.jpg" alt="Books">
    <h2>Books</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Books',
  
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