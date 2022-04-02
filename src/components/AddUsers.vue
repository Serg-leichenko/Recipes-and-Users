<template name="users">
  <div class="pb-3">
    <h1 class="text-center">{{ title }}</h1>

    <div class="d-flex justify-content-center border border-secondary">
      <form class="mb-3 pt-3" @submit="submit">
        <div class="form-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model.trim="form.first_name"
            placeholder="Ім'я"
          />
        </div>
        <div class="form-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="form.last_name"
            placeholder="Прізвище"
          />
        </div>
        <div class="form-group mb-3">
          <div class="d-flex">
            <input
              type="text"
              class="form-control"
              v-model="form.phone"
              placeholder="+38(050)123-45-89"
            />
            <span class="plus ml-2" @click="addFilds1">+</span>
          </div>
        </div>
        <div class="form-group mb-3" v-if="showFilds1">
          <div class="d-flex">
            <input
              type="text"
              class="form-control"
              v-model="form.phone1"
              placeholder="+38(050)123-45-89"
            />
            <span class="plus ml-2" @click="addFilds2">+</span>
          </div>
        </div>
        <div class="form-group mb-3" v-if="showFilds2">
          <input
            type="text"
            class="form-control"
            v-model="form.phone2"
            placeholder="+38(050)123-45-89"
          />
        </div>
        <button class="btn btn-primary mt-3" type="submit">Додати</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useUserForm } from "../compositions/user-form";
export default {
  name: "users",
  props: {
    onAddContact: {
      type: Function,
      require: true,
    },
  },
  setup(props) {
    const title = ref("Список контактів");
    return {
      ...useUserForm(props),
      title,
    };
  },
};
</script>

<style scoped lang="scss">
.plus {
  display: block;
  font-size: 25px;
  font-weight: 800;
  color: green;
  cursor: pointer;
}
</style>
