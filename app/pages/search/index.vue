<template>
  <div class="page-layout">
    <Header />
    <HomeContent />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import HomeContent from '~/components/homeContent.vue'
import Footer from '~/components/footer.vue'

useHead({
  title: 'Krigsbyte | Final Design',
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
  --bg-body: #f2f2f2;
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
</style>