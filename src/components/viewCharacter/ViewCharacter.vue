<template>
  <div class="container">
    <div class="alert alert-danger" v-show="message" role="alert">{{message}}</div>
    <div class="row">
      <div class="col-md-6">
        <h1>Character Info</h1>
        <br />
        <table class="table table-dark">
          <tbody>
            <tr>
              <th scope="row">Full name</th>
              <td>{{`${character.name} ${character.surname}`.trim()}}</td>
            </tr>
            <tr v-show="character.email">
              <th scope="row">E-mail</th>
              <td>{{character.email}}</td>
            </tr>
            <tr v-show="character.age">
              <th scope="row">Age</th>
              <td>{{character.age}}</td>
            </tr>
          </tbody>
          <br />
          <br />
          <tbody>
            <tr v-show="character.charClass">
              <th scope="row">Class</th>
              <td>{{character.charClass}}</td>
            </tr>
            <tr v-show="character.charSubclass">
              <th scope="row">Subclass</th>
              <td>{{character.charSubclass}}</td>
            </tr>
            <tr v-show="character.charRace">
              <th scope="row">Race</th>
              <td>{{character.charRace}}</td>
            </tr>
          </tbody>
          <br />
          <br />
          <tbody>
            <tr v-show="character.charEquipments">
              <th scope="row">Equipments</th>
              <td>
                <tr v-for="equipment in character.charEquipments" :key="equipment">{{equipment}}</tr>
              </td>
            </tr>
            <tr v-show="character.charSpells">
              <th scope="row">Spells</th>
              <td>
                <tr v-for="spell in character.charSpells" :key="spell">{{spell}}</tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <router-link :to="{name: 'FormCharacter'}">
          <a class="button-bca">Recreate Build</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BuildService from "../../services/build/BuildService";
export default {
  data() {
    return {
      buildService: new BuildService(this.$http),
      character: {},
      characterKeys: [],
      message:""
    };
  },
  methods: {},
  created() {
    this.buildService.getCharacter(localStorage.selectedId).then(
      (res) => {
        if(res.expired) {
          let sessions = JSON.parse(localStorage.ids);
          delete sessions[localStorage.selectedId];
          localStorage.ids = JSON.stringify(sessions);
          this.$router.push({ name: "FormUser",params:{message:"This session was expired!"}});
        }
        this.character = res;
      },
      (error) => {
        this.message = error
      }
    );
  },
};
</script>

<style scoped>
</style>