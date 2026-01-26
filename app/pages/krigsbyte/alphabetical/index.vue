<template>
    <div class="page-layout">
        <Header />

        <main class="main-content">
            <div class="top-nav">
                <h1>Prohlížet abecedně</h1>
                <a class="back-btn" href="/krigsbyte">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                    Zpět na vyhledávání
                </a>
            </div>

            <div class="card browse-card">
                <div class="browse-row">
                    <span class="browse-label">Prohlížet abecedně</span>
                    
                    <div class="custom-dropdown" :class="{ open: activeDropdown === 'browse-type' }">
                        <button class="dropdown-trigger" @click.stop="toggleDropdown('browse-type')">
                            {{ selectedType }}
                            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
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
    htmlAttrs: { lang: 'cs' },
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
    ]
})
</script>

<style>
/* --- VARIABLES & RESET --- */
:root {
    --primary: #850000;
    --primary-hover: #600000;
    --primary-light: rgba(133, 0, 0, 0.05);
    --text-main: #1f2937;
    --text-muted: #6b7280;
    --border-color: #e5e7eb;
    --bg-body: #f9fafb;
    --bg-card: #ffffff;
    --radius: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --focus-ring: 0 0 0 3px rgba(133, 0, 0, 0.15);
}

body {
    background-color: var(--bg-body);
}
</style>

<style scoped>
* { box-sizing: border-box; }

.page-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    color: var(--text-main);
}

.main-content {
    flex: 1;
    width: 80vw;
    margin: 0 auto;
    padding: 32px 24px;
}

/* --- TOP NAVIGATION --- */
.top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
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
    border-radius: 99px;
    background: #fff;
    border: 1px solid var(--border-color);
    transition: all 0.2s;
}

.back-btn:hover {
    color: var(--primary);
    border-color: var(--primary);
    background: #fff;
}

/* --- CARD --- */
.card {
    background: var(--bg-card);
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    padding: 32px;
    margin-bottom: 24px;
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

.dropdown-trigger:hover { border-color: #bbb; }
.custom-dropdown.open .dropdown-trigger {
    border-color: var(--primary);
    box-shadow: var(--focus-ring);
}

.chevron { color: #9ca3af; transition: transform 0.2s; }
.custom-dropdown.open .chevron { transform: rotate(180deg); }

.dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: var(--shadow-md);
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
    background: var(--primary-light);
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
    box-shadow: var(--focus-ring);
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
@media (max-width: 768px) {
    .browse-row {
        flex-direction: column;
        align-items: stretch;
    }
    .modern-input {
        width: 100%;
    }
}
</style>
