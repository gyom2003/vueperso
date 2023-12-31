<template>
  <div class="appbarglobal">
    <div class="buttonsbar">
      <el-button class="el-buttonstyle" @click.native.prevent="reserveclick">Reserver</el-button>
      <el-button class="el-buttonstyle">Commander</el-button>
      <el-button class="el-buttonstyle">Waitlist</el-button>  
    </div>

    <div class="appmenues">
      <ul class="navigations">
        <li>
          <a href="accueil">Accueil</a>
          <a href="#">Galerie</a>
          <a href="#">Videos</a>
          <a href="#">Carte</a>
          <a href="#">Avis</a>
          <a href="#">Vente à emporter</a>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  methods: {
    reserveclick() {
      this.$router.push('/reservation');
    }
  }
}

</script>


<style scoped>
.appbarglobal {
  height: 100px;
  width: 100vw; 
  border: 1px solid transparent;
  border-bottom: 2px solid #ccc;
}
.buttonsbar {
  position: left;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 5%;
  margin-top: 30px;
  max-width: 330px;
  
}
.appmenues {
  position: relative;
  bottom: 50%;
}
.navigations {
  list-style: none;
}
.navigations li {

  margin-left: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

}
a + a::before {
  content: "/";
  margin: 20px;
}

a {
  color: #757575;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
}
a:hover {
  text-decoration: none;
  color: #282828;
}
@media (max-width: 1225px) {
  .navigations li {
    justify-content: flex-end;
  }
}

.el-buttonstyle {
  font-size: 16px;
}





</style>
