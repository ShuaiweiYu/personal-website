<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
const { pdf, pages, info } = usePDF("@/assets/pdfs/CV_en.pdf")
console.log(`Document has ${pages} pages`)
console.log(`Document info: ${info}`)
</script>

<template>
  <VuePDF :pdf="pdf" />
</template>

<style scoped>

</style>