<script setup lang="ts">
import { computed } from 'vue'
import CourseEntry from '@/components/CourseEntry.vue'
import type { Degree } from '@/types'

const props = defineProps<{ degree: Degree }>()

const logoUrl = computed(() => import.meta.env.BASE_URL + props.degree.institutionLogo.replace(/^\//, ''))

</script>

<template>
  <div class="degree">
    <div class="degree-header">
      <div class="degree-info">
        <h2 class="degree-title">{{ degree.title }}</h2>
        <p class="degree-meta">{{ degree.institution }} · {{ degree.place }} · {{ degree.startDate }}–{{ degree.endDate }}</p>
      </div>
      <a :href="degree.programUrl" target="_blank" rel="noopener noreferrer" class="logo-link">
        <img :src="logoUrl" :alt="degree.institution" class="degree-logo" />
      </a>
    </div>
    <div class="courses">
      <CourseEntry v-for="course in degree.courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<style scoped>
.degree {
  margin-bottom: 48px;
}

.degree-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #333;
}

.degree-title {
  font-size: 1.3rem;
  color: #e0e0e0;
  margin: 0 0 6px;
}

.degree-meta {
  color: #888;
  font-size: 0.85rem;
  margin: 0;
}

.logo-link {
  flex-shrink: 0;
  margin-left: 24px;
}

.degree-logo {
  height: 44px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.6;
  transition: opacity 0.2s;
}

.logo-link:hover .degree-logo {
  opacity: 1;
}

.courses {
  margin-left: 8px;
  border-left: 2px solid #2e2e2e;
}
</style>
