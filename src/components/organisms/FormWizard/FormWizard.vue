<template>
  <div class="form">
    <div class="step-wrapper">
      <Step1 v-if="currentStep === 0"/>
      <Step2 v-else-if="currentStep === 1"/>
      <Step3 v-else-if="currentStep === 2"/>
      <Fail v-else/>
    </div>
  </div>
</template>

<script lang="ts" src="./FormWizard.ts"></script>
<style lang="css" src="./FormWizard.css" scoped></style>
