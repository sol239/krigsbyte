<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style>
/* Global CSS Variables */
:root {
  --primary: #850000;
  --primary-hover: #600000;
  --primary-light: rgba(133, 0, 0, 0.05);
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --border-color: #e5e7eb;
  --bg-body: #f9fafb;
  --bg-card: #ffffff;
  --bg-header: #fff;
  --bg-footer: #f9fafb;
  --bg-input: #f3f4f6;
  --radius: 12px;
  --shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --focus-ring: 0 0 0 3px rgba(133, 0, 0, 0.15);
  --transition: all 0.2s;
}

body {
  background-color: var(--bg-body);
  font-family: 'Inter', sans-serif;
  color: var(--text-main);
}

/* Global styles for layout */
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
