<template>
  <div class="container">
    <div class="alert alert-danger" v-show="message" role="alert">{{message}}</div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="John" v-model="name" />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label for="surname">Surname</label>
              <input
                type="text"
                class="form-control"
                id="surname"
                placeholder="Doe"
                v-model="surname"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                v-model="email"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <a type="submit" class="button-bca" @click="saveUser()">Submit</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Characters</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="id in sessionsKeys" :key="id">
              <td>
                <a class="link-view" @click="selectId(id)">
                  <th>{{sessions[id]}}</th>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user/UserService";
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      userService: new UserService(this.$http),
      message: "",
      sessions: localStorage.ids ? JSON.parse(localStorage.ids) : {},
      sessionsKeys: []
    };
  },
  methods: {
    selectId(id) {
      event.preventDefault();

      localStorage.selectedId = id;

      this.$router.push({ name: "ViewCharacter" });
    },
    saveUser() {
      event.preventDefault();

      if (this.sessionsKeys.length >= 5) {
        this.message = "Maximum of 5 sessions!";
        setTimeout(() => this.message = "", 2000);
        return
      }

      this.userService
        .saveUser({
          name: this.name,
          surname: this.surname,
          email: this.email,
        })
        .then(
          (response) => {
            this.sessions[response.body.sessionID] = this.name;
            localStorage.ids = JSON.stringify(this.sessions);
            localStorage.selectedId = response.body.sessionID;
            this.$router.push({ name: "FormCharacter" });
          },
          (err) => {
            this.message = err;
            setTimeout(() => this.message = "", 2000);
          }
        );
    },
  },
  created() {
    this.sessionsKeys = Object.keys(this.sessions);
    this.message = this.$route.params.message || "";
  }
};
</script>

<style scoped>
.link-view:hover {
  cursor: pointer;
  margin-right: 10px;
}

.link-view {
  padding: 5px;
  float: right;
  font-size: 1.3em;
  color: #222;
}
</style>