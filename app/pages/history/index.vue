<template>
  <div class="page-layout">
    <Header />
    <main class="main-content">
      <div class="top-nav">
        <h1>Vaše nedávná vyhledávání</h1>
        <a class="back-btn" href="/krigsbyte">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Zpět na vyhledávání
        </a>
      </div>
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
      <button class="remove-btn">Odstranit neuložená vyhledávání</button>
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
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    }
  ]
})
</script>

<style>
/* --- DESIGN SYSTÉM --- */
:root {
  --primary: #850000;
  --primary-hover: #600000;
  --bg-body: #f9fafb;
  --bg-header: rgba(255, 255, 255, 0.98);
  --bg-footer: #fff;
  --bg-input: #f1f1f1;
  --text-main: #2d2d2d;
  --text-muted: #666;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --transition: all 0.25s ease;
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
  height: 100vh;
}

/* --- MAIN CONTENT --- */
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
  border: 1px solid #e5e7eb;
  transition: all 0.2s;
}

.back-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
}

.history-table-wrapper {
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.history-table thead {
  position: sticky;
  top: 0;
  background: #e0e0e0;
  z-index: 10;
}

.history-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.98rem;
  border-bottom: 1px solid #ddd;
}

.history-table td {
  padding: 14px 16px;
  border-bottom: 1px solid #e8e8e8;
  font-size: 0.95rem;
  color: var(--text-main);
}

.history-table tbody tr:hover {
  background: #f7f7f7;
}

.history-table tbody tr:last-child td {
  border-bottom: none;
}

.remove-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 10px 24px;
  margin-bottom: 12px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.remove-btn:hover {
  background: var(--primary-hover);
}
</style>