<template>
  <div class="page-layout">
    <Header />

    <main class="results-layout">
      <div class="results-main">
        <div class="card">
          <!-- Results meta info bar -->
          <div class="results-meta-bar">
            <!-- Top Row -->
            <div class="meta-row top-row">
              <div class="results-count">
                Zobrazeno <strong>1 - 10</strong> z <strong>4323</strong>
              </div>

              <div class="meta-controls">
                <div class="control-group">
                  <label>Seřadit podle</label>
                  <div class="custom-dropdown" :class="{ open: isSortOpen }" @click.stop="toggleSort">
                    <div class="dropdown-selected">{{ selectedSort }}</div>
                    <div class="dropdown-list">
                      <div class="dropdown-option" @click.stop="setSort('Relevance')">Relevance</div>
                      <div class="dropdown-option" @click.stop="setSort('Autor')">Autor</div>
                      <div class="dropdown-option" @click.stop="setSort('Název')">Název</div>
                      <div class="dropdown-option" @click.stop="setSort('Místo')">Místo</div>
                      <div class="dropdown-option" @click.stop="setSort('Podle data sestupně')">Podle data sestupně
                      </div>
                      <div class="dropdown-option" @click.stop="setSort('Podle data vzestupně')">Podle data vzestupně
                      </div>
                    </div>
                  </div>
                </div>
                <div class="control-group">
                  <label>Na stránku</label>
                  <div class="custom-dropdown min-dropdown" :class="{ open: isPageSizeOpen }"
                    @click.stop="togglePageSize">
                    <div class="dropdown-selected">{{ selectedPageSize }}</div>
                    <div class="dropdown-list">
                      <div class="dropdown-option" @click.stop="setPageSize(10)">10</div>
                      <div class="dropdown-option" @click.stop="setPageSize(20)">20</div>
                      <div class="dropdown-option" @click.stop="setPageSize(40)">40</div>
                      <div class="dropdown-option" @click.stop="setPageSize(80)">80</div>
                      <div class="dropdown-option" @click.stop="setPageSize(100)">100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Row -->
            <div class="meta-row bottom-row">
              <div class="facet-toggle">
                <span class="facet-label-text">Fasety:</span>
                <label class="switch-container">
                  <input type="checkbox" v-model="showFasety" />
                  <span class="switch-slider"></span>
                </label>
              </div>

              <div class="meta-actions">
                <button class="action-btn" title="Exportovat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button class="action-btn" title="Tisknout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9V2h12v7" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Results List -->
        <div class="results-list card">
          <div v-for="result in results" :key="result.number" class="result-item">
            <div class="result-number">{{ result.number }}</div>
            <div class="result-image-box">
              <img v-if="result.imageUrl" :src="result.imageUrl" class="result-image" alt="Book cover" />
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div class="result-content">
              <div class="result-title-row">
                <a href="#" class="result-title-link">{{ result.title }}</a>
              </div>
              <div class="result-info-grid">
                <div class="result-row">
                  <span class="result-label">Autor:</span>
                  <a href="#" class="result-author-link">{{ result.author }}</a>
                </div>
                <div class="result-row">
                  <span class="result-label">Nakladatelské údaje:</span>
                  <span class="result-value">{{ result.publication }}</span>
                </div>
                <div class="result-row">
                  <span class="result-label">Číslo záznamu:</span>
                  <span class="result-value secondary">{{ result.recordNumber }}</span>
                </div>
              </div>
            </div>
            <!-- <div class="result-file">...</div> -->
          </div>
        </div>

        <!-- Pagination -->
        <nav class="pagination-container">
          <ul class="pagination">
            <li class="page-item active">1</li>
            <li class="page-item"><a href="#">2</a></li>
            <li class="page-item"><a href="#">3</a></li>
            <li class="page-item"><a href="#">4</a></li>
            <li class="page-item"><a href="#">5</a></li>
            <li class="page-item"><a href="#">6</a></li>
            <li class="page-item"><a href="#">7</a></li>
            <li class="page-item"><a href="#">8</a></li>
            <li class="page-item"><a href="#">9</a></li>
            <li class="page-item"><a href="#">10</a></li>
            <li class="page-item"><a href="#">11</a></li>
            <li class="page-item next"><a href="#">Další »</a></li>
            <li class="page-item total"><a href="#">[433]</a></li>
          </ul>
        </nav>
      </div>
      <FacetSidebar v-if="showFasety" />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import FacetSidebar from '~/components/FacetSidebar.vue'

