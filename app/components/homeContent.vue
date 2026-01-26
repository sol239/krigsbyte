<template>
  <main class="main-content">
    <div class="search-nav-group">
      <div class="group-header">
        <span class="group-title">Rychlá navigace</span>
      </div>
      <div class="nav-links">
        <NuxtLink to="/krigsbyte/history" class="nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
          Historie vyhledávání
        </NuxtLink>
        <NuxtLink to="/krigsbyte/advanced" class="nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="2" y1="14" x2="6" y2="14"/><line x1="10" y1="8" x2="14" y2="8"/><line x1="18" y1="16" x2="22" y2="16"/></svg>
          Pokročilé vyhledávání
        </NuxtLink>
        <NuxtLink to="/krigsbyte/alphabetical" class="nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="4" y1="19" x2="20" y2="19"/></svg>
          Prohlížet abecedně
        </NuxtLink>
      </div>
    </div>

    <div class="intro-text">
      <h1>Hlavní obsah</h1>
      <p>Text loga byl v záhlaví skryt pro minimalistický vzhled. Kompletní logo s názvem nyní najdete v patičce stránky.</p>
    </div>
  </main>
</template>

<style scoped>
/* --- MAIN CONTENT --- */
.main-content {
  flex: 1;
  width: 80vw;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow);
  overflow-y: auto;
}

.search-nav-group {
  background: #f9f9f9;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 40px;
}

.group-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.group-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111;
}

.nav-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 10px 20px;
  border-radius: 8px;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  font-size: 0.95rem;
}

.nav-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.nav-btn svg {
  color: #6b7280;
  transition: color 0.2s;
}

.nav-btn:hover svg {
  color: var(--primary);
}

.intro-text h1 {
  font-size: 2rem;
  margin-bottom: 16px;
  color: #111;
}

.intro-text p {
  line-height: 1.6;
  color: #4b5563;
}
</style>