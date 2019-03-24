<template>
  <header id="headerComponent">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Site.com</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" id="log" to="/profil">Profil</router-link>
            <!--<button class="nav-link" id="log" href="#">Login<span class="sr-only">(current)</span></button>-->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="reg" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="profil" to="/task">Task</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="resume" to="/exit">Exit</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!--<div id="headerComponent">-->
    <!--<ul>-->
      <!--<li>-->
        <!--<router-link to="/">Main</router-link>-->
      <!--</li>-->
      <!--<li>-->
        <!--<router-link to="/resume">Resume</router-link>-->
      <!--</li>-->

    <!--</ul>-->
  <!--</div>-->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  },
}
</script>

<style>

</style>
