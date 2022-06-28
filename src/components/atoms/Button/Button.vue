<template>
  <div class="btn" :class="classNames" @click="click">
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./Button.ts"></script>
<style lang="css" src="./Button.css" scoped></style>
