<template name="users">
  <div class="container">
    <AddUsers :onAddContact="addContact" />
    <UserList @removeContact="removeContact" :contacts="contacts" />
  </div>
</template>

<script>
import AddUsers from "@/components/AddUsers.vue";
import UserList from "../components/UsersList.vue";
import { useUsers } from "../compositions/users";

export default {
  name: "Users",
  components: {
    AddUsers,
    UserList,
  },
  setup() {
    return {
      ...useUsers(),
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
}
</style>
