<template>
  <div class="facet-section">
    <div class="facet-header" @click="isOpen = !isOpen">
      <span>{{ formatName(title) }}</span>
      <svg class="chevron" :class="{ rotated: !isOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
    <div v-show="isOpen" class="facet-content">
      <ul v-if="!isBadges" class="facet-list">
        <li v-for="(item, index) in items" :key="index" class="facet-item">
          <div class="item-main">
            <input v-if="showCheckboxes" type="checkbox" class="facet-checkbox" />
            <a href="#" class="item-link" :class="{ 'with-checkbox': showCheckboxes }">{{ formatName(item.name) }}</a>
          </div>
          <span class="item-count">{{ item.count }}</span>
        </li>
      </ul>
      <div v-else class="badges-list">
        <div v-for="(item, index) in items" :key="index" class="badge-item">
          <input type="checkbox" :id="`badge-${title}-${index}`" class="badge-checkbox" />
          <label :for="`badge-${title}-${index}`" class="badge-label">
            <span class="badge-name">{{ formatName(item.name) }}</span>
            <span class="badge-count">{{ item.count }}</span>
          </label>
        </div>
      </div>
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
  },
  isBadges: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.forceOpen)

watch(() => props.forceOpen, (newVal) => {
  isOpen.value = newVal
})

const formatName = (name) => {
  if (!name) return ''
  const lower = name.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}
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
  font-size: 0.9rem;
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
  font-size: 0.95rem;
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

/* Badges Layout */
.badges-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
}

.badge-item {
  position: relative;
}

.badge-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.badge-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  color: var(--text-main, #374151);
}

.badge-item:hover .badge-label {
  background: #e5e7eb;
  border-color: #d1d5db;
}

.badge-checkbox:checked+.badge-label {
  background: var(--primary-light, rgba(133, 0, 0, 0.05));
  border-color: var(--primary, #850000);
  color: var(--primary, #850000);
}

.badge-count {
  font-weight: 600;
  opacity: 0.7;
  font-size: 0.75rem;
}

.badge-checkbox:checked+.badge-label .badge-count {
  color: var(--primary, #850000);
  opacity: 1;
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
