<template>
  <div class="header-1">
    <img src="https://files.slack.com/files-pri/T1T555TL0-FAHJ2BW8M/stache.png" class="stache">
    <h1 class="title">Galvanize Reads</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'I have a moustache'
    };
  }
};
</script>

<style>
.header-1{
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 13 vw;
  background-color:#2c3e50;
  color: whitesmoke;
}
.title{
  font-size: 45px;
  padding-right: 24%;
}
.stache{
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin-left: 5%;
}
</style>

