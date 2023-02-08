<template>
  <div>
    <img class="logo" src="../assets/resto-logo.png" />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <input
        type="password"
        v-model="confirmPassword"
        placeholder="Enter Confirm Password"
      />
      <button @click="signUp">Sign Up</button>
      <p><router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomeVue" });
      }
    },
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