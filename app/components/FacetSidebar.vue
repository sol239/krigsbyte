<template>
  <aside class="facet-sidebar">
    <div class="sidebar-header">
      <div class="header-main">
        <h2>Upřesnit hledání</h2>
        <button class="toggle-all-btn" @click="toggleAll" :title="allOpen ? 'Sbalit vše' : 'Rozbalit vše'">
          <svg v-if="allOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Místa původního uložení -->
    <FacetSection title="Místa původního uložení" :items="originalLocations" isBadges :showShowAll="false"
      :forceOpen="allOpen" />

    <!-- Původní knihovny -->
    <FacetSection title="Původní knihovny" :items="originalLibraries" showCheckboxes :forceOpen="allOpen" />

    <!-- Dřívější majitelé -->
    <FacetSection title="Dřívější majitelé" :items="previousOwners" :forceOpen="allOpen" />

    <!-- Současné uložení -->
    <FacetSection title="Současné uložení" :items="currentLocations" :forceOpen="allOpen" />

    <!-- Autor -->
    <FacetSection title="Autor" :items="authors" :forceOpen="allOpen" />

    <!-- Místo vydání -->
    <FacetSection title="Místo vydání" :items="publicationPlaces" :forceOpen="allOpen" />

    <!-- Rok vydání -->
    <div class="facet-section">
      <div class="facet-header" @click="toggleSection('year')">
        <span>Rok vydání</span>
        <svg class="chevron" :class="{ rotated: !sections.year }" xmlns="http://www.w3.org/2000/svg" width="16"
          height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
      <div v-show="sections.year" class="facet-content year-range">
        <div class="range-inputs">
          <div class="input-group">
            <label>Od:</label>
            <input type="number" :min="minTotal" :max="maxTotal" v-model="yearFrom" class="modern-input-small" />
          </div>
          <div class="input-group">
            <label>do:</label>
            <input type="number" :min="minTotal" :max="maxTotal" v-model="yearTo" class="modern-input-small" />
          </div>
        </div>
        <div class="slider-wrapper">
          <div class="slider-track"></div>
          <div class="slider-range" :style="sliderRangeStyle"></div>
          <input type="range" :min="minTotal" :max="maxTotal" v-model="yearFrom" class="range-thumb" />
          <input type="range" :min="minTotal" :max="maxTotal" v-model="yearTo" class="range-thumb" />
        </div>
        <button class="btn-setup">Nastavit</button>
      </div>
    </div>

    <!-- Typ dokumentu -->
    <FacetSection title="Typ dokumentu" :items="documentTypes" :showShowAll="false" :forceOpen="allOpen" />
  </aside>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import FacetSection from './FacetSection.vue'

const sections = reactive({
  year: true
})

const allOpen = ref(true)
const yearFrom = ref(1850)
const yearTo = ref(2026)
const minTotal = 1400
const maxTotal = 2026

// Computed style for the visual slider bar
const sliderRangeStyle = computed(() => {
  const range = maxTotal - minTotal
  const left = ((yearFrom.value - minTotal) / range) * 100
  const right = ((yearTo.value - minTotal) / range) * 100
  return {
    left: `${left}%`,
    width: `${right - left}%`
  }
})

const toggleSection = (id) => {
  sections[id] = !sections[id]
}

const toggleAll = () => {
  allOpen.value = !allOpen.value
  sections.year = allOpen.value
}

const originalLibraries = [
  { name: 'knihovna jezuitské koleje (Olomouc)', count: '1 398' },
  { name: 'dietrichsteinská knihovna', count: '1 153' },
  { name: 'rožmberská knihovna', count: '863' },
  { name: 'kapitulní knihovna (Olomouc)', count: '259' },
  { name: 'neurčeno', count: '114' },
  { name: 'knihovna kapucínského kláštera (Olomouc)', count: '102' },
  { name: 'knihovna premonstrátského kláštera (Hradisko u Olomouce)', count: '92' },
  { name: 'knihovna Pražského hradu', count: '79' },
]

const originalLocations = [
  { name: 'Olomouc (Česko)', count: '2 049' },
  { name: 'Mikulov (Břeclav, Česko)', count: '1 147' },
  { name: 'Praha (Česko)', count: '1 034' },
  { name: 'neurčeno', count: '33' },
  { name: 'Chomutov (Česko)', count: '12' },
  { name: 'Cheb (Česko)', count: '4' },
  { name: 'Brno (Česko)', count: '2' },
  { name: 'Jihlava (Česko)', count: '2' },
  { name: 'Kutná Hora (Česko)', count: '1' },
  { name: 'Roudnice nad Labem (Česko)', count: '1' },
]

