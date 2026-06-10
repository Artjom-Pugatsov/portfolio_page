<script setup lang="ts">
import type { Project } from '@/types'

defineProps<{ project: Project }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="modal">
      <button class="close-btn" @click="emit('close')" aria-label="Close">✕</button>
      <img :src="project.image" :alt="project.title" class="modal-image" />
      <div class="modal-body">
        <h2 class="project_title">{{ project.title }}</h2>
        <p>{{ project.longDescription }}</p>
        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="visit-link">
          View Project →
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project_title {
  color: #42b883;
}


.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  position: relative;
  background: #1e1e1e;
  border-radius: 12px;
  max-width: 560px;
  width: 90%;
  overflow: hidden;
  color: #e0e0e0;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #aaa;
  z-index: 1;
}

.close-btn:hover {
  color: #fff;
}

.modal-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #ddd;
}

.modal-body {
  padding: 20px 24px;
}

.modal-body h2 {
  margin: 0 0 12px;
}

.modal-body p {
  margin: 0 0 16px;
  line-height: 1.6;
  color: #bbb;
}

.visit-link {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
}

.visit-link:hover {
  text-decoration: underline;
}
</style>
