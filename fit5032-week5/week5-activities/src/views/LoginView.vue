<template>
  <div v-if="!Check()" clsss="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Log in</h1>

        <form @submit.prevent="submitForm" class="form">
          <div class="row mb-12">
            <div class="col-md-1 col-lg-2"></div>
            <div class="col-md-10 col-lg-8 col-sm-12">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <div class="col-md-1 col-lg-2"></div>

            <div class="col-md-1 col-lg-2"></div>
            <div class="col-md-10 col-lg-8 col-sm-12">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />

              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
            <div class="col-md-1 col-lg-2"></div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-else clsss="container mt-10">
    <h1 class="text-center">You have logged in successfully!</h1>
  </div>
</template>

<script setup>
// Our logic will go here
import { ref } from 'vue'
import Varify from '../router/index'
import { Verify, Check } from '../router/index'

const loginCredentials = {
  username: 'username',
  password: 'Password123!'
}

const formData = ref({
  username: '',
  password: ''
})

const submittedCards = ref([])

const submitForm = () => {
  validateName(true)
  validatePassword(true)
  verifyPassword()
  if (!errors.value.username && !errors.value.password) {
    submittedCards.value.push({
      ...formData.value
    })
    clearFormData()
  }
}

// Implement functionality to clear the cards
const clearFormData = () => {
  formData.value = {
    username: '',
    password: ''
  }
}
const errors = ref({
  username: null,
  password: null
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

const verifyPassword = () => {
  if (
    loginCredentials.username == formData.value.username &&
    loginCredentials.password == formData.value.password
  ) {
    Verify()
    console.log(Check())
  } else {
    alert('Incorrect username or password!')
  }
}
</script>

<style scoped>
/* // Our logic will go here */

.list-group-item {
  padding: 10px;
}

.text-center,
.form {
  margin-top: 50px;
}
</style>
