<template>
  <div class="page-layout">
    <Header/>
    <main class="main-content">
      <div class="record-content">
        <div class="top-nav">
          <h1>Detail záznamu</h1>

          <div class="center-controls">
            <button class="arrow-btn" title="Předchozí">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button class="arrow-btn" title="Následující">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div class="record-counter"><strong>#11</strong> z 4312
            </div>
          </div>

          <div class="top-actions">
            <button @click="printPage" class="action-btn" title="Tisknout">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9V2h12v7"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
            </button>
            <router-link class="back-btn" to="/search/results/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              Zpátky do databáze
            </router-link>
          </div>
        </div>

        <!-- Sekce s hlavními metadaty a acordeon vedle -->
        <div class="metadata-section-container">
          <section class="main-metadata">
            <div class="metadata-grid">
              <div class="metadata-row">
                <div class="metadata-label">Původní knihovna</div>
                <div class="metadata-value">knihovna františkánského kláštera (Olomouc)</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Číslo záznamu</div>
                <div class="metadata-value">OlmK 2</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Hlavní autor</div>
                <div class="metadata-value">
                  <a class="metadata-link" href="#">Hugues de Saint-Victor, asi 1096-1141</a>
                </div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Název</div>
                <div class="metadata-value highlight title-value">De sacramentis Christianae fidei ...</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Nakladatelské údaje</div>
                <div class="metadata-value">Strasbourg : [Husner, Georg], 1485</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Rozsah</div>
                <div class="metadata-value">2°</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Tiskař textu</div>
                <div class="metadata-value">Husner, Georg, -1505</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Typ dokumentu</div>
                <div class="metadata-value">prvotisk</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Literatura</div>
                <div class="metadata-value">
                  Katalog rožmberské knihovny, I, fol. 34<br>
                  V. Madsen, Strängnas-Dubletter i Det kongelige Bibliotek i København, in: Nordisk tidskrift för bok- och biblioteksväsen 11/1927, s. 98, num. 46.<br>
                  ISTC ih00535000<br>
                  Catalogus librorum, ab antiquis bibliothecis, Pragensi & Olomuciensi, qvibus olim Regium Gymnasium Gustavianum Strengnesense donaverat gl. m. regina Christina, Stockholm 1765 K 23/407
                </div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Poznámky</div>
                <div class="metadata-value">
                  Exemplář původně patřil augustiniánskému klášteru v Třeboni, za V. Březana převázán a vřazen do rožmberské knihovny, v r. 1616 v majetku olomouckého kanovníka A. Kindlera, který jej v roce 1620 daroval františkánskému klášteru v Olomouci.<br>
                  konvolut OlmK 2 - OlmK 210
                </div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Dřívější majitelé</div>
                <div class="metadata-value">
                  z Rožmberka, Petr Vok, 1539-1611<br>
                  Kindler, Ondřej<br>
                  Thott, Otto, 1703-1785<br>
                  Třeboňský klášter<br>
                  Klášter františkánů (Olomouc, Česko)<br>
                  Kungliga Biblioteket (Švédsko)<br>
                  Domkyrkobibliotek (Strängnäs, Švédsko)
                </div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Místo původního uložení</div>
                <div class="metadata-value">Olomouc (Česko)</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Vazba</div>
                <div class="metadata-value">Celokožená nekvalitně provedená (pokroucená, nedrží dobře blok), při této příležitosti vytvořen rukopisný titulní list (pravděpodobně rukou Václava Březana), zbytky tkanic, supralibros, na hřbetě stopy po Vossiově signatuře.</div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Provenience</div>
                <div class="metadata-value">
                  rukopisný záznam Mon: Třeboň: (pag. 5)<br>
                  iniciálové supralibros PWWDR [=Petr Vok z Rožmberka] (přední desky)<br>
                  exlibris (Collijn, fig. 1) Petr Vok z Rožmberka (předsádka)<br>
                  supralibros (Collijn, fig. 17) Petr Vok z Rožmberka (přední desky)<br>
                  rukopisný záznam D. Andreas Kindler Canonicus Olomucensij hu[n]c libru[m] ad monasteriu[m] S. Bernardini Olomucij dono dedit. Die 17. Maij, An[n]o M. DC. XX ora pro eo. (fol. 1r)<br>
                  rukopisný záznam (přeškrtnutý) Andreas Kindler Canon: Olomu. 1616 (fol. 1r)<br>
                  Aukční číslice 407 - z aukce kapitulní knihovny ve Strängnäs (prázdný list před titulní stranou)<br>
                  X - oborová signatura Královské knihovny ve Stockholmu z let 1650-1651 (hřbet)<br>
                  Kat VII 359 (dle Madsena) Thott - dle katalogu
                </div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Exempláře</div>
                <div class="metadata-value">
                  København : Det Kongelige Bibliotek (Inc. Haun., 2050 fol. Inkunabelsamlingen)<br>
                  København : Det Kongelige Bibliotek (Inc. Haun., 2050 fol. Inkunabelsamlingen)
                </div>
              </div>
              <div class="metadata-row">
                <div class="metadata-label">Trvalý odkaz</div>
                <div class="metadata-value">
                  <a class="external-link" href="https://krigsbyte.lib.cas.cz/Record/OlmK2" target="_blank">
                    https://krigsbyte.lib.cas.cz/Record/OlmK2
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- Image Grid -->
          <!-- Image Grid -->
          <section class="image-grid-section">
            <div class="section-header-small">
              <h3>Obrazová příloha</h3>
              <span class="badge" v-if="images.length > 0">{{ images.length }}</span>
            </div>

            <div class="image-gallery">
              <div v-for="(image, index) in images" :key="index" class="gallery-item"
                   :class="{ 'featured-item': index === 0 }" tabindex="0" @click="openImageModal(index)"
                   @keydown.enter="openImageModal(index)">
                <div class="image-wrapper">
                  <img :src="image.src" :alt="image.alt" loading="lazy"/>
                  <div class="overlay">
                    <span class="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sekce MARC21 -->
        <section class="marc21-data" :class="{ 'is-open': showMarcData }">
          <button class="accordion-trigger" @click="showMarcData = !showMarcData"
                  aria-label="Přepnout viditelnost MARC21 dat">
            <h2>MARC21 Data</h2>
            <svg class="chevron-icon" :class="{ 'rotated': showMarcData }" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <transition name="fade-slide">
            <div v-if="showMarcData" class="table-wrapper">
              <table class="marc21-table">
                <thead>
                <tr>
                  <th>Pole</th>
                  <th>Ind1</th>
                  <th>Ind2</th>
                  <th>Podpole</th>
                  <th>Data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>LEADER</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>00000nam-a2200000-a-4500</td>
                </tr>
                <tr>
                  <td>001</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>OlmK 2</td>
                </tr>
                <tr>
                  <td>006</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>007198bf-8e44-4547-bb72-6b9d1be6c0ce</td>
                </tr>
                <tr>
                  <td>004</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>kvo_swe</td>
                </tr>
                <tr>
                  <td>005</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>20211205141053.6</td>
                </tr>
                <tr>
                  <td>007</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>ta</td>
                </tr>
                <tr>
                  <td>008</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>211250s1485----fr |||||||||||||||||lat||</td>
                </tr>
                <tr>
                  <td>041</td>
                  <td>0</td>
                  <td></td>
                  <td>$a</td>
                  <td>lat</td>
                </tr>
                <tr>
                  <td>044</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>fr</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>Hugues de Saint-Victor,</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$d</td>
                  <td>asi 1096-1141</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>jn19990003738</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>aut</td>
                </tr>
                <tr>
                  <td>210</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>De sacramentis Christianae fidei ...</td>
                </tr>
                <tr>
                  <td>245</td>
                  <td>0</td>
                  <td>0</td>
                  <td>$a</td>
                  <td>De sacramentis Christianae fidei ...</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$h</td>
                  <td>prvotisk</td>
                </tr>
                <tr>
                  <td>260</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Strasbourg :</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$b</td>
                  <td>[Husner, Georg],</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>1485</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>2°</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Exemplář původně patřil augustiniánskému klášteru v Třeboni, za V. Březana převázán a vřazen do rožmberské knihovny, v r. 1616 v majetku olomouckého kanovníka A. Kindlera, který jej v roce 1620 daroval františkánskému klášteru v Olomouci.</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>konvolut OlmK 2 - OlmK 210</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>0</td>
                  <td></td>
                  <td>$a</td>
                  <td>Katalog rožmberské knihovny, I, fol.</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>V. Madsen, Strängnas-Dubletter i Det kongelige Bibliotek i København, in: Nordisk tidskrift för bok- och biblioteksväsen 11/1927,</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>s. 98, num. 46.</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>ISTC</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>ih00535000</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>Catalogus librorum, ab antiquis bibliothecis, Pragensi & Olomuciensi, qvibus olim Regium Gymnasium Gustavianum Strengnesense donaverat gl. m. regina Christina, Stockholm 1765</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>K 23/407</td>
                </tr>
                <tr>
                  <td>535</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>Det Kongelige Bibliotek</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$b</td>
                  <td>København</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$c</td>
                  <td>DK</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$g</td>
                  <td>Inc. Haun., 2050 fol. Inkunabelsamlingen</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Mon: Třeboň:</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>rukopisný záznam</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>pag. 5</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>PWWDR [=Petr Vok z Rožmberka]</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>iniciálové supralibros</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$y</td>
                  <td>1609</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>přední desky</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Petr Vok z Rožmberka</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>exlibris (Collijn, fig. 1)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$y</td>
                  <td>1609</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>předsádka</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Petr Vok z Rožmberka</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>supralibros (Collijn, fig. 17)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>přední desky</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>D. Andreas Kindler Canonicus Olomucensij hu[n]c libru[m] ad monasteriu[m] S. Bernardini Olomucij dono dedit. Die 17. Maij, An[n]o M. DC. XX ora pro eo.</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>rukopisný záznam</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>fol. 1r</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Andreas Kindler Canon: Olomu. 1616</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>rukopisný záznam (přeškrtnutý)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$y</td>
                  <td>1616</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>fol. 1r</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Aukční číslice 407 - z aukce kapitulní knihovny ve Strängnäs</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>prázdný list před titulní stranou</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>X - oborová signatura Královské knihovny ve Stockholmu z let 1650-1651</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$3</td>
                  <td>hřbet</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Thott - dle katalogu</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Kat VII 359 (dle Madsena)</td>
                </tr>
                <tr>
                  <td>563</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>Celokožená nekvalitně provedená (pokroucená, nedrží dobře blok), při této příležitosti vytvořen rukopisný titulní list (pravděpodobně rukou Václava Březana), zbytky tkanic, supralibros, na hřbetě stopy po Vossiově signatuře.</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>0</td>
                  <td>4</td>
                  <td>$a</td>
                  <td>rožmberská knihovna</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>0</td>
                  <td>4</td>
                  <td>$a</td>
                  <td>knihovna františkánského kláštera (Olomouc)</td>
                </tr>
                <tr>
                  <td>651</td>
                  <td></td>
                  <td>4</td>
                  <td>$a</td>
                  <td>Olomouc (Česko)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>ge130299</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>Husner, Georg,</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$d</td>
                  <td>-1505</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>ola364121</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>prt</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>&lt;&lt;z&gt;&gt; Rožmberka, Petr Vok,</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$d</td>
                  <td>1539-1611</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>jn20000728571</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>Kindler, Ondřej</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>1</td>
                  <td></td>
                  <td>$a</td>
                  <td>Thott, Otto,</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$d</td>
                  <td>1703-1785</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>2</td>
                  <td></td>
                  <td>$a</td>
                  <td>Třeboňský klášter</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>mzk2004237519</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>2</td>
                  <td></td>
                  <td>$a</td>
                  <td>Klášter františkánů (Olomouc, Česko)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>mzk2017966506</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>2</td>
                  <td></td>
                  <td>$a</td>
                  <td>Kungliga Biblioteket (Švédsko)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$7</td>
                  <td>kn20020403012</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>2</td>
                  <td></td>
                  <td>$a</td>
                  <td>Domkyrkobibliotek (Strängnäs, Švédsko)</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$4</td>
                  <td>fmo</td>
                </tr>
                <tr>
                  <td>919</td>
                  <td></td>
                  <td></td>
                  <td>$a</td>
                  <td>OlmK 2</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td></td>
                  <td></td>
                  <td>$u</td>
                  <td>https://skk.lib.cas.cz/files/159890</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$y</td>
                  <td>Plný text</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td></td>
                  <td></td>
                  <td>$u</td>
                  <td>https://skk.lib.cas.cz/files/159891</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$y</td>
                  <td>Plný text</td>
                </tr>
                </tbody>
              </table>
            </div>
          </transition>
        </section>

      </div>
    </main>
    <Footer/>

    <!-- Image Modal -->
    <transition name="fade">
      <div v-if="showModal" class="image-modal" @click="closeImageModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeImageModal" aria-label="Zavřít">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="modal-image-container">
            <img v-if="selectedImageIndex !== null" :src="images[selectedImageIndex].src"
                 :alt="images[selectedImageIndex].alt" class="modal-image"/>
          </div>
          <button class="nav-arrow nav-arrow-prev" @click="prevModalImage" aria-label="Předchozí obrázek">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="nav-arrow nav-arrow-next" @click="nextModalImage" aria-label="Další obrázek">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div class="modal-counter" v-if="selectedImageIndex !== null">
            {{ selectedImageIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import Citation from '~/components/Citation.vue'
import {ref} from 'vue'

const showMarcData = ref(false)
const showModal = ref(false)
const selectedImageIndex = ref<number | null>(null)

// Ukázkové obrázky - v reálné aplikaci by se načítaly z API
const images = ref([
  {src: 'https://picsum.photos/300/200?random=1', alt: 'Obrázek 1'},
  {src: 'https://picsum.photos/250/300?random=2', alt: 'Obrázek 2'},
  {src: 'https://picsum.photos/350/200?random=3', alt: 'Obrázek 3'},
  {src: 'https://picsum.photos/280/280?random=4', alt: 'Obrázek 4'},
  {src: 'https://picsum.photos/320/240?random=5', alt: 'Obrázek 5'}
])

// Funkce pro modal s obrázky
const openImageModal = (index: number) => {
  selectedImageIndex.value = index
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  showModal.value = false
  selectedImageIndex.value = null
  document.body.style.overflow = ''
}

const nextModalImage = () => {
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % images.value.length
  }
}

const prevModalImage = () => {
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value = selectedImageIndex.value === 0
        ? images.value.length - 1
        : selectedImageIndex.value - 1
  }
}

