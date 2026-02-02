<script setup lang="ts">
</script>
<template>
  <footer id="footer">
    <div class="footer-logo-section">
      <a href="/krigsbyte/" target="_blank" class="logo">
        <img src="@/assets/png/web_logo.png" alt="Logo" class="logo-icon" />
        <span>Švédská knižní kořist z&nbsp;českých zemí</span>
      </a>
    </div>

    <ul class="footer-links">
      <li><a href="/krigsbyte/history">Historie vyhledávání</a></li>
      <li><a href="/krigsbyte/alphabetical">Procházet abecedně</a></li>
      <li><a href="/krigsbyte/search/advanced">Pokročilé vyhledávání</a></li>
      <li><a href="https://knizni-korist.cz/">Web</a></li>
    </ul>
  </footer>
</template>

<style scoped>
/* --- FOOTER --- */
footer {
  background: #ffffff !important;
  padding: 20px 120px;
  height: 105px;
  min-height: 105px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  z-index: 10000;
  position: relative;
  box-shadow: 0 -4px 5px 0 rgba(0, 0, 0, 0.05);
}

.footer-logo-section {
  flex-shrink: 0;
}

footer .logo {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #720000;
}

footer .logo span {
  display: block;
}

.logo-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
}

.footer-links a {
  text-decoration: none;
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
}

.footer-links a:hover {
  color: #000;
  border-bottom-color: var(--primary);
}

svg {
  pointer-events: none;
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 768px) {
  footer {
    flex-direction: column-reverse;
    height: auto;
    min-height: unset;
    padding: 30px 60px;
    gap: 20px;
    text-align: center;
  }

  .footer-links {
    width: 100%;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }

  .footer-links a {
    font-size: 0.85rem;
  }

  footer .logo {
    justify-content: center;
  }
}
</style>
