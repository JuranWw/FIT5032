<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class = "myName">
    {{ name }}
  </div>
  
  <a id = "link" href="https://github.com/JuranWw" target="_blank" rel="noopener">
    GitHub URL
  </a>
  
</template>

<style>
.myName {
  font-size: 2.1rem;
  font-weight: 300;
  font-style:oblique;
  width: 20rem;
  margin: 1rem;
  position:absolute;
  top:37rem;
  left: 20rem;
  color: var(--color-heading);
}
#link{
  font-size: 1.3rem;
  font-weight: 250;
  width: 20rem;
  margin: 1rem;
  position:absolute;
  top:40rem;
  left: 20rem;
}
</style>