<template>
  <header id="header">
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <a href="https://knizni-korist.cz/" class="logo">
      <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" />
        <path d="M6.5 17H20" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17" />
      </svg>
      <span class="logo-text">Švédská knižní kořist z&nbsp;českých zemí</span>
    </a>

    <!-- Desktop Search Container -->
    <div class="search-container desktop-search">
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <input type="text" class="search-input" placeholder="Hledat v databázi..." @keyup.enter="handleSearch" 
        v-model="searchQuery" />

      <div class="custom-dropdown" id="myDropdown">
        <div class="dropdown-selected" @click="toggleMenu">
          <span class="dropdown-text">{{ selectedField }}</span>
        </div>
        <div class="dropdown-list">
          <div class="dropdown-option" @click="setVal('Všechna pole')">Všechna pole</div>
          <div class="dropdown-option" @click="setVal('Název')">Název</div>
          <div class="dropdown-option" @click="setVal('Autor')">Autor</div>
          <div class="dropdown-option" @click="setVal('Popis')">Popis</div>
        </div>
      </div>

      <div class="search-button-group">
        <button class="search-button primary-btn" @click="handleSearch">
          <span class="btn-text">Hledat</span>
          <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button class="search-button secondary" title="Vyhledávání v knihách">
          <img :src="bookSearch" alt="Book search" />
        </button>
      </div>
    </div>

    <!-- Mobile Search Button -->
    <button class="mobile-search-btn" @click="toggleMobileSearch">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>

    <div class="header-actions">
      <div class="info-btn" title="Informace">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>
      <div class="lang-dropdown" id="langDropdown">
        <div class="lang-selected" @click="toggleLangMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>
        </div>
        <div class="lang-list">
          <div class="lang-option" @click="setLang('cs')">Čeština</div>
          <div class="lang-option" @click="setLang('en')">English</div>
          <div class="lang-option" @click="setLang('sv')">Svenska</div>
        </div>
      </div>
    </div>

    <!-- Mobile Search Panel -->
    <div class="mobile-search-panel" :class="{ 'active': mobileSearchOpen }">
      <div class="mobile-search-content">
        <input type="text" class="mobile-search-input" placeholder="Hledat v databázi..." 
          @keyup.enter="handleMobileSearch" v-model="searchQuery" />
        
        <div class="mobile-search-options">
          <div class="custom-dropdown mobile-dropdown" id="mobileDropdown">
            <div class="dropdown-selected" @click="toggleMobileDropdownMenu">
              <span class="dropdown-text">{{ selectedField }}</span>
            </div>
            <div class="dropdown-list">
              <div class="dropdown-option" @click="setValMobile('Všechna pole')">Všechna pole</div>
              <div class="dropdown-option" @click="setValMobile('Název')">Název</div>
              <div class="dropdown-option" @click="setValMobile('Autor')">Autor</div>
              <div class="dropdown-option" @click="setValMobile('Popis')">Popis</div>
            </div>
          </div>

          <button class="mobile-search-submit" @click="handleMobileSearch">
            Hledat
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div class="mobile-menu-panel" :class="{ 'active': mobileMenuOpen }">
      <nav class="mobile-nav">
        <a href="#" class="mobile-nav-item">Informace</a>
        <div class="mobile-lang-options">
          <button class="mobile-lang-btn" @click="setLang('cs')">Čeština</button>
          <button class="mobile-lang-btn" @click="setLang('en')">English</button>
          <button class="mobile-lang-btn" @click="setLang('sv')">Svenska</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import bookSearch from '~/assets/svg/book-search.svg'

export default {
  data() {
    return {
      selectedField: 'Všechna pole',
      selectedLang: 'cs',
      searchQuery: '',
      mobileSearchOpen: false,
      mobileMenuOpen: false,
      bookSearch
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
    toggleMobileDropdownMenu() {
      document.getElementById('mobileDropdown').classList.toggle('open')
    },
    setVal(text) {
      this.selectedField = text
      document.getElementById('myDropdown').classList.remove('open')
    },
    setValMobile(text) {
      this.selectedField = text
      document.getElementById('mobileDropdown').classList.remove('open')
    },
    toggleLangMenu() {
      document.getElementById('langDropdown').classList.toggle('open')
    },
    toggleMobileSearch() {
      this.mobileSearchOpen = !this.mobileSearchOpen
      this.mobileMenuOpen = false
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      this.mobileSearchOpen = false
    },
    handleSearch() {
      navigateTo('/search/results')
    },
    handleMobileSearch() {
      this.mobileSearchOpen = false
      navigateTo('/search/results')
    },
    setLang(langCode) {
      this.selectedLang = langCode
      document.getElementById('langDropdown').classList.remove('open')
      this.mobileMenuOpen = false
      console.log('Jazyk změněn na:', langCode)
    },
    handleClickOutside(event) {
      if (!event.target.closest('.dropdown-selected') && !event.target.closest('.lang-selected')) {
        document.getElementById('myDropdown')?.classList.remove('open')
        document.getElementById('mobileDropdown')?.classList.remove('open')
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
  padding: 0 40px;
  height: 9vh;
  min-height: 60px;
  background: var(--bg-header);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
  flex-shrink: 0;
}

.logo {
  text-decoration: none;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 12px;
  transition: var(--transition);
  flex-shrink: 0;
}

.logo:hover {
  opacity: 0.8;
}

.logo-text {
  display: none;
}

.logo-icon {
  color: var(--primary);
  flex-shrink: 0;
}

/* --- MOBILE MENU BUTTON --- */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 5px;
  margin-right: 8px;
}

.mobile-menu-btn span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-main);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* --- SEARCH CONTAINER --- */
.search-container {
  display: flex;
  align-items: center;
  background: var(--bg-input);
  padding: 6px 6px 6px 18px;
  border-radius: 8px;
  flex: 1;
  max-width: 500px;
  margin: 0 30px;
  border: 1px solid transparent;
  transition: var(--transition);
  position: relative;
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
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.95rem;
  color: var(--text-main);
}

.search-input::placeholder {
  color: #999;
}

/* --- MOBILE SEARCH BUTTON --- */
.mobile-search-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-input);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #666;
  transition: var(--transition);
  flex-shrink: 0;
  margin-right: 8px;
}

