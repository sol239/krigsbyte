<template>
  <header id="header">
    <div class="header-left">
      <a href="/" class="logo">
        <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" />
          <path d="M6.5 17H20" />
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17" />
        </svg>
        <span>Švédská knižní kořist z&nbsp;českých zemí</span>
      </a>

      <div class="search-area">
        <div class="search-container">
          <div class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <input type="text" class="search-input" placeholder="Hledat v databázi..." @keyup.enter="handleSearch" />

          <div class="custom-dropdown" id="myDropdown">
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
                <polyline points="6 9 12 15 18 9" />
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
    </div>

    <div class="header-right">
      <div class="header-actions">
        <div class="info-btn" title="Informace">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <div class="custom-dropdown" id="langDropdown">
          <button class="dropdown-trigger lang-trigger" @click.stop="toggleLangMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-item" @click="setLang('cs')">Čeština</div>
            <div class="dropdown-item" @click="setLang('en')">English</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      selectedField: 'Všechna pole',
      selectedLang: 'cs'
    }
  },
  mounted() {
    window.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleMenu() {
      document.getElementById('myDropdown').classList.toggle('open')
    },
    setVal(text) {
      this.selectedField = text
      document.getElementById('myDropdown').classList.remove('open')
    },
    toggleLangMenu() {
      document.getElementById('langDropdown').classList.toggle('open')
    },
    handleSearch() {
      navigateTo('/search/results')
    },
    setLang(langCode) {
      this.selectedLang = langCode
      document.getElementById('langDropdown').classList.remove('open')
      console.log('Jazyk změněn na:', langCode)
    },
    handleClickOutside(event) {
      if (!event.target.closest('.dropdown-trigger')) {
        document.getElementById('myDropdown')?.classList.remove('open')
        document.getElementById('langDropdown')?.classList.remove('open')
      }
    }
  }
}
</script>

<style scoped>
/* --- HEADER --- */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 120px;
  min-height: 70px;
  background: var(--bg-header);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  gap: 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.header-right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo {
  text-decoration: none;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 12px;
  transition: var(--transition);
}

.logo:hover {
  opacity: 0.8;
}

/* V headeru skryjeme text loga */
header .logo span {
  display: none;
}

.logo-icon {
  color: var(--primary);
  flex-shrink: 0;
}

/* --- SEARCH AREA --- */
.search-area {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

/* --- SEARCH CONTAINER --- */
.search-container {
  display: flex;
  align-items: center;
  background: var(--bg-input);
  padding: 6px 6px 6px 18px;
  border-radius: 8px;
  width: 600px;
  border: 1px solid transparent;
  transition: var(--transition);
  position: relative;
  min-width: 0;
}

/* --- ADVANCED SEARCH LINK --- */
.advanced-search-link {
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 14px;
  border-radius: 8px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;
}

.search-container:focus-within {
  background: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(130, 41, 12, 0.1);
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
  font-size: 0.95rem;
  color: var(--text-main);
}

/* --- CUSTOM DROPDOWNS --- */
/* --- CUSTOM DROPDOWNS --- */
.custom-dropdown {
  position: relative;
  user-select: none;
}

#myDropdown {
  border-left: 1px solid #ddd;
  margin-right: 8px;
}

.dropdown-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: transparent;
  border: none;
  font-size: 0.85rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
  gap: 8px;
}

.trigger-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-trigger:hover .dropdown-text {
  color: var(--primary);
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
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 8px;
  box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.2s ease;
  z-index: 2000;
  overflow: hidden;
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
  text-align: left;
}

.dropdown-item:hover {
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
  color: var(--primary);
}

.lang-trigger {
  width: 40px;
  height: 40px;
  background: var(--bg-input);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-trigger:hover {
  background: #e8e8e8;
}

.dropdown-mobile-icon {
  display: none;
  color: var(--text-muted);
}

/* --- SEARCH BUTTON GROUP --- */
.search-button-group {
  display: flex;
  gap: 4px;
}

.search-button {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.search-btn-icon {
  display: none;
}

.search-button:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.search-button.secondary {
  padding: 10px 14px;
}

.search-button.secondary img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

/* --- ACTIONS & LANG --- */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-btn {
  width: 40px;
  height: 40px;
  background: var(--bg-input);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.info-btn:hover {
  background: #e8e8e8;
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 992px) {
  .search-area {
    max-width: none;
  }
}

@media (max-width: 768px) {
  header {
    padding: 10px 15px;
    height: auto;
    display: flex;
    align-items: stretch;
    gap: 15px;
    flex-wrap: wrap;
  }

  .header-left {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
  }

  .search-area {
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 8px;
    min-width: 0;
  }

  .search-container {
    padding: 4px 4px 4px 12px;
    width: auto;
    flex: 1;
    max-width: none;
  }

  .advanced-search-link {
    margin: 0;
    padding: 8px 10px;
    font-size: 0.85rem;
  }

  .search-input {
    font-size: 0.9rem;
  }

  .dropdown-trigger {
    padding: 0 8px;
    font-size: 0.8rem;
  }

  .search-button {
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  .search-button.secondary {
    padding: 8px 10px;
  }

  .header-actions {
    gap: 8px;
  }

  .info-btn,
  .lang-selected {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 640px) {
  .dropdown-text {
    display: none;
  }

  .dropdown-mobile-icon {
    display: block;
  }

  .custom-dropdown {
    margin-right: 4px;
  }

  .search-btn-text {
    display: none;
  }

  .search-btn-icon {
    display: block;
  }

  .search-button {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  header {
    padding: 8px;
    gap: 8px;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .search-area {
    margin: 0;
  }

  .search-container {
    padding: 2px 2px 2px 8px;
    min-width: 0;
    /* Allow shrinking */
  }

  .search-input {
    width: 40px;
    /* Base width, will grow via flex: 1 */
    font-size: 0.85rem;
  }

  .search-icon {
    display: none;
  }

  .search-button.secondary {
    display: none;
  }

  .header-actions {
    display: flex;
  }

  .advanced-search-link {
    display: flex;
  }

  .header-actions {
    gap: 4px;
  }

  .info-btn,
  .lang-selected {
    width: 32px;
    height: 32px;
  }

  .info-btn svg,
  .lang-selected svg {
    width: 18px;
    height: 18px;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
  }

  .info-btn {
    display: flex;
  }

  .dropdown-menu {
    min-width: 120px;
  }

  .dropdown-item {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
}
</style>