<template>
    <div class="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md" id="experience"
        data-type="section">
        <h2 class="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">{{ $t('experience') }}</h2>
        <div class="flex flex-col gap-8">
            <!-- Ciclo para cada experiencia -->
            <div v-for="(experience, index) in informationExperience" :key="index" class="flex flex-col gap-3 p-5"
                :class="{ 'border-b': index !== informationExperience.length - 1 }">
                <!-- Contenido del bloque de experiencia -->
                <div class="flex gap-2 justify-between w-full">
                    <div class="flex gap-4">
                        <img alt="Google logo" decoding="async" fit="cover" height="104" loading="lazy"
                            :src="require('@/assets/' + experience.logo)" width="200"
                            class="hidden rounded-md sm:block h-18 w-18">
                        <div class="flex flex-col">
                            <h3 class="text-gray-900 dark:text-gray-100 font-extrabold text-xl">{{ experience.title }}
                            </h3>
                            <p class="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base">{{
                                experience.company }}</p>
                            <p class="font-medium text-gray-700 text-sm dark:text-gray-100">{{ experience.date }}</p>
                        </div>
                    </div>
                    <!-- Más contenido aquí -->
                </div>

                <div
                    class="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description mb-3">
                    {{ experience.description }}
                </div>

                <div class="flex flex-col gap-1.5">
                    <span class="font-medium text-gray-700 dark:text-gray-300 text-base">{{ $t('technologies')
                        }}:</span>
                    <div class="flex gap-3 flex-wrap">
                        <!-- Lista de tecnologías -->
                        <a v-for="(tecnologie, techIndex) in experience.tecnologies" :key="techIndex"
                            href="https://reactjs.org/"
                            class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                            target="_blank" rel="noopener noreferrer">
                            <img :alt="tecnologie.name" decoding="async" fit="cover" loading="lazy"
                                :src="require('@/assets/' + tecnologie.logo)"
                                class="rounded-lg h-5 max-w-6 md:h-5 md:w-6 sm:h-5 sm:w-6 w-6">
                            {{ tecnologie.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import experienceEs from '@/experiences/experience_es.json';
import experienceEn from '@/experiences/experience_en.json';
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { locale } = useI18n();
        let informationExperience = ref(null);

        onMounted(() => {
            loadExperience();
        });

        const loadExperience = () => {
            console.log(locale.value)
            if (locale.value == 'es') {
                informationExperience.value = experienceEs;
            } else {
                informationExperience.value = experienceEn;
            }
        }

        // Observa cambios en 'locale' para reiniciar la animación correctamente
        watch(locale, () => {
            loadExperience();
        });

        return {
            experienceEs,
            experienceEn,
            informationExperience,
            loadExperience
        };
    },
};
</script>