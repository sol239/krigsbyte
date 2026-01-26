<template>
    <div class="page-layout">
        <Header />

        <main class="main-content">
            <div class="top-nav">
                <h1>Pokročilé vyhledávání</h1>
                <a class="back-btn" href="/krigsbyte">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                    Zpět na vyhledávání
                </a>
            </div>

            <div class="card search-card">
                <div class="card-header">
                    <h2>Kritéria vyhledávání</h2>
                    
                    <div class="match-selector">
                        <label>Shoda:</label>
                        <div class="custom-dropdown" :class="{ open: activeDropdown === 'match' }" v-click-outside="() => activeDropdown = null">
                            <button class="dropdown-trigger" @click.stop="toggleDropdown('match')">
                                {{ selectedMatch }}
                                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-item" @click="selectMatch('Všechny výrazy (AND)')">Všechny výrazy (AND)</div>
                                <div class="dropdown-item" @click="selectMatch('Libovolné výrazy (OR)')">Libovolné výrazy (OR)</div>
                                <div class="dropdown-item" @click="selectMatch('Žádné výrazy')">Žádné výrazy</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="search-groups-wrapper">
                    
                    <template v-for="(group, groupIdx) in fieldGroups" :key="group.id">
                        <hr v-if="groupIdx > 0" class="group-divider" />
                        <div class="field-group-container">
                            
                            <div class="group-header-label" v-if="fieldGroups.length > 1">
                                <span class="group-title">Skupina {{ groupIdx + 1 }}</span>
                                <button class="delete-group-btn" @click="removeGroup(groupIdx)" title="Odstranit celou skupinu">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    Odstranit skupinu
                                </button>
                            </div>

                            <div class="group-fields">
                                <div v-for="(field, idx) in group.fields" :key="field.id" class="search-row">
                                    <div class="field-select-wrapper">
                                        <div class="custom-dropdown" :class="{ open: activeDropdown === `field-${field.id}` }">
                                            <button class="dropdown-trigger" @click.stop="toggleDropdown(`field-${field.id}`)">
                                                {{ field.selected || 'Všechna pole' }}
                                                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                                            </button>
                                            <div class="dropdown-menu">
                                                <div class="dropdown-item" @click="selectField(field.id, 'Všechna pole')">Všechna pole</div>
                                                <div class="dropdown-item" @click="selectField(field.id, 'Název')">Název</div>
                                                <div class="dropdown-item" @click="selectField(field.id, 'Autor')">Autor</div>
                                                <div class="dropdown-item" @click="selectField(field.id, 'Popis')">Popis</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-wrapper">
                                        <input class="modern-input" type="text" placeholder="Zadejte hledaný výraz..." v-model="field.value" />
                                        <button v-if="group.fields.length > 1" class="delete-field-btn" @click="removeField(groupIdx, idx)" title="Odebrat pole" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#850000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="group-actions">
                                <button class="btn-ghost" type="button" @click="addField(groupIdx)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    Přidat další pole
                                </button>
                            </div>
                        </div>
                    </template>

                    <div class="global-actions">
                        <button class="btn-dashed" type="button" @click="addGroup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            Přidat novou skupinu
                        </button>
                    </div>

                </div>
            </div>

            <div class="filters-grid">
                <hr class="filter-divider" />
                <div class="card filter-card">
                    <h3>Jazyk</h3>
                    <div class="custom-select-wrapper">
                        <select class="modern-multi-select" multiple>
                            <option>german</option>
                            <option>greek</option>
                            <option>hebrew</option>
                            <option>hungarian</option>
                            <option>italian</option>
                            <option>latin</option>
                            <option>polish</option>
                            <option>portuguese</option>
                            <option>spanish</option>
                            <option>undetermined</option>
                        </select>
                        <div class="helper-text">Pro více možností držte Ctrl/Cmd</div>
                    </div>
                </div>
                <hr class="filter-divider" />
                <div class="card filter-card">
                    <h3>Rok vydání</h3>
                    
                    <div class="year-filter-content">
                        <div class="year-inputs-row">
                            <div class="input-group">
                                <label>Od</label>
                                <input type="number" v-model="yearMin" class="modern-input small" />
                            </div>
                            <div class="separator">–</div>
                            <div class="input-group">
                                <label>Do</label>
                                <input type="number" v-model="yearMax" class="modern-input small" />
                            </div>
                        </div>

                        <div class="slider-wrapper">
                            <div class="slider-track"></div>
                            <div class="slider-range" :style="sliderRangeStyle"></div>
                            <input type="range" min="1400" max="2026" v-model="yearMin" class="range-thumb" />
                            <input type="range" min="1400" max="2026" v-model="yearMax" class="range-thumb" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="submit-section">
                <button class="btn-primary-large">Vyhledat</button>
            </div>

        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

// State
const activeDropdown = ref(null)
const selectedMatch = ref('Všechny výrazy (AND)')

// Dynamic field groups
let fieldIdCounter = 1
let groupIdCounter = 1

const fieldGroups = ref([
    {
        id: groupIdCounter++,
        fields: [
            { id: fieldIdCounter++, selected: 'Všechna pole', value: '' }
        ]
    }
])

// Year Slider State
const yearMin = ref(1850)
const yearMax = ref(2026)
const minTotal = 1400
const maxTotal = 2026

// Computed style for the visual slider bar
const sliderRangeStyle = computed(() => {
    const range = maxTotal - minTotal
    const left = ((yearMin.value - minTotal) / range) * 100
    const right = ((yearMax.value - minTotal) / range) * 100
    return {
        left: `${left}%`,
        width: `${right - left}%`
    }
})

// Methods
const toggleDropdown = (id) => {
    activeDropdown.value = activeDropdown.value === id ? null : id
}

