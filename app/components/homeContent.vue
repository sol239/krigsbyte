<template>
  <main class="main-content">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-top-title">Švédská knižní kořist z českých zemí</h2>
        <h1 class="hero-subtitle">Databáze dochovaných knih</h1>

        <!-- SEARCHBAR -->
        <div class="search-area">
          <div class="search-container">
            <div class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <input type="text" class="search-input" placeholder="Hledat v databázi..." @keyup.enter="handleSearch"/>

            <div class="custom-dropdown" :class="{ open: isDropdownOpen }">
              <button class="dropdown-trigger" @click.stop="toggleMenu">
                <div class="trigger-content">
                  <svg class="dropdown-mobile-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <span class="dropdown-text">{{ selectedField }}</span>
                </div>
                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="dropdown-menu">
                <div class="dropdown-item" @click="setVal('Všechna pole')">Všechna pole</div>
                <div class="dropdown-item" @click="setVal('Název')">Název</div>
                <div class="dropdown-item" @click="setVal('Autor')">Autor</div>
                <div class="dropdown-item" @click="setVal('Popis')">Popis</div>
              </div>
            </div>

            <div class="search-button-group">
              <button class="search-button" @click="handleSearch">
                <span class="search-btn-text">Hledat</span>
                <svg class="search-btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
          <a href="/krigsbyte/search/advanced" class="advanced-search-link">POKROČILÉ</a>
        </div>

        <div class="city-scroller-container">
          <div class="city-scroller">
            <div class="city-scroller-track">
              <span v-for="(city, index) in loopedCities" :key="index" class="city-item">
                <span class="flag-icon" v-html="flagSvg(city.country)"></span> {{ city.name }} ({{ city.count }})
              </span>
            </div>
          </div>
        </div>

        <div class="hero-stats-card">
          <span class="stats-label">Aktuálně:</span>
          <div class="stat-item">
            <span class="stat-number">4,312</span>
            <span class="stat-text">identifikovaných knih</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">63</span>
            <span class="stat-text">knihoven</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">16</span>
            <span class="stat-text">zemí</span>
          </div>
        </div>

        <div class="hero-footer-link">
          <a href="https://knizni-korist.cz/" target="_blank" rel="noopener">
            Hlavní web
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <a href="https://knizni-korist.cz/vizualizace-dat/" target="_blank" rel="noopener">
            Vizualizace databáze
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const selectedField = ref('Všechna pole')
const isDropdownOpen = ref(false)

const toggleMenu = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const setVal = (val: string) => {
  selectedField.value = val
  isDropdownOpen.value = false
}

const handleSearch = () => {
  navigateTo('/search/results')
}

const handleClickOutside = (event: MouseEvent) => {
  if (!(event.target as Element).closest('.custom-dropdown')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})

const cities = [
  { name: 'Västerås', count: 688, country: 'SE' },
  { name: 'Stockholm', count: 669, country: 'SE' },
  { name: 'Uppsala', count: 347, country: 'SE' },
  { name: 'Lund', count: 209, country: 'SE' },
  { name: 'Leiden', count: 180, country: 'NL' },
  { name: 'København', count: 169, country: 'DK' },
  { name: 'Vatikán', count: 91, country: 'VA' },
  { name: 'Växjö', count: 45, country: 'SE' },
  { name: 'Linköping', count: 30, country: 'SE' },
  { name: 'Brno', count: 21, country: 'CZ' },
  { name: 'Hamburg', count: 16, country: 'DE' },
  { name: 'Karlstad', count: 16, country: 'SE' },
  { name: 'Skara', count: 15, country: 'SE' },
  { name: 'Göteborg', count: 13, country: 'SE' },
  { name: 'Göttingen', count: 12, country: 'DE' },
  { name: 'Hannover', count: 11, country: 'DE' },
  { name: 'Bremen', count: 9, country: 'DE' },
  { name: 'Berlin', count: 7, country: 'DE' },
  { name: 'Oslo', count: 7, country: 'NO' },
  { name: 'Skokloster', count: 5, country: 'SE' },
  { name: 'Praha', count: 3, country: 'CZ' },
  { name: 'Frankfurt', count: 3, country: 'DE' },
  { name: 'Roma', count: 2, country: 'IT' },
  { name: 'Sankt Peterburg', count: 2, country: 'RU' },
];

