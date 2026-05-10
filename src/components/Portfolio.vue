<script setup lang="ts">
import type { Job } from '../types/experience';
import ExperienceSection from './ExperienceSection.vue';

const experience: Job[] = [
  {
    company: 'Unum UK',
    period: 'Jun 2024 — Present',
    location: 'Dorking, England',
    role: 'Senior Software Engineer',
    description:
      "Working as a Senior Engineer in the Claims and Operations team, improving internal automation systems.",
  },
  {
    company: 'Oval Business Solutions',
    period: 'Apr 2023 — Jun 2024 · 1 yr 3 mos',
    location: 'Godalming, England',
    role: 'Senior Web Developer',
    description:
      "Worked primarily on Awardstage, a SaaS platform for managing awards from entries, judging and scoring through to results.",
  },
  {
    company: 'Dotdigital',
    period: 'Mar 2022 — Mar 2023 · 1 yr 1 mo',
    location: 'Croydon, England',
    role: 'Software Engineer',
    description:
      "Software Engineer at one of the most extensive cross-channel marketing automation platforms available.",
  },
  {
    company: 'Sword GRC',
    period: 'Mar 2021 — Mar 2022 · 1 yr 1 mo',
    location: 'Maidenhead, England',
    role: '.NET Developer',
    description:
      "Software Developer focusing on the Risk Management product offering.",
  },
  {
    company: 'Praesto Consulting',
    period: 'Apr 2018 — Mar 2021 · 3 yrs',
    location: 'Staines-Upon-Thames, England',
    roles: [
      {
        title: 'Senior Consultant',
        period: 'Sep 2019 — Mar 2021 · 1 yr 7 mos',
        description:
          "Worked predominantly with Creatio (formerly Bpm'online), a CRM tool with a strong emphasis on Business Process design and execution, using AMD JavaScript for client-side and C# for back-end web-services.",
      },
      {
        title: 'Consultant',
        period: 'Apr 2018 — Sep 2019 · 1 yr 6 mos',
        description:
          "Focused on Oracle Siebel and Business Intelligence tools. Also managed internal AWS systems including EC2 instances and networking.",
      },
    ],
  },
  {
    company: 'SCL',
    period: 'Aug 2016 — Apr 2018 · 1 yr 9 mos',
    location: 'Crawley, England',
    roles: [
      {
        title: 'Technical Consultant',
        period: 'Jan 2018 — Apr 2018 · 4 mos',
        description:
          "Took on primary responsibilities with Watson Campaign Automation clients and contracts, and continued support for the Watson Customer Experience Analytics Ecosystem.",
      },
      {
        title: 'Junior Consultant',
        period: 'Aug 2016 — Jan 2018 · 1 yr 6 mos',
        description:
          "Provided support for the IBM Watson Marketing and Analytics suite — Campaign Automation, Digital Analytics, Tealeaf, and Universal Behaviour Exchange — to various UK companies.",
      },
    ],
  },
  {
    company: 'Community Fibre Limited',
    period: 'Jul 2015 — Sep 2015 · 3 mos',
    location: 'West Midlands, England',
    role: 'Technical Support',
    description:
      "Summer placement working with the Sales team to ensure customers were up and running efficiently.",
  },
];

const skills = [".NET", "C#", "Azure", "Microservices", "Distrubuted Systems"];
</script>

<template>
  <div class="portfolio">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <p class="hero-greeting">Hi, I'm</p>
        <h1>Morgan Rees</h1>
        <p class="hero-title">Senior Software Engineer</p>
        <p class="hero-bio">
          Software engineer with a decade of experience across technical consultancy and .NET
          development, working with organisations ranging from startups to established enterprises.
          Driven by a desire to keep pace with a fast-moving industry and consistently deliver
          reliable, well-crafted software.
        </p>
        <div class="hero-links">
          <a href="https://www.linkedin.com/in/morgangrees/" target="_blank" rel="noopener" class="btn btn-primary">
            LinkedIn
          </a>
          <a href="https://github.com/worstjibs" target="_blank" rel="noopener" class="btn btn-secondary">
            GitHub
          </a>
        </div>
      </div>
      <div class="hero-avatar">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQFtFJfw2pMRNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647259034186?e=1779926400&v=beta&t=U6BKfKtqiQYIWatfi550jpl7VdJHapSaDx4XsIrBaJk"
          alt="Morgan Rees"
          class="avatar"
        />
      </div>
    </section>

    <!-- Skills -->
    <section class="section">
      <h2>Skills</h2>
      <ul class="skills-grid">
        <li v-for="skill in skills" :key="skill" class="skill-chip">{{ skill }}</li>
      </ul>
    </section>

    <!-- Experience -->
    <ExperienceSection :experience="experience" />

    <!-- Contact -->
    <section class="section contact">
      <h2>Get in touch</h2>
      <p>I'm always open to new opportunities and conversations.</p>
      <a href="https://www.linkedin.com/in/morgangrees/" target="_blank" rel="noopener" class="btn btn-primary">
        Message me on LinkedIn
      </a>
    </section>

  </div>
</template>

<style src="../styles/portfolio.scss" lang="scss" scoped />
