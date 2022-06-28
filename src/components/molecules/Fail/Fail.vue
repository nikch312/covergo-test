<template>
  <div class="step-content fail">
    <h2>Ooops</h2>
    <p>Your age is over our accepted limit.</p>
    <p>We are sorry but we cannot insure you now.</p>
    <div class="btn-row">
      <Button @click="initialize">{{ "Ok :(" }}</Button>
    </div>
  </div>
</template>

<script lang="ts" src="./Fail.ts"></script>
<style scoped>
.fail {
  text-align: center;
}
</style>