const showFasety = ref(true)
const isSortOpen = ref(false)
const selectedSort = ref('Relevance')
const isPageSizeOpen = ref(false)
const selectedPageSize = ref(10)

const results = ref([
  {
    number: 1,
    author: 'Spangenberg, Cyriacus, 1528-1604',
    title: 'Adels-Spiegel. Historischer ausfürlicher Bericht, was Adel sey und heisse, woher er komme, wie mancherley er sey, und was denselben ziere und erhalte, auch hingegen verstelle und schwäche...',
    publication: 'Schmalkalden : Schmuck, Michael, 1591',
    recordNumber: 'RK 964'
  },
  {
    number: 2,
    author: 'Wanner, Valentin, 1495-1567',
    title: 'DE MISSA IVDICIVM VALENTINI VANNII, PASTORIS ECCLESIAE QVAE EST IN CANDTSTAT. ...',
    publication: 'Tübingen : Morhart, Ulrich - heredes, 1557',
    recordNumber: 'DK 318'
  },
  {
    number: 3,
    author: 'Alcuin, 735-805',
    title: 'ALBINI THEOLOGORVM SVAE aetatis doctissimi, in Ecclesiasten Commentaria ...',
    publication: 'Basel : Bebel, Johann, 1531',
    recordNumber: 'RK 259'
  },
  {
    number: 4,
    author: 'La Palud, Pierre de, asi 1280-1342',
    title: 'Sermones Thesauri novi de tempore ...',
    publication: 'Strasbourg : Flach, Martin, 1487',
    recordNumber: 'DK 7',
    imageUrl: 'https://skk.lib.cas.cz/files/159228'
  },
  {
    number: 5,
    author: 'Gritsch, Johannes, 1420-1470',
    title: 'Quadragesimale ...',
    publication: '[Strasbourg : Husner, Georg, 1490]',
    recordNumber: 'OlmK 21',
    imageUrl: 'https://skk.lib.cas.cz/files/159819'
  },
  {
    number: 6,
    author: 'Strabón, 64 př. Kr.-19 po Kr.',
    title: 'Strabonos geographikon bibloi hepta kai deka...',
    publication: 'Basel : Henricpetri - officina, [1571]',
    recordNumber: 'DK 1116'
  },
  {
    number: 7,
    author: 'Hunnius, Aegidius, 1550-1603',
    title: 'Labyrinthvs primvs papisticus. Hoc est: dispvtatio de papatv semetipsum contradictionibus implicante, confundente & jugulante, in articvlis de Scriptura Sacra. ...',
    publication: 'Wittenberg : Müller, Georg, 1602',
    recordNumber: 'RK 726',
    imageUrl: 'https://skk.lib.cas.cz/files/158273'
  },
  {
    number: 8,
    author: 'Fine, Oronce, 1494-1555',
    title: 'De speculo ustorio ignem ad propositam distantiam generante, liber unicus ...',
    publication: 'Paris : Michel de Vascosan, 1551',
    recordNumber: 'SJ 39'
  },
  {
    number: 9,
    author: 'Fabri de Werdea, Johannes, 1450-1505',
    title: 'Exercitata parvorum logicalium secundum viam modernorum.',
    publication: '[Reutlingen] : Otmar, Johann, 1487',
    recordNumber: 'DK 613'
  },
  {
    number: 10,
    author: 'Beyerlinck, Laurentius, 1578-1627',
    title: 'Promptuarium Morale Super Evangelia Festorum Totius Anni ...',
    publication: 'Köln am Rhein : Hierat, Anton, 1617-1618',
    recordNumber: 'OlmK 281',
    imageUrl: 'https://skk.lib.cas.cz/files/152566'
  }
])

const toggleSort = () => {
  isSortOpen.value = !isSortOpen.value
  isPageSizeOpen.value = false
}

const togglePageSize = () => {
  isPageSizeOpen.value = !isPageSizeOpen.value
  isSortOpen.value = false
}

const setSort = (val) => {
  selectedSort.value = val
  isSortOpen.value = false
}

const setPageSize = (val) => {
  selectedPageSize.value = val
  isPageSizeOpen.value = false
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.custom-dropdown')) {
    isSortOpen.value = false
    isPageSizeOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})

