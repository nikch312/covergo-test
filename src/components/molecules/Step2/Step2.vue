<template>
  <div class="step-content step2">
    <h2>Tell us about yourself</h2>
    <div class="row">
      <label for="name">Name</label>
      <input v-model="name" id="name" name="name"/>
    </div>
    <div class="row">
      <label for="name">Age</label>
      <input v-model="age" id="age" name="age"/>
    </div>
    <div class="row">
      <label for="name">Where do you live</label>
      <select v-model="location">
        <option v-for="(location, idx) in locations" :key="idx" :value="location.value">{{ location.label }}</option>
      </select>
    </div>
    <div class="row">
      <div v-for="(planItem, idx) in plans" :key="idx">
        <label>
          <input v-model="plan" type="radio" name="package" :value="planItem.value"/>
          {{ planItem.label }}
        </label>
      </div>
    </div>
    <div class="row">
      <h3>Your premium is: {{ premiumPrice }}{{ selectedCurrency }}</h3>
    </div>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    <div class="btn-row">
      <Button variant="outline" @click="goPrevPage">Back</Button>
      <Button @click="goNextPageExtended">Next</Button>
    </div>
  </div>
</template>

<script lang="ts" src="./Step2.ts"></script>
<style src="./Step2.css" scoped></style>