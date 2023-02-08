<template>
  <div>
    <HeaderVue />
    <h1>Hello User, Welcome on Update Restaurant Page</h1>
    <form class="add">
      <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
      <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
      <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
      <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderVue from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateVue",
  components: {
    HeaderVue,
  },
  data() {
    return{
      restaurant : {
        name: '',
        address: '',
        contact: '',
      }
    }
  },
  methods: {
    updateRestaurant: async function(){
      let result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.warn(result);
      if (result.status == 200) {
        // localStorage.setItem("resto-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomeVue" });
      }
      // console.log(this.restaurant);
    }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    // console.warn(this.$route.params.id)
    // console.warn(result);
    this.restaurant=result.data
  },
};
</script>

<style scoped>
</style>