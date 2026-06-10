<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{ project: Project }>()
const emit = defineEmits<{ info: [project: Project] }>()

const imageUrl = computed(() => import.meta.env.BASE_URL + props.project.image.replace(/^\//, ''))

function onInfoClick(event: MouseEvent) {
  event.preventDefault()
  event.stopPropagation()
  emit('info', props.project)
}
</script>

<template>
  <a :href="project.url" target="_blank" rel="noopener noreferrer" class="tile">
    <img :src="imageUrl" :alt="project.title" class="tile-image" />
    <div class="tile-body">
      <h2 class="tile-title">{{ project.title }}</h2>
      <p class="tile-description">{{ project.shortDescription }}</p>
    </div>
    <button class="tile-info-btn" @click="onInfoClick" aria-label="More info">ⓘ</button>
  </a>
</template>

<style scoped>
.tile {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: #42b883;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.tile-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #ddd;
}

.tile-body {
  padding: 12px 16px 44px;
}

.tile-title {
  margin: 0 0 6px;
  font-size: 1.1rem;
}

.tile-description {
  margin: 0;
  font-size: 0.9rem;
  color: #aaa;
}

.tile-info-btn {
  position: absolute;
  bottom: 10px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #888;
  padding: 0;
  line-height: 1;
}

.tile-info-btn:hover {
  color: #333;
}
</style>
