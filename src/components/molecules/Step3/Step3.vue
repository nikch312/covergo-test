<template>
  <div class="step-content step3">
    <h2>Summary</h2>
    <h3>{{ form.name }}</h3>
    <div class="row">Name: {{ form.name }}</div>
    <div class="row">Age: {{ form.age }}</div>
    <div class="row">Where do you live: {{ form.location }}</div>
    <div class="row">Package: {{ form.plan }}</div>
    <div class="row">Premium: {{ premiumPrice }}{{ selectedCurrency }}</div>
    <div class="btn-row">
      <Button variant="outline" @click="goPrevPage">Back</Button>
      <Button @click="initialize">Buy</Button>
    </div>
  </div>
</template>

<script lang="ts" src="./Step3.ts"></script>
<style scoped>
.step3 {
  text-align: center;
}

.row {
  margin-bottom: 8px;
}
</style>
