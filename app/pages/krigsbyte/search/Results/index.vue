<template>
  <div class="page-layout">
    <Header />

    <main class="results-container">
      <!-- Facets / Locations section -->
      <section class="facets-section">
        <h3>Místa původního uložení ve výsledcích tohoto hledání:</h3>
        <div class="facets-list">
          <span class="facet-item"><a href="#">Olomouc (Česko)</a> <strong>2&nbsp;049</strong></span>
          <span class="facet-item"><a href="#">Mikulov (Břeclav, Česko)</a> <strong>1&nbsp;147</strong></span>
          <span class="facet-item"><a href="#">Praha (Česko)</a> <strong>1&nbsp;028</strong></span>
          <span class="facet-item"><a href="#">neurčeno</a> <strong>33</strong></span>
          <span class="facet-item"><a href="#">Chomutov (Česko)</a> <strong>12</strong></span>
          <span class="facet-item"><a href="#">Cheb (Česko)</a> <strong>4</strong></span>
          <span class="facet-item"><a href="#">Brno (Česko)</a> <strong>2</strong></span>
          <span class="facet-item"><a href="#">Jihlava (Česko)</a> <strong>2</strong></span>
          <span class="facet-item"><a href="#">Kutná Hora (Česko)</a> <strong>1</strong></span>
          <span class="facet-item"><a href="#">Roudnice nad Labem (Česko)</a> <strong>1</strong></span>
        </div>
        <a href="#" class="show-less">méně...</a>
      </section>

      <!-- Results meta info bar -->
      <div class="results-meta-bar">
        <div class="results-count">
          Zobrazeno <strong>1 - 10</strong> z <strong>4 323</strong> pro vyhledávání: ""
        </div>
        <div class="sort-controls">
          <label for="sort-select">Seřadit podle</label>
          <select id="sort-select" class="sort-dropdown">
            <option value="relevance">Relevance</option>
            <option value="date">Data</option>
            <option value="title">Názvu</option>
          </select>
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
    </main>
     
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

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

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9fafb;
}

.results-container {
  flex: 1;
  width: 80vw;
  margin: 0 auto;
  padding: 24px 0;
}

/* --- FACETS SECTION --- */
.facets-section {
  margin-bottom: 24px;
}

.facets-section h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111;
}

.facets-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  line-height: 1.6;
}

.facet-item {
  font-size: 0.95rem;
  color: #333;
}

.facet-item a {
  color: #cc0000;
  text-decoration: none;
}

.facet-item a:hover {
  text-decoration: underline;
}

.facet-item strong {
  color: #000;
}

.show-less {
  display: block;
  margin-top: 4px;
  color: #666;
  font-size: 0.9rem;
  text-decoration: none;
}

.show-less:hover {
  text-decoration: underline;
}

/* --- META BAR --- */
.results-meta-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-bottom: 24px;
  border-top: 1px solid #eee;
}

.results-count {
  font-size: 1.05rem;
  color: #333;
}

.sort-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sort-controls label {
  font-weight: 700;
  color: #111;
}

.sort-dropdown {
  padding: 8px 32px 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  font-size: 0.95rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
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
</style>