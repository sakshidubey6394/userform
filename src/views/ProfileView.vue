<template>
  <div class="container">
    <div class="profile-card">
      <div class="avatar">
        <img :src="user.avatar || defaultAvatar" alt="Avatar" />
      </div>

      <div class="user-info">
        <h2>{{ user.fname }} {{ user.lname }}</h2>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>Education:</strong> {{ user.education || 'Not provided' }}</p>
      </div>

      <button @click="editProfile" class="edit-btn">Edit Profile</button>
    </div>
  </div>
</template>

<script>
import useUsersStore from '@/stores/users'

export default {
  data() {
    return {
      user: {},
      defaultAvatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      store: useUsersStore(),
    }
  },
  methods: {
    editProfile() {
      this.$router.push({ name: 'edit-user', params: { id: this.$route.params.id } })
    },
  },
  mounted() {
    this.user = this.store.findById(this.$route.params.id)
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f9;
}

.profile-card {
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  text-align: center;
  margin-bottom: 2rem;
}

.user-info h2 {
  font-size: 1.8rem;
  color: #333;
}

.user-info p {
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
}

.edit-btn {
  padding: 0.7rem 1.2rem;
  background-color: #57e9a0;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-btn:hover {
  background-color: #45b787;
}
</style>
