<template>
  <div clsss="container mt-5">
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
            <button type="submit" class="btn btn-primary me-2" @click="() => validateResident()">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Our logic will go here
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: '',
  reason: '',
  gender: '',
  suburb: 'Clayton'
})

const submittedCards = ref([])

const submitForm = () => {
  validateName(true)
  validatePassword(true)
  validateResident(true)
  validateGender(true)
  validateReason(true)
  if (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.gender &&
    !errors.value.reason &&
    !errors.value.resident
  ) {
    submittedCards.value.push({
      ...formData.value
    })
    clearFormData()
  }
}

// Implement functionality to clear the cards
const clearForm = () => {
  submittedCards.value.pop()
}

const clearFormData = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: '',
    reason: '',
    gender: ''
  }
}

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  resident: null,
  gender: null,
  reason: null
})

const prompt = ref({
  reason: null
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
