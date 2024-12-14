import { defineStore } from 'pinia'

const useUsersStore = defineStore('users', {
  state: () => ({
    loading: false,
    users: [],
  }),
  actions: {
    addUser(user) {
      this.users.push(user)
    },
    removeUser(id) {
      const index = this.users.findIndex((user) => user.id == id)
      this.users.splice(index, 1)
    },
    updateUser(id, user) {
      const index = this.users.findIndex((user) => user.id == id)
      this.users[index] = user
    },
    findById(id) {
      return this.users.find((user) => user.id == id)
    },
  },
})

export default useUsersStore
