<template>
  <div class="citation-dropdown-card" @click.stop>
    <div class="card-header">
      <h2 class="citation-title">Zásady pro užívání</h2>
    </div>

    <div class="citation-content">
      <p>
        Vstupem do databáze Švédská knižní kořist se uživatel zavazuje odkázat na její využití ve všech výstupech. Při citování doporučujeme uvádět zdroj v následující formě:
      </p>

      <div class="citation-group">
        <h3 class="citation-subtitle">a) Databáze dochovaných knih</h3>
        <div class="citation-box">
          Švédská knižní kořist z českých zemí: databáze dochovaných knih [online databáze]. Praha: Knihovna AV ČR, v. v. i., [cit. rrrr-mm-dd]. Dostupné z: https://krigsbyte.lib.cas.cz/
        </div>
      </div>

      <div class="citation-group">
        <h3 class="citation-subtitle">b) Konkrétní záznam v databázi</h3>
        <div class="citation-box">
          Švédská knižní kořist z českých zemí [online databáze], DK 1116. [cit. rrrr-mm-dd]. Dostupné z: https://krigsbyte.lib.cas.cz/Record/DK1116
        </div>
        <p class="citation-note">
          <strong>Pozn.:</strong> Pokud citujete jiný záznam, nahraďte číslo záznamu a URL příslušnými údaji ze záznamu.
        </p>
      </div>
    </div>

    <div class="card-footer">
      <button class="btn-agree" @click="$emit('close')">Souhlasím</button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
.citation-dropdown-card {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 550px;
  max-width: 90vw;
  max-height: 80vh;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2000;
  transform-origin: top right;
  animation: dropdownIn 0.2s ease-out;
}

@keyframes dropdownIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.card-header {
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
  background: #fff;
}

.citation-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.citation-content {
  padding: 24px;
  overflow-y: auto;
  color: #333;
  line-height: 1.6;
  font-size: 0.9rem;
}

.citation-group {
  margin-top: 20px;
}

.citation-subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
}

.citation-box {
  background: #f9fafb;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid #850000;
  font-family: 'Inter', sans-serif;
  margin-bottom: 8px;
  word-break: break-word;
  font-size: 0.85rem;
  color: #4b5563;
}

.citation-note {
  font-size: 0.85rem;
  color: #666;
  margin-top: 6px;
}

.card-footer {
  padding: 16px 24px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
  background: #fff;
}

.btn-agree {
  background: #850000;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-agree:hover {
  background: #600000;
}

@media (max-width: 640px) {
  .citation-dropdown-card {
    width: 300px;
    right: -60px;
  }

  .citation-content {
    padding: 16px;
  }
}
</style>
