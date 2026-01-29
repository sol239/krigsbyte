<template>
  <div class="page-layout">
    <Header />
    <main class="main-content">
      <div class="history-content">
        <div class="top-nav">
          <h1>Vaše nedávná vyhledávání</h1>
          <a class="back-btn" href="/krigsbyte/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Domovská stránka
          </a>
        </div>

        <div class="history-card">
          <div class="history-table-wrapper">
            <table class="history-table">
              <thead>
                <tr>
                  <th>Datum a čas</th>
                  <th>Vyhledávací dotaz</th>
                  <th>Použité filtry</th>
                  <th>Výsledky</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in historyData" :key="idx">
                  <td>{{ formatDate(item.date) }}</td>
                  <td v-html="item.query"></td>
                  <td v-html="item.filters"></td>
                  <td>{{ item.results }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="history-actions">
            <button class="remove-btn">Odstranit vyhledávání</button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

const historyData = [
  {
    date: '2026-01-23T11:34:00',
    query: '(Číslo záznamu:ŠŠĚ AND Název:DFEEWW AND Místo vydání/tisku:EWWE)',
    filters: 'Jazyk: German<br>Rok vydání: 1400 - 1942',
    results: 0
  },
  {
    date: '2026-01-23T11:33:00',
    query: 'áýí',
    filters: '',
    results: 0
  },
  {
    date: '2026-01-23T11:33:00',
    query: '(Všechna pole:íá)',
    filters: 'Jazyk: English',
    results: 0
  },
  {
    date: '2026-01-23T11:33:00',
    query: 'tzrzrtýáž',
    filters: '',
    results: 0
  },
  {
    date: '2026-01-23T11:32:00',
    query: 'tzrzrt',
    filters: '',
    results: 0
  },
  {
    date: '2026-01-23T11:32:00',
    query: 'žč',
    filters: '',
    results: 0
  }
]

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const pad = n => n.toString().padStart(2, '0')
  return `${pad(d.getDate())}. ${pad(d.getMonth() + 1)}. ${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

useHead({
  title: 'Historie vyhledávání | Krigsbyte',
  htmlAttrs: {
    lang: 'cs'
  }
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

.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* --- MAIN CONTENT --- */
.main-content {
  flex: 1;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.history-content {
  padding: 40px 120px;
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
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.back-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
}

/* --- HISTORY CARD --- */
.history-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.history-table-wrapper {
  margin-bottom: 24px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  table-layout: fixed;
}

.history-table thead {
  background: #f9fafb;
}

.history-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.9rem;
  color: #4b5563;
  border-bottom: 1px solid var(--border-color);
}

.history-table td {
  padding: 14px 16px;
  font-size: 0.95rem;
  color: var(--text-main);
  max-width: 120px;
  word-break: break-word;
  white-space: normal;
  border-bottom: 1px solid var(--border-color);
}

.history-table td:nth-child(2),
.history-table td:nth-child(3) {
  max-width: 200px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.history-table tbody tr:hover {
  background: #f9fafb;
}

.history-table tbody tr:last-child td {
  border-bottom: none;
}

.history-actions {
  display: flex;
  justify-content: flex-start;
}

.remove-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.remove-btn:hover {
  background: var(--primary-hover);
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 1024px) {
  .history-content {
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .history-content {
    padding: 20px;
  }

  .history-card {
    padding: 16px;
  }

  .history-table th,
  .history-table td {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
}
</style>