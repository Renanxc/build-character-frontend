<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="age" v-model="age" />
          </div>
          <div class="form-group">
            <label for="charClass">Character Class</label>
            <select
              class="form-control"
              v-model="userCharClass"
              @change="getBuildOptionsClass(userCharClass)"
            >
              <option value disabled>Selecione uma opção</option>
              <option
                v-for="charClass in buildOption.classes"
                :key="charClass.index"
                :value="charClass.index"
              >{{charClass.name}}</option>
            </select>
          </div>

          <div class="form-group" v-show="buildOptionClass.subclass">
            <label for="charSubclass">Character Subclass</label>
            <select class="form-control" v-model="userCharSubClass">
              <option value disabled>Selecione uma opção</option>
              <option
                v-for="charSubClass in buildOptionClass.subclass"
                :key="charSubClass.index"
                :value="charSubClass.index"
              >{{charSubClass.name}}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="charRace">Character Race</label>
            <select class="form-control" v-model="userCharRace">
              <option value disabled>Selecione uma opção</option>
              <option
                v-for="charRace in buildOption.races"
                :key="charRace.index"
                :value="charRace.index"
              >{{charRace.name}}</option>
            </select>
          </div>

          <div class="form-group hidden">
            <label for="charSpells">Spells</label>
            <select multiple class="form-control" id="charSpells">
              <option>1</option>
            </select>
          </div>
          <div class="form-group" v-show="buildOptionClass.spells ">
            <label for="charSpells">Spells</label>
            <select multiple class="form-control" v-model="userCharSpells" id="charSpells">
              <option
                v-for="charSpell in buildOptionClass.spells"
                :key="charSpell.index"
                :value="charSpell.index"
              >{{charSpell.name}}</option>
            </select>
          </div>
        </div>

        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="charEquipments">Equipments</label>
            <select multiple class="form-control" v-model="userCharEquips" id="charEquipments">
              <option
                v-for="charEquip in buildOption.equipments"
                :key="charEquip.index"
                :value="charEquip.index"
              >{{charEquip.name}}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-md-2 col-md-offset-10">
        <a class="button-bca" @click="saveCharacter()">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
import BuildOptionService from "../../services/buildOption/BuildOptionService";
import BuildService from "../../services/build/BuildService";
export default {
  data() {
    return {
      buildOption: {},
      buildOptionClass: {
        spells: undefined,
        subclass: undefined,
      },
      buildOptionService: new BuildOptionService(this.$http),
      buildService: new BuildService(this.$http),
      message: {},
      age: "",
      userCharClass: "",
      userCharRace: "",
      userCharSubClass: "",
      userCharEquips: [],
      userCharSpells: [],
      message: "",
      id: this.$route.query.id
    };
  },
  methods: {
    saveCharacter() {
      this.buildService.saveCharacter({
        age :this.age,
        charClass :this.userCharClass,
        charRace :this.userCharRace,
        charSubclass :this.userCharSubClass,
        charEquipments :this.userCharEquips,
        charSpells :this.userCharSpells
      },localStorage.selectedId).then( 
        (res) => {
          this.$router.push({ name: "ViewCharacter" });
        },
        (err) => (this.message = err)
      );
    },
    getBuildOptionsClass(charClass) {
      console.log(charClass);
      this.buildOptionService.getBuildOptionsClass(charClass).then(
        (res) =>
          (this.buildOptionClass = {
            spells: res.spells.length > 0 ? res.spells : undefined,
            subclass: res.subclasses.length > 0 ? res.subclasses : undefined,
          }),
        (err) => (this.message = err)
      );
    },
  },
  created() {
    this.buildOptionService.getBuildOptions().then(
      (res) => (this.buildOption = res),
      (error) => (this.message = error)
    );
  },
};
</script>

<style scoped>
#charEquipments {
  height: 370px;
}
</style>