const selectField = (id, value) => {
    for (const group of fieldGroups.value) {
        const field = group.fields.find(f => f.id === id)
        if (field) {
            field.selected = value
            break
        }
    }
    activeDropdown.value = null
}

const removeField = (groupIdx, fieldIdx) => {
    const group = fieldGroups.value[groupIdx]
    if (group.fields.length > 1) {
        group.fields.splice(fieldIdx, 1)
    }
}

const removeGroup = (groupIdx) => {
    if (fieldGroups.value.length > 1) {
        fieldGroups.value.splice(groupIdx, 1)
    }
}

const addField = (groupIdx) => {
    fieldGroups.value[groupIdx].fields.push({ id: fieldIdCounter++, selected: 'Všechna pole', value: '' })
}

const addGroup = () => {
    fieldGroups.value.push({
        id: groupIdCounter++,
        fields: [
            { id: fieldIdCounter++, selected: 'Všechna pole', value: '' }
        ]
    })
}

const selectMatch = (value) => {
    selectedMatch.value = value
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
    title: 'Pokročilé vyhledávání | Krigsbyte',
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

h2, h3 { margin: 0; }

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

/* --- CARDS --- */
.card {
    background: var(--bg-card);
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    padding: 24px;
    margin-bottom: 24px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-color);
}

.card-header h2 {
    font-size: 1.25rem;
    font-weight: 600;
}

/* --- SEARCH GROUPS & ROWS --- */
.search-groups-wrapper {
    display: flex;
    flex-direction: column;
}

.group-divider {
    border: none;
    border-top: 1px solid #121212;
    margin: 32px 0;
}

.field-group-container {
    background: transparent;
    border: none;
    padding: 0;
    margin-bottom: 32px;
    position: relative;
}

.group-header-label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #111;
    margin-bottom: 20px;
}

.delete-group-btn {
    background: #fff;
    border: 1px solid #ccc;
    color: #111;
    cursor: pointer;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 4px;
    transition: all 0.2s;
}

.delete-group-btn:hover {
    background: #f9f9f9;
    border-color: #999;
}

.group-fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
}

.search-row {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 16px;
    align-items: center;
}

.input-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
}

.delete-field-btn {
    background: #fff;
    border: 1px solid #ccc;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s;
    min-width: 38px;
}

.delete-field-btn:hover {
    background: #f9f9f9;
    border-color: #999;
}

.delete-field-btn svg {
    stroke: #850000;
}

/* --- INPUTS & DROPDOWNS --- */
.custom-dropdown {
    position: relative;
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
    width: 100%; /* Match trigger width */
    min-width: 10rem;
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
    transform: translateY(0)
}

.match-selector {
    display: flex;
    align-items: center;
    gap: 12px;
}

.match-selector .custom-dropdown {
    min-width: 15rem;
}

.match-selector .dropdown-menu {
    min-width: 15rem;
    width: 100%;
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

.modern-input {
    width: 100%;
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

/* --- ACTIONS ROW --- */
.group-actions {
    display: flex;
    justify-content: flex-start;
}

.global-actions {
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
}

.btn-ghost {
    background: transparent;
    border: none;
    color: var(--primary);
    font-weight: 700;
    padding: 8px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    transition: all 0.2s;
}

.btn-ghost:hover {
    opacity: 0.8;
}

.btn-dashed {
    background: #f9f9f9;
    border: 1px solid #ccc;
    color: #111;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    transition: all 0.2s;
    width: fit-content;
}

.btn-dashed:hover {
    background: #eee;
    border-color: #888;
}

/* --- FILTERS GRID --- */
.filters-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
}

.filter-card h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text-main);
}

/* Multi-select styling */
.modern-multi-select {
    width: 100%;
    height: 180px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 8px 0;
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;
}

.modern-multi-select option {
    padding: 8px 16px;
    cursor: pointer;
}

.modern-multi-select option:checked {
    background: var(--primary) linear-gradient(0deg, var(--primary) 0%, var(--primary) 100%);
    color: #fff;
}

.helper-text {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: 6px;
    text-align: right;
}

/* --- YEAR SLIDER --- */
.year-inputs-row {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 4px;
}

.modern-input.small {
    width: 100px;
    text-align: center;
}

.separator {
    padding-bottom: 10px;
    color: var(--text-muted);
}

.slider-wrapper {
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
}

.slider-track {
    position: absolute;
    width: 100%;
    height: 6px;
    background: #e5e7eb;
    border-radius: 4px;
    z-index: 1;
}

.slider-range {
    position: absolute;
    height: 6px;
    background: var(--primary);
    border-radius: 4px;
    z-index: 2;
}

.range-thumb {
    position: absolute;
    width: 100%;
    height: 0;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    pointer-events: none;
    z-index: 3;
}

.range-thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--primary);
    cursor: grab;
    margin-top: -8px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    transition: transform 0.1s;
}

.range-thumb::-webkit-slider-thumb:hover { transform: scale(1.1); }
.range-thumb::-moz-range-thumb {
    pointer-events: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--primary);
    cursor: grab;
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

/* --- SUBMIT BUTTON --- */
.submit-section {
    display: flex;
    justify-content: flex-end;
}

.btn-primary-large {
    background: var(--primary);
    color: #fff;
    border: none;
    padding: 14px 48px;
    font-size: 1.1rem;
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
    .search-row {
        grid-template-columns: 1fr;
        gap: 8px;
    }
    .filters-grid {
        grid-template-columns: 1fr;
    }
    .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    .match-selector {
        width: 100%;
    }
}

/* Divider between filter cards */
.filter-divider {
    border: none;
    border-top: 2px solid #111;
    margin: 0 0 0 0;
    grid-column: 1 / -1;
    height: 0;
    width: 100%;
}
</style>