<script setup lang="ts">
import type { PageLinkProps } from "#shared/types/page-link-props";

const props = defineProps<PageLinkProps>();
</script>

<template>
  <a class="page-link" :href="props.href">{{ props.placeholder }}</a>
</template>
