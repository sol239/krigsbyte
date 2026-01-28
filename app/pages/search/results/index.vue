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
              <div class="meta-controls">
                <div class="control-group">
                  <label>Seřadit podle</label>
                  <div class="custom-dropdown" :class="{ open: isSortOpen }">
                    <button class="dropdown-trigger" @click.stop="toggleSort">
                      {{ selectedSort }}
                      <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div class="dropdown-menu">
                      <div class="dropdown-item" @click.stop="setSort('Relevance')">Relevance</div>
                      <div class="dropdown-item" @click.stop="setSort('Autor')">Autor</div>
                      <div class="dropdown-item" @click.stop="setSort('Název')">Název</div>
                      <div class="dropdown-item" @click.stop="setSort('Místo')">Místo</div>
                      <div class="dropdown-item" @click.stop="setSort('Podle data sestupně')">Podle data sestupně
                      </div>
                      <div class="dropdown-item" @click.stop="setSort('Podle data vzestupně')">Podle data vzestupně
                      </div>
                    </div>
                  </div>
                </div>
                <div class="control-group">
                  <label>Na stránku</label>
                  <div class="custom-dropdown min-dropdown" :class="{ open: isPageSizeOpen }">
                    <button class="dropdown-trigger" @click.stop="togglePageSize">
                      {{ selectedPageSize }}
                      <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div class="dropdown-menu">
                      <div class="dropdown-item" @click.stop="setPageSize(10)">10</div>
                      <div class="dropdown-item" @click.stop="setPageSize(20)">20</div>
                      <div class="dropdown-item" @click.stop="setPageSize(40)">40</div>
                      <div class="dropdown-item" @click.stop="setPageSize(80)">80</div>
                      <div class="dropdown-item" @click.stop="setPageSize(100)">100</div>
                    </div>
                  </div>
                </div>
              </div>

              <a class="back-btn" href="/krigsbyte/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Domovská stránka
              </a>
            </div>

            <!-- Bottom Row -->
            <div class="meta-row bottom-row">
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

              <div class="results-count">
                <button class="arrow-btn" title="Předchozí">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                Zobrazeno <strong>1 - 20</strong> z <strong>4323</strong>
                <button class="arrow-btn" title="Následující">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              <div class="facet-toggle">
                <span class="facet-label-text">Fasety:</span>
                <label class="switch-container">
                  <input type="checkbox" v-model="showFasety" />
                  <span class="switch-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="results-body">
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
                  <NuxtLink to="/record" class="result-title-link">{{ result.title }}</NuxtLink>
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

          <FacetSidebar v-if="showFasety" />
        </div>

        <!-- Pagination -->
        <nav class="pagination-container">
          <ul class="pagination">
            <li class="page-item">
              <a href="#" title="Na první stránku">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="11 19 4 12 11 5"></polyline>
                  <polyline points="18 19 11 12 18 5"></polyline>
                </svg>
              </a>
            </li>
            <li class="page-item">
              <a href="#" title="Předchozí stránka">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </a>
            </li>
            <li class="page-item active">1</li>
            <li class="page-item"><a href="#">2</a></li>
            <li class="page-item"><a href="#">3</a></li>
            <li class="page-item"><a href="#">4</a></li>
            <li class="page-item"><a href="#">5</a></li>
            <li class="page-item">
              <a href="#" title="Následující stránka">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </li>
            <li class="page-item">
              <a href="#" title="Na poslední stránku">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="13 19 20 12 13 5"></polyline>
                  <polyline points="6 19 13 12 6 5"></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
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
const selectedPageSize = ref(20)

