<template>
  <div class="step-content step1">
    <h2>Hello There!</h2>
    <p>Let's buy some insurance. It is going to take only a few steps</p>
    <div class="btn-row">
      <Button @click="goNextPage">Start</Button>
    </div>
  </div>
</template>

<script lang="ts" src="./Step1.ts"></script>
<style scoped>
.step1 {
  text-align: center;
}
</style>
