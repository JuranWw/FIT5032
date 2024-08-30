<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>

        <li v-if="!Check()" class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"> Log in </router-link>
        </li>

        <li v-else class="nav-item" @click="() => Logout()">
          <router-link to="/login" class="nav-link" active-class="active"> Log out </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { Logout, Check } from '../router/index'
</script>
