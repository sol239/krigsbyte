<template>
  <main class="main-content">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Švédská knižní kořist z českých zemí</h1>
        <p class="hero-subtitle">Bibliografický a informační portál</p>
        <p class="hero-description">
          V letech 1646–1648 odvezla švédská vojska z Mikulova, Olomouce a Prahy více než 25 000 knih.
          Tento portál zpřístupňuje informace o dochovaných exemplářích rozptýlených po knihovnách celé Evropy.
        </p>

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

        <div class="city-scroller-container">
          <div class="city-scroller">
            <div class="city-scroller-track">
              <span v-for="(city, index) in loopedCities" :key="index" class="city-item">
                <span class="flag-icon" v-html="flagSvg(city.country)"></span> {{ city.name }} ({{ city.count }})
              </span>
            </div>
          </div>
        </div>

        <div class="hero-footer-link">
          <a href="https://knizni-korist.cz/" target="_blank" rel="noopener">
            Navštívit hlavní web projektu knizni-korist.cz
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
  width: calc(100% - 40px);
  max-width: none;
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
  box-shadow: none;
}

/* --- HERO SECTION --- */
.hero-section {
  background: #fff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: var(--shadow);
  text-align: center;
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content {
  width: 100%;
}

.hero-stats-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background: var(--bg-input);
  padding: 10px 24px;
  border-radius: 100px;
  margin: 10px 0 20px;
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

.hero-section h1 {
  font-size: 2.8rem;
  color: var(--text-main);
  margin: 0 auto 5px;
  font-weight: 800;
  line-height: 1.2;
  max-width: 900px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.hero-description {
  max-width: 800px;
  margin: 0 auto 20px;
  line-height: 1.5;
  color: var(--text-muted);
  font-size: 1.05rem;
}

/* --- CITY SCROLLER --- */
.city-scroller-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 20px;
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
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.hero-footer-link {
  margin-top: 10px;
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

/* --- FEATURES GRID --- */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  color: var(--primary);
  margin-bottom: 20px;
}

.feature-card h2 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
}

.stats {
  font-size: 0.9rem;
  color: var(--text-main);
  margin-bottom: 20px;
  padding: 10px;
  background: var(--bg-input);
  border-radius: 8px;
}

.cta-button {
  display: inline-block;
  padding: 12px 24px;
  background: var(--primary);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  transition: background 0.2s;
}

.cta-button.secondary {
  background: #444;
}

.cta-button.outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.cta-button:hover {
  opacity: 0.9;
}

/* --- SECONDARY INFO --- */
.secondary-info {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
}

.video-section,
.resources-links {
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.video-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: #222;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
}

.links-groups {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
}

.link-group h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.link-group a {
  display: block;
  color: var(--text-main);
  text-decoration: none;
  padding: 5px 0;
  font-weight: 500;
}

.link-group a:hover {
  color: var(--primary);
}

/* --- MOBILE --- */
@media (max-width: 768px) {
  .hero-section {
    padding: 30px 20px;
    min-height: auto;
  }

  .hero-section h1 {
    font-size: 1.6rem;
    word-wrap: break-word;
  }

  .hero-description {
    font-size: 0.95rem;
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

  .secondary-info {
    grid-template-columns: 1fr;
  }

  .main-content {
    width: calc(100% - 20px);
    margin: 5px auto;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.4rem;
  }

  .hero-section {
    padding: 20px 15px;
  }
}
</style>