const flagSvgs: Record<string, string> = {
  SE: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="#0052B4"/><rect x="5.33" y="0" width="1.33" height="16" fill="#FFCC00"/><rect x="0" y="5.33" width="16" height="1.33" fill="#FFCC00"/></svg>`,
  NL: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="5.33" fill="#AE1C28"/><rect y="5.33" width="16" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="16" height="5.33" fill="#21468B"/></svg>`,
  DK: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="#C8102E"/><rect x="5.33" y="0" width="1.33" height="16" fill="#FFFFFF"/><rect x="0" y="5.33" width="16" height="1.33" fill="#FFFFFF"/></svg>`,
  VA: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="8" height="16" fill="#FFE000"/><rect x="8" width="8" height="16" fill="#FFFFFF"/></svg>`,
  CZ: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="8" fill="#FFFFFF"/><rect y="8" width="16" height="8" fill="#D52B1E"/><polygon points="0,0 8,8 0,16" fill="#11457E"/></svg>`,
  DE: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="5.33" fill="#000000"/><rect y="5.33" width="16" height="5.33" fill="#DD0000"/><rect y="10.67" width="16" height="5.33" fill="#FFCC00"/></svg>`,
  NO: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="#BA0C2F"/><rect x="5.33" y="0" width="1.33" height="16" fill="#FFFFFF"/><rect x="0" y="5.33" width="16" height="1.33" fill="#FFFFFF"/><rect x="6" y="0" width="0.67" height="16" fill="#00205B"/><rect x="0" y="6" width="16" height="0.67" fill="#00205B"/></svg>`,
  IT: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="5.33" height="16" fill="#009246"/><rect x="5.33" width="5.33" height="16" fill="#FFFFFF"/><rect x="10.67" width="5.33" height="16" fill="#CE2B37"/></svg>`,
  RU: `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="5.33" fill="#FFFFFF"/><rect y="5.33" width="16" height="5.33" fill="#0052B4"/><rect y="10.67" width="16" height="5.33" fill="#D52B1E"/></svg>`,
};

function flagSvg(code: string): string {
  return flagSvgs[code] || '';
}

const loopedCities = [...cities, ...cities];
</script>

<style scoped>
.main-content {
  flex: 1;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 40px 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* --- HERO SECTION (CARD) --- */
.hero-section {
  background: #fff;
  padding: 60px 40px;
  border-radius: 12px;
  border: 1px solid var(--border-color, #e5e7eb);
  box-shadow: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
  text-align: center;
  min-height: calc(100vh - 280px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-top-title {
  font-size: 1.1rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 2.8rem;
  color: var(--text-main);
  margin: 0 auto 30px;
  font-weight: 800;
  line-height: 1.2;
  max-width: 900px;
}

/* --- SEARCH AREA --- */
.search-area {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 40px;
  width: 100%;
  justify-content: center;
}

.search-container {
  display: flex;
  align-items: center;
  background: var(--bg-input);
  padding: 6px 6px 6px 18px;
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
  position: relative;
}

.search-container:focus-within {
  background: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(133, 0, 0, 0.1);
}

.search-icon {
  color: #999;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--text-main);
  padding: 8px 0;
}

.advanced-search-link {
  text-decoration: none;
  color: var(--primary);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  padding: 10px;
  transition: var(--transition);
  white-space: nowrap;
}

.advanced-search-link:hover {
  opacity: 0.8;
}

/* --- CUSTOM DROPDOWN --- */
.custom-dropdown {
  position: relative;
  user-select: none;
  border-left: 1px solid #ddd;
  margin-right: 8px;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: transparent;
  border: none;
  font-size: 0.9rem;
  color: var(--text-muted);
  cursor: pointer;
  gap: 8px;
}

.trigger-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-text {
  font-weight: 500;
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
  top: calc(100% + 8px);
  right: 0;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.2s ease;
  z-index: 100;
  overflow: hidden;
}

.custom-dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  padding: 12px 16px;
  font-size: 0.95rem;
  cursor: pointer;
  color: var(--text-main);
  transition: background 0.15s;
  text-align: left;
}

.dropdown-item:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.dropdown-mobile-icon {
  display: none;
}

/* --- SEARCH BUTTON --- */
.search-button {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-button:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.search-btn-icon {
  display: none;
}

/* --- STATS CARD --- */
.hero-stats-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background: var(--bg-input);
  padding: 10px 24px;
  border-radius: 100px;
  margin: 10px 0 30px;
  border: 1px solid var(--border-color);
}

.stats-label {
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-number {
  font-weight: 800;
  color: var(--text-main);
  font-size: 1.1rem;
}

.stat-text {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.stat-divider {
  width: 1px;
  height: 20px;
  background: var(--border-color);
}

/* --- CITY SCROLLER --- */
.city-scroller-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 30px;
  overflow: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.city-scroller {
  display: flex;
  white-space: nowrap;
}

.city-scroller-track {
  display: flex;
  gap: 15px;
  animation: scroll 60s linear infinite;
  padding: 10px 0;
}

.city-scroller-container:hover .city-scroller-track {
  animation-play-state: paused;
}

.city-item {
  background: var(--bg-input);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.flag-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.hero-footer-link {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.hero-footer-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.hero-footer-link a:hover {
  opacity: 1;
  text-decoration: underline;
}

/* --- MOBILE --- */
@media (max-width: 1024px) {
  .main-content {
    padding: 40px 40px;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px 20px;
  }

  .hero-section {
    padding: 40px 20px;
    min-height: auto;
  }

  .hero-subtitle {
    font-size: 1.8rem;
  }

  .search-area {
    flex-direction: column;
    gap: 15px;
  }

  .search-container {
    padding: 4px 4px 4px 12px;
  }

  .hero-stats-card {
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    gap: 10px;
    width: 100%;
  }

  .stat-divider {
    display: none;
  }
}

@media (max-width: 640px) {
  .dropdown-text {
    display: none;
  }
  .dropdown-mobile-icon {
    display: block;
  }
  .search-btn-text {
    display: none;
  }
  .search-btn-icon {
    display: block;
  }
  .search-button {
    padding: 10px;
  }
}
</style>
