<template>
  <div class="homepage-container">
    <div class="welcome-card">
      <h1>Welcome to My User Management App</h1>
      <p>Manage your users and their profiles with ease.</p>

      <div class="button-group">
        <router-link to="/users" class="nav-btn">View Users</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.homepage-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f9;
  padding: 2rem;
}

.welcome-card {
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-top: 1rem;
}

.button-group {
  margin-top: 2rem;
}

.nav-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  background-color: #57e9a0;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;
}

.nav-btn:hover {
  background-color: #45b787;
}
</style>
