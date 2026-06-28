<script setup lang="ts">

import DegreeTile from '@/components/DegreeTile.vue';
import degreesData from '@/data/education.json' 
import type { Degree } from '@/types';

const degrees = degreesData.degrees as Degree[]


</script>


<template>

<DegreeTile v-for="degree in degrees" :key="degree.id" :degree="degree"/>

</template>


<style scoped>


</style>