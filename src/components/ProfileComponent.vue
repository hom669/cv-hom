<template>
    <div class="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md" id="profile"
        data-type="section">
        <div class="flex flex-col gap-6 items-start sm:flex-row">
            <div class="flex items-center gap-4 sm:flex-col"><img alt="Hom" decoding="async" fit="cover" height="320"
                    loading="lazy" src="@/assets/profile-pic.jpg" width="320"
                    class="rounded-lg h-24 max-w-none md:h-52 md:w-52 sm:h-36 sm:w-36 w-24"> <button type="button"
                    @click="openModal"
                    class="font-medium items-center active:translate-y-px bg-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-10 hover:bg-primary-700 inline-flex px-4 rounded-md select-none shadow-sm text-base text-white"
                    download="CV-Mark_Freeman.pdf">{{ $t('downcv')
                    }}</button></div>
            <div class="flex flex-col w-full gap-5">
                <div class="flex flex-col w-full gap-2 justify-between sm:flex-row">
                    <div class="w-full">
                        <h1 class="text-gray-900 dark:text-gray-100 font-extrabold text-3xl sm:text-4xl">Haider Oviedo
                            Martinez
                        </h1>
                        <h2 class="typewriter text-blue-900 dark:text-blue-500 font-extrabold text-2xl sm:text-3xl"
                            ref="typewriter">{{ displayedText }}<span class="cursor"></span></h2>
                    </div>
                    <div class="flex gap-3 flex-wrap sm:flex-nowrap "><a
                            href="https://www.linkedin.com/in/haider-oviedo-martinez-6531b117b/"
                            class="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                            target="_blank" aria-label="GitHub" data-tooltip="GitHub"
                            aria-describedby="tooltip-2piYAsjf">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                    clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>

                        </a><a href="https://github.com/hom669"
                            class="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                            target="_blank" aria-label="LinkedIn" data-tooltip="LinkedIn"
                            aria-describedby="tooltip-xmwMlKsO">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                    clip-rule="evenodd" />
                            </svg>

                        </a></div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="inline-grid xl:grid-cols-[auto_auto]">
                        <div><span class="font-medium text-gray-700 dark:text-gray-300 text-base">{{ $t('email')
                                }}:</span> <a
                                class="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base underline"
                                target="_self">hom118@@gmail.com</a></div>
                        <div><span class="font-medium text-gray-700 dark:text-gray-300 text-base">{{ $t('from')
                                }}:</span> <span class="font-normal text-gray-500 dark:text-gray-400 text-base">Ibague,
                                Colombia</span>
                        </div>
                        <div><span class="font-medium text-gray-700 dark:text-gray-300 text-base">{{ $t('salary_range')
                                }}:</span>
                            <span class="font-normal text-gray-500 dark:text-gray-400 text-base"> 1700 - 2000
                                USD</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div
                            class="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description">
                            {{ $t('profile') }}
                        </div>
                        <div class="flex gap-3 flex-wrap">
                            <div
                                class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">
                                {{ $t('freelance')
                                }}
                            </div>
                            <div
                                class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">
                                {{ $t('mentoring')
                                }}</div>
                            <div
                                class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">
                                {{ $t('freelance')
                                }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal para mostrar el PDF -->
    <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
            <button @click="closeModal" class="modal-close">&times;</button>
            <iframe :src="pdfSource" class="pdf-iframe pt-10"></iframe>
        </div>
    </div>
</template>


<style scoped>
.typewriter {
    font-family: monospace;
    white-space: nowrap;
}

.cursor {
    @apply border-l-2 border-black dark:border-white;
    animation: blink 0.5s step-end infinite alternate;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}


.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: black;
    background: none;
    border: none;
    cursor: pointer;
}

.pdf-iframe {
    width: 30rem;
    height: 40rem;
}
</style>

<script>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { t, locale } = useI18n();
        const displayedText = ref('');

        const isModalOpen = ref(false);

        const openModal = () => {
            isModalOpen.value = true;
        };

        const closeModal = () => {
            isModalOpen.value = false;
        };

        const delay = 100; // Tiempo entre caracteres
        const writeInterval = 2000; // Tiempo para mantener el texto antes de borrar
        const eraseInterval = 50; // Velocidad para borrar caracteres
        let typewriterInterval = null; // Identificador del intervalo actual

        const titles = ref([t('title'), t('title2')]);
        let currentTitleIndex = 0;

        const startTypewriterEffect = (text) => {
            clearInterval(typewriterInterval); // Detén cualquier intervalo existente

            let i = 0;
            displayedText.value = ''; // Limpiar el texto antes de comenzar
            typewriterInterval = setInterval(() => {
                if (i < text.length) {
                    displayedText.value += text[i];
                    i++;
                } else {
                    clearInterval(typewriterInterval);
                    setTimeout(() => eraseText(text), writeInterval);
                }
            }, delay);
        };

        const eraseText = (text) => {
            let i = text.length;
            clearInterval(typewriterInterval); // Asegúrate de detener el intervalo anterior
            typewriterInterval = setInterval(() => {
                if (i > 0) {
                    displayedText.value = displayedText.value.slice(0, -1);
                    i--;
                } else {
                    clearInterval(typewriterInterval);
                    currentTitleIndex = (currentTitleIndex + 1) % titles.value.length; // Cambia al siguiente título
                    startTypewriterEffect(titles.value[currentTitleIndex]); // Reiniciar el efecto
                }
            }, eraseInterval);
        };

        onMounted(() => {
            startTypewriterEffect(titles.value[currentTitleIndex]);
        });

        // Observa cambios en 'locale' para reiniciar la animación correctamente
        watch(locale, () => {
            titles.value = [t('title'), t('title2')]; // Actualiza títulos con las nuevas traducciones
            currentTitleIndex = 0; // Reinicia el índice
            startTypewriterEffect(titles.value[currentTitleIndex]); // Reinicia el efecto de máquina de escribir
        });

        const pdfSource = '/CV_ESP.pdf';

        return {
            displayedText,
            isModalOpen,
            openModal,
            closeModal,
            pdfSource
        };
    },
};
</script>
