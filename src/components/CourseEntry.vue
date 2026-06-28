<script setup lang="ts">
import { ref } from 'vue'
import type { Course } from '@/types'

const props = defineProps<{ course: Course }>()
const isOpen = ref(false)
</script>

<template>
  <div class="course" :class="{ open: isOpen }" @click="isOpen = !isOpen">
    <div class="course-header">
      <span class="course-name">{{ course.name }}</span>
      <div class="topics">
        <span v-for="topic in course.topics" :key="topic" class="topic">{{ topic }}</span>
      </div>
    </div>
    <Transition name="expand">
      <p v-show="isOpen" class="course-description">{{ course.description }}</p>
    </Transition>
  </div>
</template>

<style scoped>
.course {
  position: relative;
  padding: 10px 0 10px 24px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.course::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 16px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #181818;
  border: 2px solid #444;
  transition: border-color 0.2s, background 0.2s;
}

.course:hover::before,
.course.open::before {
  border-color: #42b883;
}

.course.open::before {
  background: #42b883;
}

.course-header {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.course-name {
  color: #ccc;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.course:hover .course-name,
.course.open .course-name {
  color: #e0e0e0;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.topic {
  font-size: 0.72rem;
  background: transparent;
  color: #42b883;
  border: 1px solid #2e5e47;
  border-radius: 99px;
  padding: 2px 10px;
}

.course-description {
  margin: 8px 0 4px;
  color: #888;
  font-size: 0.88rem;
  line-height: 1.65;
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
