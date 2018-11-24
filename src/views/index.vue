<template>
  <div class="Index">
    <h2>WELOCOME TO FED VUE TEMPLATE</h2>
    <hello></hello>
    <p>{{now}}</p>
  </div>
</template>

<script>
import Hello from "../components/Hello.vue";
export default {
  data(){
    return {
      now: new Date()
    }
  },
  components: { Hello }
};
</script>

<style>
  .Index {
    margin: auto auto;
    text-emphasis: center;
  }
</style>