// Funkce pro tisk stránky (základní implementace pro prohlížeč)
const printPage = () => {
  window.print();
};

// Placeholder function for the new clickable icon
const handleCounterIconClick = () => {
  alert('Counter icon clicked! Implement desired functionality here.');
  // Example: navigate to a different view, open a modal, etc.
};

useHead({
  title: 'Detail záznamu | Krigsbyte',
  htmlAttrs: {
    lang: 'cs'
  }
})
</script>

<style scoped>
/* --- DESIGN SYSTÉM --- */
:root {
  --bg-body: #ffffff;
}

* {
  box-sizing: border-box;
}

.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #ffffff;
  font-family: 'Inter', sans-serif;
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

.record-content {
  padding: 40px 120px;
}

/* --- TOP NAVIGATION --- */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.center-controls {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
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

.record-counter {
  font-size: 0.95rem;
  color: var(--text-muted, #6b7280);
  margin-left: 8px;
  padding-left: 8px;
  display: flex; /* Added to align items in record-counter */
  align-items: center; /* Added to align items in record-counter */
  gap: 4px; /* Added for spacing between text and button */
}

.record-counter .arrow-btn { /* Specific styling for the button inside record-counter */
  width: 24px; /* Adjust size as needed */
  height: 24px; /* Adjust size as needed */
  margin-left: 4px; /* Space between text and button */
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
  color: var(--text-muted, #666);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 16px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e5e7eb;
  transition: all 0.2s;
}

.back-btn:hover {
  color: var(--primary, #007bff);
  border-color: var(--primary, #007bff);
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

h2 {
  font-size: 1.4rem;
  color: #555;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

/* --- BREADCRUMB NAV --- */
.breadcrumb-nav {
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: #666;
}

.breadcrumb-nav a {
  color: var(--primary, #007bff);
  text-decoration: none;
}

.breadcrumb-nav a:hover {
  text-decoration: underline;
}

.breadcrumb-nav .separator {
  margin: 0 8px;
  color: #ccc;
}

.breadcrumb-nav .current-page {
  color: #333;
  font-weight: 600;
}

/* --- METADATA --- */
.metadata-section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.main-metadata {
  padding: 32px;
  background: #fff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 16px;
  box-shadow: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
}

.section-header {
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary-light, rgba(133, 0, 0, 0.1));
}

.main-metadata h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main, #111);
  letter-spacing: -0.01em;
}

.metadata-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.metadata-row {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.2s;
}

.metadata-row:last-child {
  border-bottom: none;
}

.metadata-row:hover {
  background-color: #fafafa;
}

.metadata-label {
  width: 280px;
  min-width: 280px;
  font-weight: 600;
  color: var(--text-muted, #666);
  font-size: 0.9rem;
  letter-spacing: 0.025em;
  padding-right: 24px;
}

.metadata-value {
  flex: 1;
  font-size: 1rem;
  color: var(--text-main, #333);
  line-height: 1.5;
}

.title-value {
  font-size: 1.15rem;
  color: var(--primary, #850000);
  font-weight: 100;
}

.metadata-link {
  text-decoration: none;
  color: var(--primary, #850000);
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
}

.metadata-link:hover {
  border-bottom-color: var(--primary);
}

.external-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary, #850000);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
}

.external-link:hover {
  text-decoration: underline;
}

.highlight {
  font-weight: 700;
}

/* --- IMAGE GRID & GALLERY --- */
.image-grid-section {
  background: #fff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-header-small {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.section-header-small h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.badge {
  background: #f3f4f6;
  color: #666;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.image-gallery {
  display: grid;
  /* Automatické sloupce, ale s minimální šířkou */
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 140px;
  /* Fixní výška řádku pro zarovnání */
  gap: 12px;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background-color: #f0f0f0;
  /* Placeholder barva */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* První obrázek bude "Featured" - zabere 2x2 dlaždice */
.gallery-item.featured-item {
  grid-column: span 2;
  grid-row: span 2;
}

/* Pokud je jen jeden obrázek, ať je přes celou šířku kontejneru */
.image-gallery:has(.gallery-item:only-child) .gallery-item {
  grid-column: 1 / -1;
  grid-row: auto;
  aspect-ratio: 16/9;
}

.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.gallery-item:focus-visible {
  outline: 2px solid var(--primary, #850000);
  outline-offset: 2px;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Ořízne obrázek, aby vyplnil dlaždici */
  display: block;
  transition: transform 0.5s ease;
}

/* Zoom efekt na obrázek při hoveru */
.gallery-item:hover .image-wrapper img {
  transform: scale(1.08);
}

/* --- OVERLAY EFEKT --- */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.icon-box {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-item:hover .icon-box {
  transform: translateY(0);
}

/* Responsive úpravy pro galerii */
@media (max-width: 500px) {
  .gallery-item.featured-item {
    grid-column: span 1;
    /* Na mobilu zrušíme 2x2 rozložení */
    grid-row: span 2;
    /* Ale necháme ho vyšší */
  }

  .image-gallery {
    grid-template-columns: 1fr 1fr;
    /* 2 sloupce napevno */
  }
}

/* --- MARC21 TABLE ACCORDION --- */
.marc21-data {
  margin-top: 24px;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #f9fafb;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.accordion-trigger:hover {
  background: #f3f4f6;
}

.accordion-trigger h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
  border: none;
  padding: 0;
}

.chevron-icon {
  color: var(--text-muted);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
  max-height: 2000px;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- IMAGE MODAL --- */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  z-index: 1001;
}

.close-btn:hover {
  transform: scale(1.1);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  z-index: 1001;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-arrow-prev {
  left: -70px;
}

.nav-arrow-next {
  right: -70px;
}

.modal-counter {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
}

.table-wrapper {
  padding: 0 24px 24px;
  border: none;
  margin-top: 0;
}

.marc21-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.marc21-table th {
  background-color: #f8f9fa;
  font-weight: 700;
  color: #333;
  border-bottom: 1px solid #ccc;
}

.marc21-table tr:last-child td {
  border-bottom: none;
}

.marc21-table tr:hover {
  background: #f7f7f7;
}

.marc21-table td:first-child {
  font-weight: 600;
  width: 80px;
}

.marc21-table td:nth-child(2),
.marc21-table td:nth-child(3) {
  width: 50px;
  text-align: center;
}

.marc21-table td:nth-child(4) {
  width: 80px;
  color: #666;
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 768px) {
  .metadata-section-container {
    grid-template-columns: 1fr;
  }

  .main-content {
    width: calc(100% - 60px);
    margin: 20px auto;
  }

  .card.record-card {
    padding: 20px;
    border-radius: 16px;
  }

  .main-metadata .metadata-item strong {
    display: block;
    width: 100%;
    margin-bottom: 4px;
  }

  .marc21-table th,
  .marc21-table td {
    padding: 8px;
    font-size: 0.85rem;
  }

  .nav-arrow-prev {
    left: 10px;
  }

  .nav-arrow-next {
    right: 10px;
  }

  .close-btn {
    top: 10px;
  }

  .modal-counter {
    bottom: 10px;
    left: 10px;
    transform: none;
  }
}

/* --- PRINT STYLES --- */
@media print {
  .page-layout {
    background: white;
    min-height: auto;
  }

  .main-content {
    width: 100%;
    margin: 0;
  }

  .card.record-card {
    box-shadow: none;
    padding: 0;
  }

  .breadcrumb-nav,
  .top-actions,
  header,
  footer {
    display: none !important;
  }
}
</style>