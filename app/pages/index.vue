<script setup>
import PageLinkRow from "~/components/PageLinkRow.vue";

const items = [
  { href: "/", placeholder: "coffee" },
  { href: "/", placeholder: "tea" },
  { href: "/", placeholder: "water" },
];
</script>

<template>
  <h1>SciLab-Z</h1>
  <PageLinkRow :page_links="items" />
  <PageLinkRow :page_links="items" />
  <PageLinkRow :page_links="items" />
</template>
