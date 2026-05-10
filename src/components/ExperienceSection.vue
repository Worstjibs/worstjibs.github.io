<script setup lang="ts">
import type { Job } from '../types/experience';

defineProps<{ experience: Job[] }>();
</script>

<template>
  <section class="section">
    <h2>Experience</h2>
    <ul class="experience-list">
      <li v-for="job in experience" :key="job.company" class="experience-item">

        <div class="experience-header">
          <span class="experience-company">{{ job.company }}</span>
          <span class="experience-period">{{ job.period }}</span>
        </div>
        <span class="experience-location">{{ job.location }}</span>

        <template v-if="job.role">
          <span class="experience-role">{{ job.role }}</span>
          <p class="experience-desc">{{ job.description }}</p>
        </template>

        <ul v-else-if="job.roles" class="subroles">
          <li v-for="sub in job.roles" :key="sub.title" class="subrole">
            <div class="subrole-header">
              <span class="experience-role">{{ sub.title }}</span>
              <span class="experience-period">{{ sub.period }}</span>
            </div>
            <p class="experience-desc">{{ sub.description }}</p>
          </li>
        </ul>

      </li>
    </ul>
  </section>
</template>

<style src="../styles/experience.scss" lang="scss" scoped />