useHead({
  title: 'Výsledky vyhledávání | Krigsbyte',
  htmlAttrs: { lang: 'cs' }
})
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.results-layout {
  display: flex;
  gap: 32px;
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 0;
}

.results-main {
  flex: 1;
  min-width: 0;
  /* Prevents overflow */
}

/* --- META BAR --- */
.results-meta-bar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.bottom-row {
  padding-top: 12px;
  border-top: 1px solid #eee;
}

/* --- SWITCH STYLE --- */
.switch-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.switch-container input {
  display: none;
}

.switch-slider {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  transition: background-color 0.2s;
}

.switch-slider::before {
  content: "";
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.switch-container input:checked+.switch-slider {
  background-color: var(--primary, #850000);
}

.switch-container input:checked+.switch-slider::before {
  transform: translateX(20px);
}

.facet-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
}

.facet-label-text {
  font-size: 0.95rem;
  font-weight: 700;
  color: #111;
}

.switch-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
}

/* --- RESULTS LIST --- */
.results-list {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
}

.result-item {
  display: flex;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.2s;
}

.result-item:last-child {
  border-bottom: none;
}

.result-item:hover {
  background-color: rgba(0, 0, 0, 0.01);
}

.result-number {
  font-weight: 700;
  font-size: 1.1rem;
  color: #111;
  min-width: 30px;
  padding-top: 2px;
}

.result-image-box {
  width: 100px;
  height: 140px;
  background-color: #f3f4f6;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #9ca3af;
  overflow: hidden;
}

.result-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.result-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-title-row {
  margin-bottom: 4px;
}

.result-title-link {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  line-height: 1.4;
  display: inline;
  transition: all 0.2s;
}

.result-title-link:hover {
  text-decoration: underline;
  text-decoration-color: var(--primary, #850000);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.result-info-grid {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.result-row {
  display: flex;
  gap: 6px;
  align-items: baseline;
  line-height: 1.5;
}

.result-label {
  color: #666;
  font-size: 0.9rem;
  white-space: nowrap;
}

.result-author-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
}

.result-author-link:hover {
  text-decoration: underline;
  text-decoration-color: var(--primary, #850000);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.result-value {
  color: #333;
  font-size: 0.95rem;
}

.result-value.secondary {
  color: #666;
}

.result-file {
  display: flex;
  align-items: flex-start;
}

.results-count {
  font-size: 1.05rem;
  color: #333;
}

.meta-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 8px;
  color: var(--text-muted, #6b7280);
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
}

.meta-controls {
  display: flex;
  align-items: center;
  gap: 24px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.control-group label {
  font-weight: 700;
  color: #111;
  white-space: nowrap;
}

.min-dropdown {
  min-width: 80px !important;
}

/* --- CUSTOM DROPDOWN (Matches Header Style) --- */
.custom-dropdown {
  position: relative;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 220px;
  cursor: pointer;
  user-select: none;
}

.dropdown-selected {
  padding: 8px 32px 8px 12px;
  font-size: 0.95rem;
  color: #333;
  display: flex;
  align-items: center;
}

.dropdown-selected::after {
  content: "";
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #666;
  transition: transform 0.2s;
}

.custom-dropdown.open .dropdown-selected::after {
  transform: translateY(-50%) rotate(180deg);
}

.dropdown-list {
  position: absolute;
  top: calc(100% + 4px);
  left: -1px;
  right: -1px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 2000;
  overflow: hidden;
}

.custom-dropdown.open .dropdown-list {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-option {
  padding: 10px 15px;
  font-size: 0.95rem;
  color: #333;
  transition: all 0.1s;
}

.dropdown-option:hover {
  background-color: var(--primary);
  color: #fff;
}

/* --- PAGINATION --- */
.pagination-container {
  display: flex;
  justify-content: center;
  margin: 32px 0;
}

.pagination {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  border: 1px solid #ddd;
  background: #fff;
}

.page-item {
  border-right: 1px solid #ddd;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
}

.page-item:last-child {
  border-right: none;
}

.page-item a {
  text-decoration: none;
  color: #850000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.page-item a:hover {
  background: #f5f5f5;
}

.page-item.active {
  background: #850000;
  color: #fff;
  font-weight: 700;
}

.page-item.next {
  min-width: 80px;
}

.page-item.total {
  min-width: 60px;
}

.page-item.total a {
  color: #850000;
}

@media (max-width: 768px) {
  .results-meta-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

.card {
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  padding: 24px;
  margin-bottom: 24px;
}
</style>