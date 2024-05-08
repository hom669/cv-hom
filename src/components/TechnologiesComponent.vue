<template>
    <div class="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md" id="skills"
        data-type="section">
        <h2 class="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">{{ $t('skills')
            }}</h2>
        <div class="flex flex-col gap-10">
            <!--SKILLS-->
            <div class="flex flex-col gap-3">
                <h3 class="text-gray-900 dark:text-gray-100 font-extrabold text-lg">{{ $t('know')
                    }}</h3>
                <h2 class="text-gray-900 dark:text-gray-100 font-bold text-sm">{{ $t('languages')
                    }}</h2>
                <div class="flex flex-wrap gap-8">
                    <div v-for="(language, index) in languages" :key="index" class="flex flex-col gap-2">
                        <div class="flex items-center h-5 justify-between"><a :href="language.url"
                                class="flex gap-2 h-5" target="_blank" rel="noopener noreferrer">
                                <img :alt="language.name" decoding="async" fit="cover" loading="lazy"
                                    :src="require('@/assets/' + language.logo)"
                                    class="rounded-lg h-5 max-w-6 md:h-5 md:w-6 sm:h-5 sm:w-6 w-6">
                                <span class="font-medium text-gray-700 text-sm dark:text-gray-300">{{ language.name
                                    }}</span></a>
                            <div class="flex h-3.5 w-3.5"
                                data-tooltip="Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut."
                                data-tooltip-placement="top" aria-describedby="tooltip-8IlV6iB5"><iconify-icon
                                    height="14" icon="fa6-solid:circle-info"
                                    style="color:#d1d5db;width:14px;height:14px" width="14"></iconify-icon></div>
                        </div>
                        <div class="flex gap-1">
                            <div v-for="i in 5" :key="i" :class="{
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-500 dark:bg-gray-300': i <= language.stars,
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-300 dark:bg-gray-500': i > language.stars,
                            }">
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="mt-4 text-gray-900 dark:text-gray-100 font-bold text-sm">{{ $t('frameworks')
                    }}</h2>
                <div class="flex flex-wrap gap-8">
                    <div v-for="(framework, index) in frameworks" :key="index" class="flex flex-col gap-2">
                        <div class="flex items-center h-5 justify-between"><a :href="framework.url"
                                class="flex gap-2 h-5" target="_blank" rel="noopener noreferrer">
                                <img :alt="framework.name" decoding="async" fit="cover" loading="lazy"
                                    :src="require('@/assets/' + framework.logo)"
                                    class="rounded-lg h-5 max-w-6 md:h-5 md:w-6 sm:h-5 sm:w-6 w-6">
                                <span class="font-medium text-gray-700 text-sm dark:text-gray-300">{{ framework.name
                                    }}</span></a>
                            <div class="flex h-3.5 w-3.5"
                                data-tooltip="Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut."
                                data-tooltip-placement="top" aria-describedby="tooltip-8IlV6iB5"><iconify-icon
                                    height="14" icon="fa6-solid:circle-info"
                                    style="color:#d1d5db;width:14px;height:14px" width="14"></iconify-icon></div>
                        </div>
                        <div class="flex gap-1">
                            <div v-for="i in 5" :key="i" :class="{
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-500 dark:bg-gray-300': i <= framework.stars,
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-300 dark:bg-gray-500': i > framework.stars,
                            }">
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="mt-4 text-gray-900 dark:text-gray-100 font-bold text-sm">{{ $t('bases')
                    }}</h2>
                <div class="flex flex-wrap gap-8">
                    <div v-for="(database, index) in databases" :key="index" class="flex flex-col gap-2">
                        <div class="flex items-center h-5 justify-between"><a :href="database.url"
                                class="flex gap-2 h-5" target="_blank" rel="noopener noreferrer">
                                <img :alt="database.name" decoding="async" fit="cover" loading="lazy"
                                    :src="require('@/assets/' + database.logo)"
                                    class="rounded-lg h-5 max-w-6 md:h-5 md:w-6 sm:h-5 sm:w-6 w-6">
                                <span class="font-medium text-gray-700 text-sm dark:text-gray-300">{{ database.name
                                    }}</span></a>
                            <div class="flex h-3.5 w-3.5"
                                data-tooltip="Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut."
                                data-tooltip-placement="top" aria-describedby="tooltip-8IlV6iB5"><iconify-icon
                                    height="14" icon="fa6-solid:circle-info"
                                    style="color:#d1d5db;width:14px;height:14px" width="14"></iconify-icon></div>
                        </div>
                        <div class="flex gap-1">
                            <div v-for="i in 5" :key="i" :class="{
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-500 dark:bg-gray-300': i <= database.stars,
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-300 dark:bg-gray-500': i > database.stars,
                            }">
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="mt-4 text-gray-900 dark:text-gray-100 font-bold text-sm">{{ $t('others')
                    }}</h2>
                <div class="flex flex-wrap gap-8">
                    <div v-for="(other, index) in others" :key="index" class="flex flex-col gap-2">
                        <div class="flex items-center h-5 justify-between"><a :href="other.url" class="flex gap-2 h-5"
                                target="_blank" rel="noopener noreferrer">
                                <img :alt="other.name" decoding="async" fit="cover" loading="lazy"
                                    :src="require('@/assets/' + other.logo)"
                                    class="rounded-lg h-5 max-w-6 md:h-5 md:w-6 sm:h-5 sm:w-6 w-6">
                                <span class="font-medium text-gray-700 text-sm dark:text-gray-300">{{ other.name
                                    }}</span></a>
                            <div class="flex h-3.5 w-3.5"
                                data-tooltip="Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut."
                                data-tooltip-placement="top" aria-describedby="tooltip-8IlV6iB5"><iconify-icon
                                    height="14" icon="fa6-solid:circle-info"
                                    style="color:#d1d5db;width:14px;height:14px" width="14"></iconify-icon></div>
                        </div>
                        <div class="flex gap-1">
                            <div v-for="i in 5" :key="i" :class="{
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-500 dark:bg-gray-300': i <= other.stars,
                                'first:rounded-l-sm first:rounded-r-none last:rounded-l-none last:rounded-r-sm w-9 h-2 bg-gray-300 dark:bg-gray-500': i > other.stars,
                            }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--NOT KNOW-->
            <div class="flex flex-col gap-3">
                <h3 class="text-gray-900 dark:text-gray-100 font-extrabold text-lg">{{ $t('want') }}</h3>
                <div class="flex gap-3 flex-wrap">
                    <a v-for="(notknow, index) in notknows" :key="index" :href="notknow.url"
                        class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank" rel="noopener noreferrer"><img :alt="notknow.name" decoding="async" fit="cover"
                            loading="lazy" :src="require('@/assets/' + notknow.logo)"
                            class="rounded-lg h-5 max-w-6 md:h-5 md:w-6 sm:h-5 sm:w-6 w-6">{{ notknow.name }}</a>

                </div>
            </div>

            <!--LANGUAGES-->
            <div class="flex flex-col gap-3">
                <h3 class="text-gray-900 dark:text-gray-100 font-extrabold text-lg">{{ $t('speak') }}</h3>
                <div class="flex gap-3 flex-wrap">
                    <div
                        class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">
                        <img alt="spanish" decoding="async" fit="cover" loading="lazy"
                            :src="require('@/assets/col.svg')" class="h-4 max-w-4 md:h-4 md:w-4 sm:h-4 sm:w-4 w-4">{{
                                $t('spanish')
                            }}
                    </div>
                    <div
                        class="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">
                        <img alt="english" decoding="async" fit="cover" loading="lazy"
                            :src="require('@/assets/eeuu.svg')" class="h-5 max-w-5 md:h-5 md:w-5 sm:h-5 sm:w-5 w-5">{{
                                $t('english')
                            }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.technologies {
    text-align: center;
}
</style>


<script>
import languages from '@/skills/languages.json';
import frameworks from '@/skills/frameworks.json';
import others from '@/skills/others.json';
import databases from '@/skills/databases.json';
import notknows from '@/skills/notknows.json';


export default {
    setup() {

        return {
            languages,
            frameworks,
            others,
            databases,
            notknows
        };
    },
};
</script>