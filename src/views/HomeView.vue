<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types'
import projectsData from '@/data/projects.json'
import ProjectTile from '@/components/ProjectTile.vue'
import ProjectModal from '@/components/ProjectModal.vue'

const projects = projectsData.projects as Project[]
const selectedProject = ref<Project | null>(null)
</script>

<template>
  <main>
    <h1>My Projects</h1>
    <div class="grid">
      <ProjectTile
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @info="selectedProject = $event"
      />
    </div>
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </main>
</template>

<style scoped>
main {
  padding: 40px 24px;
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
