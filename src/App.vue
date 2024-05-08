<template>
  <div class="flex justify-center bg-gray-50 dark:bg-gray-900 overflow-x-hidden xl:left-7 xl:relative">
    <main class="lg:py-20 lg:space-y-8 max-w-5xl px-2 py-3 sm:px-8 sm:py-12 sm:space-y-6 space-y-4 w-full">
      <!-- Los componentes a los que queremos aplicar el efecto de aparición -->
      <div data-aos="fade-up">
        <LanguageSwitcher />
      </div>
      <div data-aos="fade-up">
        <Profile />
      </div>
      <div data-aos="fade-up">
        <Technologies />
      </div>
      <div data-aos="fade-up">
        <Experience />
      </div>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';
import Profile from './components/ProfileComponent.vue';
import Technologies from './components/TechnologiesComponent.vue';
import LanguageSwitcher from './components/LanguageSwitcherComponent.vue';
import Experience from './components/ExperienceComponent.vue';
import Projects from './components/ProjectsComponent.vue';
import Footer from './components/FooterComponent.vue';

export default {
  components: {
    Profile,
    Technologies,
    LanguageSwitcher,
    Experience,
    Projects,
    Footer
  },
  mounted() {
    // Inicia AOS al montar el componente
    AOS.init({ duration: 1000 }); // Puedes ajustar la duración de la animación
  },
  beforeUnmount() {
    // Limpia AOS antes de destruir el componente para evitar fugas de memoria
    AOS.refresh();
  },
};
</script>
