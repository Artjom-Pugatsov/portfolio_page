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
    <div class="grid" >
        <ProjectTile v-for="project in projects" :key="project.id" :project="project" @info="selectedProject = $event"/>
    </div>
    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="selectedProject = null"/>
</template>


<style>
.active-tab {
  color: #42b883;
}

.active-tab::after {
  transform: scaleX(1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>