.mobile-search-btn:hover {
  background: #e8e8e8;
}

/* --- CUSTOM DROPDOWNS --- */
.custom-dropdown {
  position: relative;
  border-left: 1px solid #ddd;
  margin-right: 8px;
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;
}

.dropdown-selected {
  padding: 0 12px;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}

.dropdown-selected::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--text-muted);
  transition: transform 0.2s;
  flex-shrink: 0;
}

.custom-dropdown.open .dropdown-selected::after {
  transform: rotate(180deg);
}

.dropdown-list {
  position: absolute;
  top: 45px;
  left: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  overflow: hidden;
  z-index: 2000;
}

.custom-dropdown.open .dropdown-list {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-option {
  padding: 10px 15px;
  font-size: 0.9rem;
  color: var(--text-main);
  transition: all 0.1s;
  cursor: pointer;
}

.dropdown-option:hover {
  background-color: var(--primary);
  color: #fff;
}

/* --- SEARCH BUTTON GROUP --- */
.search-button-group {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
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
  gap: 6px;
  flex-shrink: 0;
}

.search-button:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.search-button .btn-icon {
  display: none;
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
  flex-shrink: 0;
}

.info-btn,
.lang-selected {
  width: 40px;
  height: 40px;
  background: var(--bg-input);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}

.info-btn:hover,
.lang-selected:hover {
  background: #e8e8e8;
}

.lang-dropdown {
  position: relative;
}

.lang-list {
  position: absolute;
  top: 45px;
  right: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  min-width: 130px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 2000;
  overflow: hidden;
}

.lang-dropdown.open .lang-list {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-option {
  padding: 10px 15px;
  font-size: 0.9rem;
  color: var(--text-main);
  transition: all 0.1s;
  cursor: pointer;
}

.lang-option:hover {
  background-color: var(--primary);
  color: #fff;
}

/* --- MOBILE SEARCH PANEL --- */
.mobile-search-panel {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--bg-header);
  backdrop-filter: blur(12px);
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-search-panel.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-search-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-search-input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: var(--bg-input);
  font-size: 1rem;
  color: var(--text-main);
  outline: none;
  transition: var(--transition);
}

.mobile-search-input:focus {
  background: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(130, 41, 12, 0.1);
}

.mobile-search-options {
  display: flex;
  gap: 12px;
  align-items: center;
}

.mobile-dropdown {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: var(--bg-input);
  margin: 0;
}

.mobile-dropdown .dropdown-selected {
  padding: 14px 16px;
  border-left: none;
}

.mobile-dropdown .dropdown-list {
  top: 100%;
  margin-top: 4px;
}

.mobile-search-submit {
  padding: 14px 28px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}

.mobile-search-submit:active {
  transform: scale(0.98);
}

/* --- MOBILE MENU PANEL --- */
.mobile-menu-panel {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--bg-header);
  backdrop-filter: blur(12px);
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu-panel.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-nav-item {
  padding: 12px 16px;
  background: var(--bg-input);
  border-radius: 8px;
  color: var(--text-main);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.mobile-nav-item:active {
  background: #e8e8e8;
}

.mobile-lang-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.mobile-lang-btn {
  flex: 1;
  min-width: 100px;
  padding: 12px 16px;
  background: var(--bg-input);
  border: 1px solid #ddd;
  border-radius: 8px;
  color: var(--text-main);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.mobile-lang-btn:active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

/* --- TABLET RESPONSIVE --- */
@media (max-width: 1024px) {
  header {
    padding: 0 20px;
  }

  .search-container {
    margin: 0 20px;
    max-width: 400px;
  }

  .dropdown-selected {
    font-size: 0.8rem;
    padding: 0 10px;
  }

  .search-button {
    padding: 10px 18px;
  }
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 768px) {
  header {
    padding: 0 15px;
    height: 60px;
    min-height: 60px;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .logo {
    gap: 8px;
  }

  /* Hide desktop search */
  .desktop-search {
    display: none;
  }

  /* Show mobile search button */
  .mobile-search-btn {
    display: flex;
  }

  /* Hide info button on mobile */
  .info-btn {
    display: none;
  }

  .header-actions {
    gap: 8px;
  }

  .lang-selected {
    width: 40px;
    height: 40px;
  }

  .lang-list {
    right: 0;
  }
}

/* --- SMALL MOBILE --- */
@media (max-width: 480px) {
  header {
    padding: 0 12px;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
  }

  .mobile-menu-btn {
    width: 36px;
    height: 36px;
    margin-right: 6px;
  }

  .mobile-search-btn,
  .lang-selected {
    width: 36px;
    height: 36px;
  }

  .mobile-search-panel,
  .mobile-menu-panel {
    padding: 16px;
  }

  .mobile-search-input {
    padding: 12px 14px;
  }

  .mobile-search-submit {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  .mobile-dropdown .dropdown-selected {
    padding: 12px 14px;
    font-size: 0.85rem;
  }
}

/* --- VERY SMALL SCREENS --- */
@media (max-width: 360px) {
  header {
    padding: 0 10px;
  }

  .mobile-search-options {
    flex-direction: column;
  }

  .mobile-dropdown {
    width: 100%;
  }

  .mobile-search-submit {
    width: 100%;
  }
}
</style>