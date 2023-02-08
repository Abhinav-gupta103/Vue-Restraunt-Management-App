<template>
  <div>
    <img class="logo" src="../assets/resto-logo.png" />
    <h1>Login</h1>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="login">Login</button>
      <p><router-link to="/sign-up">SignUp</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: async function(){
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        console.warn(result)
        
      if (result.status == 200 && result.data.length>0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomeVue" });
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeVue" });
    }
  },
};
</script>

<style>
</style>