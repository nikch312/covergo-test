<template>
  <div class="home">
    <FormWizard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormWizard from "@/components/organisms/FormWizard/FormWizard.vue";

@Component({
  components: {
    FormWizard,
  },
})
export default class HomeView extends Vue {}
</script>
