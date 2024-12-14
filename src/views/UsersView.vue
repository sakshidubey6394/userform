<template>
  <div class="container">
    <div class="header">
      <h2>User List</h2>
      <button @click="addNewUser" class="add-user-btn">Add User</button>
    </div>

    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Education</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in store.users" :key="user.id">
          <td>{{ user.fname }} {{ user.lname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.education }}</td>
          <td class="actions">
            <button @click="viewUser(user.id)" class="view-btn">View</button>
            <button @click="editUser(user.id)" class="edit-btn">Edit</button>
            <button @click="deleteUser(user.id)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
      <tr v-if="store.users.length == 0">
        <td colspan="5" class="empty-list">
          <span>No users found</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import useUsersStore from '@/stores/users'

export default {
  data() {
    return {
      store: useUsersStore(),
    }
  },
  methods: {
    addNewUser() {
      this.$router.push({ name: 'add-user' })
    },
    editUser(id) {
      this.$router.push({ name: 'edit-user', params: { id: id } })
    },
    viewUser(id) {
      this.$router.push({ name: 'profile', params: { id: id } })
    },
    deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        this.store.removeUser(id)
      }
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f9;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  color: #333;
}

.add-user-btn {
  background-color: #57e9a0;
  border: none;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.add-user-btn:hover {
  background-color: #45b787;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.user-table th,
.user-table td {
  padding: 0.8rem;
  text-align: left;
  border: 1px solid #ddd;
}

.user-table th {
  background-color: #f5f5f5;
}

.actions {
  display: flex;
  gap: 1rem;
}

.edit-btn,
.delete-btn,
.view-btn {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-btn {
  background-color: #57e9a0;
}

.delete-btn {
  background-color: #ff5757;
}

.edit-btn:hover {
  background-color: #45b787;
}

.delete-btn:hover {
  background-color: #e04e4e;
}

.view-btn {
  background: blue;
}

.empty-list span {
  font-size: 1rem;
  text-align: center;
  margin: 1rem;
  display: block;
}
</style>
