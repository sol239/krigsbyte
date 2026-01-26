<template>
  <div class="page-layout">
    <Header />

    <main class="results-layout">
      <div class="results-main">
        <div class="card">
          <!-- Results meta info bar -->
          <div class="results-meta-bar">
            <div class="results-count">
              Zobrazeno <strong>1 - 10</strong> výsledků z <strong>4 323</strong>
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
                    <div class="dropdown-option" @click.stop="setSort('Podle data sestupně')">Podle data sestupně</div>
                    <div class="dropdown-option" @click.stop="setSort('Podle data vzestupně')">Podle data vzestupně</div>
                  </div>
                </div>
              </div>
              <div class="control-group">
                <label>Na stránku</label>
                <div class="custom-dropdown min-dropdown" :class="{ open: isPageSizeOpen }" @click.stop="togglePageSize">
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

              <div class="meta-actions">
                <button class="action-btn" title="Exportovat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
                <button class="action-btn" title="Tisknout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Results List -->
        <div class="results-list card">
        <!-- Result 1 -->
        <div class="result-item">
          <div class="result-number">1</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Adels-Spiegel. Historischer ausführlicher Bericht, was Adel sey und heisse, woher er komme, wie mancherley er sey, und was denselben ziere und erhalte, auch hingegen verstelle und schwäche...</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Spangenberg, Cyriacus, 1528-1604</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Schmalkalden : Schmuck, Michael, 1591</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 964</span>
              </div>
            </div>
          </div>
          <!-- <div class="result-file">...</div> -->
        </div>

        <!-- Result 2 -->
        <div class="result-item">
          <div class="result-number">2</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Der Prophet Jona ausgelegt durch Mart. Luth.</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Luther, Martin, 1483-1546</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Wittemberg : Lufft, Hans, 1526</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 1025</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 3 -->
        <div class="result-item">
          <div class="result-number">3</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Loci praecipui theologici</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Melanchthon, Philipp, 1497-1560</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Lipsiae : Rhamba, Johann, 1559</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 452</span>
              </div>
            </div>
          </div>
          <!-- <div class="result-file">...</div> -->
        </div>

        <!-- Result 4 -->
        <div class="result-item">
          <div class="result-number">4</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Institutio christianae religionis</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Calvin, Jean, 1509-1564</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Genevae : Stephanus, Robertus, 1559</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 789</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 5 -->
        <div class="result-item">
          <div class="result-number">5</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Enchiridion militis Christiani</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Erasmus Roterodamus, Desiderius, 1466-1536</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Basileae : Froben, Johann, 1518</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 123</span>
              </div>
            </div>
          </div>
          <!-- <div class="result-file">...</div> -->
        </div>

        <!-- Result 6 -->
        <div class="result-item">
          <div class="result-number">6</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">De re metallica libri XII</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Agricola, Georgius, 1494-1555</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Basileae : Froben, Hieronymus, 1556</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 888</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 7 -->
        <div class="result-item">
          <div class="result-number">7</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">De revolutionibus orbium coelestium</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Copernicus, Nicolaus, 1473-1543</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Norimbergae : Petreius, Johannes, 1543</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 333</span>
              </div>
            </div>
          </div>
          <!-- <div class="result-file">...</div> -->
        </div>

        <!-- Result 8 -->
        <div class="result-item">
          <div class="result-number">8</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">De humani corporis fabrica libri septem</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Vesalius, Andreas, 1514-1564</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Basileae : Oporinus, Johannes, 1543</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 555</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Result 9 -->
        <div class="result-item">
          <div class="result-number">9</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Die große Wundarznei</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Paracelsus, 1493-1541</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Ulm : Varnier, Hans, 1536</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 222</span>
              </div>
            </div>
          </div>
          <!-- <div class="result-file">...</div> -->
        </div>

        <!-- Result 10 -->
        <div class="result-item">
          <div class="result-number">10</div>
          <div class="result-image-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="result-content">
            <div class="result-title-row">
              <a href="#" class="result-title-link">Il Principe</a>
            </div>
            <div class="result-info-grid">
              <div class="result-row">
                <span class="result-label">Autor:</span>
                <a href="#" class="result-author-link">Machiavelli, Niccolò, 1469-1527</a>
              </div>
              <div class="result-row">
                <span class="result-label">Nakladatelské údaje:</span>
                <span class="result-value">Roma : Blado, Antonio, 1532</span>
              </div>
              <div class="result-row">
                <span class="result-label">Číslo záznamu:</span>
                <span class="result-value secondary">RK 111</span>
              </div>
            </div>
          </div>
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
      <FacetSidebar />
    </main>
     
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import FacetSidebar from '~/components/FacetSidebar.vue'

const isSortOpen = ref(false)
const selectedSort = ref('Relevance')
const isPageSizeOpen = ref(false)
const selectedPageSize = ref(10)

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
body {
  background-color: #f9fafb;
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
  min-width: 0; /* Prevents overflow */
}

/* --- META BAR --- */
.results-meta-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
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
  background-color: rgba(0,0,0,0.01);
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