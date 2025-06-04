<template>
  <div class="box-border size-32 border-0 p-4 break-words h-auto text-center">
    <img class="h-auto max-w-full" src="/folder.svg" alt="image description">
    <p class="text-sm">{{props.item.name}}</p>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    item: {
      id: Number,
      name: String
    }
  })
</script>