const previousOwners = [
  { name: 'Kungliga Biblioteket (Švédsko)', count: '1 537' },
  { name: 'Jezuitská kolej (Olomouc, Česko)', count: '1 391' },
  { name: 'Dietrichstein, František, 1570-1636', count: '990' },
  { name: 'z Rožmberka, Petr Vok, 1539-1611', count: '848' },
  { name: 'Dudith, András, 1533-1589', count: '354' },
]

const currentLocations = [
  { name: 'Strängnäs: Domkyrkobibliotek', count: '1 649' },
  { name: 'Västerås: Stadsbibliotek', count: '688' },
  { name: 'Stockholm: Kungliga Biblioteket', count: '649' },
  { name: 'Uppsala: Universitetsbibliotek', count: '347' },
  { name: 'Lund: Universitetsbibliotek', count: '209' },
]

const authors = [
  { name: 'Cicero, Marcus Tullius, 106 př. Kr.-43 př. Kr.', count: '50' },
  { name: 'Luther, Martin, 1483-1546', count: '44' },
  { name: 'Tomáš Akvinský, svatý, 1225-1274', count: '44' },
  { name: 'Aristotelés, 384 př. Kr.-322 př. Kr.', count: '31' },
]

const publicationPlaces = [
  { name: 'Venezia', count: '516' },
  { name: 'Basel', count: '388' },
  { name: 'Köln', count: '387' },
  { name: 'Strasbourg', count: '262' },
  { name: 'Nürnberg', count: '175' },
  { name: 'Paris', count: '168' },
  { name: 'Ingolstadt', count: '146' },
  { name: 'Lyon', count: '135' },
  { name: 'Praha', count: '123' },
  { name: 'Antwerpen', count: '118' },
  { name: 'Frankfurt am Main', count: '113' },
  { name: 'Leipzig', count: '98' },
  { name: 'Wien', count: '98' },
  { name: 'Augsburg', count: '92' },
  { name: 'Wittenberg', count: '79' },
]

const documentTypes = [
  { name: 'starý tisk', count: '3 297' },
  { name: 'prvotisks', count: '796' },
  { name: 'rukopis', count: '215' },
]
</script>

<style scoped>
.facet-sidebar {
  width: 280px;
  flex-shrink: 0;
  background: var(--bg-card, #fff);
  border-radius: var(--radius, 12px);
  border: 1px solid var(--border-color, #e5e7eb);
  box-shadow: var(--shadow-sm);
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  position: sticky;
  top: 32px;
  height: fit-content;
}

.sidebar-header {
  padding: 16px 12px 16px 16px;
  border-bottom: 1px solid var(--border-color, #e5e7eb);
}

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-all-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted, #666);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 4px;
}

.toggle-all-btn:hover {
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
  color: var(--primary, #850000);
}

h2 {
  font-size: 1.2rem;
  color: var(--text-main, #111);
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.facet-section {
  border-bottom: 1px solid var(--border-color, #e5e7eb);
}

.facet-header {
  background: var(--primary, #850000);
  color: #fff;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}

.chevron {
  transition: transform 0.2s;
}

.rotated {
  transform: rotate(180deg);
}

.facet-content {
  padding: 0;
}

.year-range {
  padding: 20px 16px;
}

.range-inputs {
  display: flex;
  gap: 12px;
  margin-bottom: 6.5px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-group label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted, #666);
  text-transform: uppercase;
}

.modern-input-small {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.2s;
}

.modern-input-small:focus {
  outline: none;
  border-color: var(--primary, #850000);
  box-shadow: 0 0 0 3px rgba(133, 0, 0, 0.1);
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.slider-track {
  position: absolute;
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  z-index: 1;
}

.slider-range {
  position: absolute;
  height: 6px;
  background: var(--primary, #850000);
  border-radius: 3px;
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
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--primary, #850000);
  cursor: grab;
  margin-top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.1s;
}

.range-thumb::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.range-thumb::-moz-range-thumb {
  pointer-events: auto;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--primary, #850000);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.btn-setup {
  width: 100%;
  background: #fff;
  color: var(--primary, #850000);
  border: 1px solid var(--primary, #850000);
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-setup:hover {
  background: var(--primary, #850000);
  color: #fff;
}
</style>
