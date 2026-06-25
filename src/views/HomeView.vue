<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types'
import projectsData from '@/data/projects.json'
import ProjectTile from '@/components/ProjectTile.vue'
import ProjectModal from '@/components/ProjectModal.vue'

const selectedTab = ref<Number>(1) // Id of the selected tab. 

const projects = projectsData.projects as Project[]
const selectedProject = ref<Project | null>(null)

</script>

<template>
  <main>
    <div class="tab-selector">
      <h1 class="tab-selector-tab projects-tab" @click="selectedTab=1" :class="{ 'active-tab': selectedTab==1 }" >My Projects</h1>
      <h1 class="tab-selector-tab education-tab" @click="selectedTab=2" :class="{ 'active-tab': selectedTab==2 }">My Education</h1>
    </div>

    <!-- //Id of 1 corresponds to projects -->
    <div class="tab projects-tab"  v-if="selectedTab.valueOf() == 1"> 
      <div class="grid" >
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
    </div>

    <div class="tab education-tab" v-if="selectedTab.valueOf() == 2">




    </div>

  </main>
</template>

<style scoped>
main {
  padding: 40px 24px;
  max-width: 1100px;
  margin: 0 auto;
}


.tab-selector {
  display: inline-flex;
  margin-bottom: 32px;
}

.tab-selector-tab {
  position: relative;
  margin-right: 24px;
  margin-bottom: 0;
  padding-bottom: 6px;
  color: #888;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;
}

.tab-selector-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #42b883;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

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
