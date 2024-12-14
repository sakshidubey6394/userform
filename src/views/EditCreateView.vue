<template>
  <div class="container">
    <div class="form-card">
      <h2>{{ currentUserId ? 'Edit user' : 'Create user' }}</h2>
      <form @submit.prevent="handleSubmit">
        <label for="fname">First name</label>
        <input
          type="text"
          v-model="formData.fname"
          name="fname"
          id="fname"
          placeholder="First name"
          required
        />

        <label for="lname">Last name</label>
        <input
          type="text"
          v-model="formData.lname"
          name="lname"
          id="lname"
          placeholder="Last name"
          required
        />

        <label for="email">Email Address</label>
        <input
          type="email"
          v-model="formData.email"
          name="email"
          id="email"
          placeholder="Email address"
          required
        />

        <label for="gender">Gender</label>
        <select v-model="formData.gender" name="gender" id="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Transgender</option>
        </select>

        <label for="education">Education</label>
        <input
          type="text"
          v-model="formData.education"
          name="education"
          id="education"
          placeholder="Education"
        />

        <label for="avatar">Choose avatar</label>
        <input
          type="file"
          id="avatar"
          @change="handleAvatarChange"
          style="display: none"
          accept="image/*"
          ref="avatarInput"
        />

        <div class="avatar" @click="triggerFileInput">
          <img v-if="formData.avatar" :src="formData.avatar" alt="Avatar" />
          <span v-if="formData.avatar" @click.stop="formData.avatar = ''">&times;</span>
        </div>

        <button type="submit">
          {{ currentUserId ? 'Update' : 'Create' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import useUsersStore from '@/stores/users'

export default {
  data() {
    return {
      formData: {
        fname: '',
        lname: '',
        email: '',
        gender: 'male',
        education: '',
      },
      store: useUsersStore(),
      currentUserId: null,
    }
  },
  methods: {
    handleSubmit() {
      if (!this.formData.fname || !this.formData.lname || !this.formData.email) {
        alert('Please fill in all required fields.')
        return
      }

      const userInfo = {
        id: Math.random().toString(26).substring(2, 9),
        fname: this.formData.fname,
        lname: this.formData.lname,
        email: this.formData.email,
        gender: this.formData.gender,
        education: this.formData.education,
        avatar: this.formData.avatar,
      }

      if (this.currentUserId) {
        this.store.updateUser(this.currentUserId, {
          ...userInfo,
          id: this.formData.id,
        })

        alert('User is updated!')
      } else {
        this.store.addUser(userInfo)
        alert('User is create!')
      }

      this.resetForm()
      this.$router.push({ name: 'users', replace: true })
    },
    handleAvatarChange(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.formData.avatar = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    triggerFileInput() {
      this.$refs.avatarInput.click()
    },
    resetForm() {
      this.formData = {
        fname: '',
        lname: '',
        email: '',
        gender: 'male',
        education: '',
      }
      this.avatarUrl = ''
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.currentUserId = this.$route.params.id
      this.formData = this.store.findById(this.currentUserId)
    }
  },
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0d6d6;
  padding: 1rem;
}

.form-card {
  background-color: #fff;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  max-width: 380px;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 0 1.5rem;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  display: block;
  text-align: left;
  width: 100%;
}

input,
select {
  padding: 0.5rem 0.7rem;
  outline: 0;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  border: 1px solid #b0aeae;
  margin-bottom: 0.8rem;
  border-radius: 5px;
}

input:hover {
  background-color: #f5f5f5;
}

input:active {
  border-color: #57e9a0;
}

.avatar {
  margin: auto;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  background-color: #b0aeae;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
}

.avatar img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar span {
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #57e9a0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 0.7rem 1.2rem;
  background-color: #57e9a0;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

button:hover {
  background-color: #45b787;
}
</style>
