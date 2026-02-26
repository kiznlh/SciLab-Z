<script setup lang="ts">
import type { PageLinkRowProps } from "#shared/types/page-link-row-props";

const props = defineProps<PageLinkRowProps>();

const page_link_width = computed(() => 100 / props.page_links.length);
</script>

<template>
  <div class="page-link-row">
    <PageLink
      v-for="link in props.page_links"
      :style="{ width: page_link_width + '%' }"
      :key="link.href"
      :href="link.href"
      :placeholder="link.placeholder"
    />
  </div>
</template>
