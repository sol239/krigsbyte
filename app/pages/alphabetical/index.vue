<template>
    <div class="page-layout">
        <Header />

        <main class="main-content">
            <div class="browse-content">
                <div class="top-nav">
                    <h1>Prohlížet abecedně</h1>
                    <a class="back-btn" href="/krigsbyte/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Domovská stránka
                    </a>
                </div>

                <div class="browse-card">
                    <div class="browse-row">
                        <span class="browse-label">Prohlížet abecedně</span>

                        <div class="custom-dropdown" :class="{ open: activeDropdown === 'browse-type' }">
                            <button class="dropdown-trigger" @click.stop="toggleDropdown('browse-type')">
                                {{ selectedType }}
                                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-item" @click="selectType('Podle tématu')">Podle tématu</div>
                                <div class="dropdown-item" @click="selectType('Podle autora')">Podle autora</div>
                                <div class="dropdown-item" @click="selectType('Podle názvu')">Podle názvu</div>
                            </div>
                        </div>

                        <span class="browse-suffix">začínající</span>

                        <input type="text" class="modern-input browse-input" v-model="searchText" placeholder="" />

                        <button class="btn-primary-large">Procházet</button>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

const activeDropdown = ref(null)
const selectedType = ref('Podle tématu')
const searchText = ref('')

const toggleDropdown = (id) => {
    activeDropdown.value = activeDropdown.value === id ? null : id
}

const selectType = (type) => {
    selectedType.value = type
    activeDropdown.value = null
}

const closeDropdowns = (event) => {
    if (!event.target.closest('.custom-dropdown')) {
        activeDropdown.value = null
    }
}

onMounted(() => {
    window.addEventListener('click', closeDropdowns)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropdowns)
})

useHead({
    title: 'Prohlížet abecedně | Krigsbyte',
    htmlAttrs: { lang: 'cs' }
})
</script>

<style>
/* --- DESIGN SYSTÉM --- */
:root {
    --primary: #850000;
    --primary-hover: #600000;
    --text-main: #2d2d2d;
    --text-muted: #666;
    --bg-body: #f9fafb;
    --border-color: #e5e7eb;
}

* {
    box-sizing: border-box;
}

/* Zajištění, že footer bude vždy dole */
html,
body {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: var(--bg-body);
    color: var(--text-main);
    display: flex;
    flex-direction: column;
}
</style>

<style scoped>
* {
    box-sizing: border-box;
}

.page-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--text-main);
}

.main-content {
    flex: 1;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

.browse-content {
    padding: 40px 120px;
}

/* --- TOP NAVIGATION --- */
.top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding: 0;
}

h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #111;
    margin: 0;
}

.back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 8px 16px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid var(--border-color);
    transition: all 0.2s;
}

.back-btn:hover {
    color: var(--primary);
    border-color: var(--primary);
    background: #fff;
}

/* --- BROWSE CARD --- */
.browse-card {
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.browse-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.browse-label {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-main);
}

.browse-suffix {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-main);
}

/* --- DROPDOWN --- */
.custom-dropdown {
    position: relative;
    min-width: 200px;
}

.dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: #fff;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.95rem;
    color: var(--text-main);
    cursor: pointer;
    transition: all 0.2s;
}

.dropdown-trigger:hover {
    border-color: #bbb;
}

.custom-dropdown.open .dropdown-trigger {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(133, 0, 0, 0.15);
}

.chevron {
    color: #9ca3af;
    transition: transform 0.2s;
}

.custom-dropdown.open .chevron {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 50;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: all 0.2s ease;
}

.custom-dropdown.open .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-item {
    padding: 10px 16px;
    font-size: 0.9rem;
    cursor: pointer;
    color: var(--text-main);
    transition: background 0.15s;
}

.dropdown-item:hover {
    background: rgba(133, 0, 0, 0.05);
    color: var(--primary);
}

/* --- INPUT --- */
.modern-input {
    width: 200px;
    padding: 10px 14px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.95rem;
    transition: all 0.2s;
}

.modern-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(133, 0, 0, 0.15);
}

/* --- BUTTON --- */
.btn-primary-large {
    background: var(--primary);
    color: #fff;
    border: none;
    padding: 10px 24px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(133, 0, 0, 0.2);
    transition: all 0.2s;
}

.btn-primary-large:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 12px -1px rgba(133, 0, 0, 0.3);
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
    .browse-content {
        padding: 40px;
    }
}

@media (max-width: 768px) {
    .browse-content {
        padding: 20px;
    }

    .browse-card {
        padding: 24px;
    }

    .browse-row {
        flex-direction: column;
        align-items: stretch;
    }

    .modern-input {
        width: 100%;
    }

    .top-nav {
        padding: 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
}

@media (max-width: 480px) {
    .modern-input {
        width: 100%;
    }
}
</style>