<template>
  <div class="flex justify-center bg-gray-50 dark:bg-gray-900 overflow-x-hidden xl:left-7 xl:relative">
    <main class="lg:py-20 lg:space-y-8 max-w-5xl px-2 py-3 sm:px-8 sm:py-12 sm:space-y-6 space-y-4 w-full">
      <LanguageSwitcher />
      <Profile />
      <Technologies />
      <Experience />
      <Projects />
    </main>
  </div>
</template>

<script>
import Profile from './components/ProfileComponent.vue';
import Technologies from './components/TechnologiesComponent.vue';
import LanguageSwitcher from './components/LanguageSwitcherComponent.vue';
import Experience from './components/ExperienceComponent.vue';
import Projects from './components/ProjectsComponent.vue';

export default {
  components: {
    Profile,
    Technologies,
    LanguageSwitcher,
    Experience,
    Projects
  },
};
</script>
