<script setup>
import HeaderVue from './views/Header.vue';
import section1Vue from './components/Section1/section1.vue';
import {RouterView} from 'vue-router'
</script>
<template>
  <div>
    <HeaderVue/>
    <RouterView/>
    <section1Vue/>
  </div>
</template>