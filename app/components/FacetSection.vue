<template>
  <div class="facet-section">
    <div class="facet-header" @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <svg class="chevron" :class="{ rotated: !isOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
    <div v-show="isOpen" class="facet-content">
      <ul class="facet-list">
        <li v-for="(item, index) in items" :key="index" class="facet-item">
          <div class="item-main">
            <input v-if="showCheckboxes" type="checkbox" class="facet-checkbox" />
            <a href="#" class="item-link" :class="{ 'with-checkbox': showCheckboxes }">{{ item.name }}</a>
          </div>
          <span class="item-count">{{ item.count }}</span>
        </li>
      </ul>
      <div v-if="showShowAll" class="show-all">
        <a href="#">Zobrazit vše...</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  title: String,
  items: Array,
  showCheckboxes: {
    type: Boolean,
    default: false
  },
  showShowAll: {
    type: Boolean,
    default: true
  },
  forceOpen: {
    type: Boolean,
    default: true
  }
})

const isOpen = ref(props.forceOpen)

watch(() => props.forceOpen, (newVal) => {
  isOpen.value = newVal
})
</script>

<style scoped>
.facet-section {
  border-bottom: 1px solid var(--border-color, #e5e7eb);
}

.facet-header {
  background: var(--primary, #850000);
  color: #fff;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  transition: background 0.2s;
}

.facet-header:hover {
  background: var(--primary-hover, #600000);
}

.chevron {
  transition: transform 0.2s;
}

.rotated {
  transform: rotate(180deg);
}

.facet-list {
  list-style: none;
  padding: 8px 0;
  margin: 0;
}

.facet-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 16px;
  font-size: 0.9rem;
  gap: 12px;
  transition: background 0.1s;
}

.facet-item:hover {
  background-color: var(--primary-light, rgba(133, 0, 0, 0.05));
}

.item-main {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.facet-checkbox {
  margin-top: 3px;
  accent-color: var(--primary, #850000);
  cursor: pointer;
}

.item-link {
  color: var(--text-main, #1f2937);
  text-decoration: none;
  line-height: 1.4;
  font-weight: 400;
}

.item-link:hover {
  color: var(--primary, #850000);
  text-decoration: underline;
}

.item-count {
  font-weight: 700;
  color: var(--text-muted, #666);
  font-size: 0.8rem;
  white-space: nowrap;
  padding-top: 2px;
}

.show-all {
  padding: 4px 16px 16px 16px;
  text-align: left;
}

.show-all a {
  color: var(--primary, #850000);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.show-all a:hover {
  color: var(--primary-hover, #600000);
  text-decoration: underline;
}
</style>
