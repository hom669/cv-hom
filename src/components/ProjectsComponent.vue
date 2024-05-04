<template>
    <div class="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 class="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">{{ $t('projects') }}</h2>

        <!-- Primer proyecto -->
        <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 border-b p-8">
            <a href="https://admin.movimientodeoracion24h.org/" target="_blank" rel="noopener noreferrer"
                class="w-full group">
                <!-- Imagen con efecto de zoom -->
                <img src="@/assets/projects/movimiento.png"
                    class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transform transition-transform duration-300 group-hover:scale-110" />
                <!-- Enlace -->
                <span class="text-gray-900 dark:text-gray-100 font-extrabold text-xl">
                    Página Registros Movimiento Mundial de Oración
                </span>
            </a>
            <p class="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base"></p>
            <p class="font-medium text-gray-700 text-sm dark:text-gray-100">
                Este es un aplicativo realizado para una fundación cristiana que realiza eventos de oración y su función
                es llevar un control de las personas que asisten a él y poder tener comunicación con ellos en cualquier
                momento.
            </p>
        </div>

        <!-- Otros proyectos con el mismo efecto de zoom -->
        <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 border-b p-8">
            <a href="https://appberlhan.inghoma.com/" target="_blank" rel="noopener noreferrer" class="w-full group">
                <img src="@/assets/projects/berlhan.png"
                    class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transform transition-transform duration-300 group-hover:scale-110" />
                <span class="text-gray-900 dark:text-gray-100 font-extrabold text-xl">
                    Página Para Realizar Seguimiento de Pedidos Empresa Berlhan
                </span>
            </a>
            <p class="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base"></p>
            <p class="font-medium text-gray-700 text-sm dark:text-gray-100">
                Este es un aplicativo pensado por una trabajadora de la compañía para poder tener control de todos los
                pedidos que realiza la compañía a nivel mundial, saber en qué etapa se encuentra, tener registro de
                clientes, vendedores y transportistas, y obtener informes de todas las solicitudes creadas en este.
            </p>
        </div>

        <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 border-b p-8">
            <a href="https://smartshop-b7679.web.app/login" target="_blank" rel="noopener noreferrer"
                class="w-full group">
                <img src="@/assets/projects/smarttalent.png"
                    class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transform transition-transform duration-300 group-hover:scale-110" />
                <span class="text-gray-900 dark:text-gray-100 font-extrabold text-xl">
                    Tienda Smart Talent Productos Alimenticios
                </span>
            </a>
            <p class="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base"></p>
            <p class="font-medium text-gray-700 text-sm dark:text-gray-100">
                Este sistema es solo un proyecto personal para el inicio de una aplicación de tienda online. En este
                momento, su funcionalidad no está completa, pero está en progreso y nació como parte de una prueba para
                una compañía.
            </p>
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
        const informationExperience = ref(null);

        onMounted(() => {
            loadExperience();
        });

        const loadExperience = () => {
            if (locale.value === 'es') {
                informationExperience.value = experienceEs;
            } else {
                informationExperience.value = experienceEn;
            }
        };

        watch(locale, () => {
            loadExperience();
        });

        return {
            experienceEs,
            experienceEn,
            informationExperience,
            loadExperience,
        };
    },
};
</script>