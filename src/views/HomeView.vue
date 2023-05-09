<template>
  <div class="home">
    <HelloWorld msgId="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Example from "@/components/Example.vue";

@Component({
  components: {
    Example,
  },
})
export default class HomeView extends Vue {}
</script>
