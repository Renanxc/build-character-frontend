<template>
  <header>
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <router-link :to="{name: 'Home'}">
          <a href="#" class="navbar-brand">BCA - Build Character Application</a>
        </router-link>
      </div>


    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.navbar-brand:hover{
  color: antiquewhite!important;
}
.navbar-brand{
  color: aliceblue!important;
  padding: 30px 30px 50px;
  font-size: 1.5em;
}
</style>