const results = ref([
  {
    number: 1,
    author: 'Spangenberg, Cyriacus, 1528-1604',
    title: 'Adels-Spiegel. Historischer ausfürlicher Bericht, was Adel sey und heisse, woher er komme, wie mancherley er sey, und was denselben ziere und erhalte, auch hingegen verstelle und schwäche',
    publication: 'Schmalkalden : Schmuck, Michael, 1591',
    recordNumber: 'RK 964'
  },
  {
    number: 2,
    author: 'Wanner, Valentin, 1495-1567',
    title: 'DE MISSA IVDICIVM VALENTINI VANNII, PASTORIS ECCLESIAE QVAE EST IN CANDTSTAT.',
    publication: 'Tübingen : Morhart, Ulrich - heredes, 1557',
    recordNumber: 'DK 318'
  },
  {
    number: 3,
    author: 'Alcuin, 735-805',
    title: 'ALBINI THEOLOGORVM SVAE aetatis doctissimi, in Ecclesiasten Commentaria',
    publication: 'Basel : Bebel, Johann, 1531',
    recordNumber: 'RK 259'
  },
  {
    number: 4,
    author: 'La Palud, Pierre de, asi 1280-1342',
    title: 'Sermones Thesauri novi de tempore',
    publication: 'Strasbourg : Flach, Martin, 1487',
    recordNumber: 'DK 7',
    imageUrl: 'https://skk.lib.cas.cz/files/159228'
  },
  {
    number: 5,
    author: 'Gritsch, Johannes, 1420-1470',
    title: 'Quadragesimale',
    publication: '[Strasbourg : Husner, Georg, 1490]',
    recordNumber: 'OlmK 21',
    imageUrl: 'https://skk.lib.cas.cz/files/159819'
  },
  {
    number: 6,
    author: 'Strabón, 64 př. Kr.-19 po Kr.',
    title: 'Strabonos geographikon bibloi hepta kai deka',
    publication: 'Basel : Henricpetri - officina, [1571]',
    recordNumber: 'DK 1116'
  },
  {
    number: 7,
    author: 'Hunnius, Aegidius, 1550-1603',
    title: 'Labyrinthvs primvs papisticus. Hoc est: dispvtatio de papatv semetipsum contradictionibus implicante, confundente & jugulante, in articvlis de Scriptura Sacra.',
    publication: 'Wittenberg : Müller, Georg, 1602',
    recordNumber: 'RK 726',
    imageUrl: 'https://skk.lib.cas.cz/files/158273'
  },
  {
    number: 8,
    author: 'Fine, Oronce, 1494-1555',
    title: 'De speculo ustorio ignem ad propositam distantiam generante, liber unicus',
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
    title: 'Promptuarium Morale Super Evangelia Festorum Totius Anni',
    publication: 'Köln am Rhein : Hierat, Anton, 1617-1618',
    recordNumber: 'OlmK 281',
    imageUrl: 'https://skk.lib.cas.cz/files/152566'
  },
  {
    number: 11,
    author: 'Erasmus, Desiderius, 1466-1536',
    title: 'Adagiorum chiliades tres, ac centuriae fere totidem',
    publication: 'Venice : Aldus Manutius, 1508',
    recordNumber: 'RK 112',
    imageUrl: 'https://skk.lib.cas.cz/files/151234'
  },
  {
    number: 12,
    author: 'Melanchthon, Philipp, 1497-1560',
    title: 'Loci communes rerum theologicarum',
    publication: 'Wittenberg : Lotter, Melchior, 1521',
    recordNumber: 'DK 442'
  },
  {
    number: 13,
    author: 'Luther, Martin, 1483-1446',
    title: 'De captivitate babylonica ecclesiae praeludium',
    publication: 'Wittenberg : Melchior Lotter, 1520',
    recordNumber: 'RK 885'
  },
  {
    number: 14,
    author: 'Vesalius, Andreas, 1514-1564',
    title: 'De humani corporis fabrica libri septem',
    publication: 'Basel : Oporinus, Johannes, 1543',
    recordNumber: 'SJ 125',
    imageUrl: 'https://skk.lib.cas.cz/files/153456'
  },
  {
    number: 15,
    author: 'Copernicus, Nicolaus, 1473-1543',
    title: 'De revolutionibus orbium coelestium',
    publication: 'Nuremberg : Petreius, Johannes, 1543',
    recordNumber: 'RK 334'
  },
  {
    number: 16,
    author: 'Agricola, Georgius, 1494-1555',
    title: 'De re metallica libri XII',
    publication: 'Basel : Froben, Hieronymus & Episcopius, Nicolaus, 1556',
    recordNumber: 'DK 998',
    imageUrl: ''
  },
  {
    number: 17,
    author: 'Calvin, Jean, 1509-1564',
    title: 'Institutio christianae religionis',
    publication: 'Geneva : Robert Estienne, 1559',
    recordNumber: 'RK 441'
  },
  {
    number: 18,
    author: 'More, Thomas, 1478-1535',
    title: 'Libellus vere aureus, nec minus salutaris quam festivus de optimo reipublicae statu deque nova insula Utopia',
    publication: 'Louvain : Martens, Thierry, 1516',
    recordNumber: 'DK 553'
  },
  {
    number: 19,
    author: 'Machiavelli, Niccolo, 1469-1527',
    title: 'Il Principe',
    publication: 'Rome : Blado, Antonio, 1532',
    recordNumber: 'RK 662',
    imageUrl: 'https://skk.lib.cas.cz/files/155678'
  },
  {
    number: 20,
    author: 'Kepler, Johannes, 1571-1630',
    title: 'Astronomia nova',
    publication: '[Heidelberg] : [Vögelin], 1609',
    recordNumber: 'SJ 212'
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
/* --- DESIGN SYSTÉM --- */
:root {
  --bg-body: #eeeeee;
  --text-main: #2d2d2d;
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
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.results-layout {
  flex: 1;
  width: calc(100% - 240px);
  max-width: none;
  margin: 40px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
}

.results-main {
  width: 100%;
}

.results-body {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-top: 24px;
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
.results-list.card {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 0;
  margin-bottom: 0;
}

.result-item {
  display: flex;
  gap: 13px;
  padding: 28px 0;
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
  font-size: 1rem;
  color: #111;
  min-width: 25px;
  padding-top: 2px;
}

.result-image-box {
  width: 67px;
  height: 93px;
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
  gap: 10px;
}

.result-title-row {
  margin-bottom: 2px;
  max-width: 50%;
}

.result-title-link {
  font-size: 1.15rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  line-height: 1.3;
  display: inline;
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
  gap: 4px;
}

.result-row {
  display: flex;
  gap: 6px;
  align-items: baseline;
  line-height: 1.3;
}

.result-label {
  color: #666;
  font-size: 0.9rem;
  white-space: nowrap;
}

.result-author-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 1rem;
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
  font-size: 1rem;
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
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #fff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 6px;
  color: var(--text-muted, #6b7280);
  cursor: pointer;
  transition: all 0.2s;
}

.arrow-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
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

.control-group label {
  font-weight: 700;
  color: #111;
  white-space: nowrap;
}

.min-dropdown {
  min-width: 80px !important;
}

/* --- CUSTOM DROPDOWN --- */
.custom-dropdown {
  position: relative;
  min-width: 220px;
}

.dropdown-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #fff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-main, #1f2937);
  cursor: pointer;
  transition: all 0.2s;
}

.dropdown-trigger:hover {
  border-color: #bbb;
}

.custom-dropdown.open .dropdown-trigger {
  border-color: var(--primary);
  box-shadow: var(--focus-ring, 0 0 0 3px rgba(133, 0, 0, 0.15));
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
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 8px;
  box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
  z-index: 2000;
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
  color: var(--text-main, #1f2937);
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
  color: var(--primary);
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
  gap: 8px;
}

.page-item {
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
}

.page-item a {
  text-decoration: none;
  color: #850000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 6px;
  background: #fff;
}

.page-item a:hover {
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
  border-color: var(--primary);
  color: var(--primary);
}

.page-item.active {
  background: #850000;
  color: #fff;
  font-weight: 700;
  border: 1px solid #850000;
  border-radius: 6px;
}

.page-item.active a {
  color: #fff;
  border: none;
}

.page-item.next {
  min-width: auto;
}

.page-item.total {
  min-width: auto;
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