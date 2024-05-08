<template>
    <div class="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 class="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">{{ $t('projects') }}</h2>
        <!-- Primer proyecto -->
        <div v-for="(project, index) in informationProjects" :key="index"
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 border-b p-8">
            <a :href="project.url" target="_blank" rel="noopener noreferrer" class="w-full group">
                <!-- Imagen con efecto de zoom -->
                <img :src="require('@/assets/' + project.image)"
                    class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transform transition-transform duration-300 group-hover:scale-110" />
                <!-- Enlace -->
                <span class="text-gray-900 dark:text-gray-100 font-extrabold text-xl">
                    {{ project.name }}
                </span>
            </a>
            <p class="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base"></p>
            <p class="font-medium text-gray-700 text-sm dark:text-gray-100">
                {{ project.description }}
            </p>
        </div>

    </div>
</template>


<script>
import projectsEs from '@/projects/projects_es.json';
import projectsEn from '@/projects/projects_en.json';
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { locale } = useI18n();
        const informationProjects = ref(null);

        onMounted(() => {
            loadProjects();
        });

        const loadProjects = () => {
            if (locale.value === 'es') {
                informationProjects.value = projectsEs;
            } else {
                informationProjects.value = projectsEn;
            }
        };

        watch(locale, () => {
            loadProjects();
        });

        return {
            projectsEs,
            projectsEn,
            informationProjects,
            loadProjects,
        };
    },
};
</script>