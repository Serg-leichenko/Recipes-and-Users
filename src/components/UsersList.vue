<template>
  <div>
    <div v-if="contacts.length">
      <ol class="list-group list-group-numbered border border-secondary">
        <li
          class="list-group-item d-flex justify-content-between align-items-start list-group-item-dark mb-1"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              {{ contact.first_name }}
              {{ contact.last_name }}
            </div>
            <div class="fw-regular">
              <p>{{ contact.phone }}</p>
              <p>{{ contact.phone1 }}</p>
              <p>{{ contact.phone2 }}</p>
            </div>
          </div>
          <button class="btn btn-danger" @click="$emit('removeContact', index)">
            Видалити
          </button>
        </li>
      </ol>
    </div>
    <div class="border border-secondary p-2" v-else>
      <div class="ms-2 me-auto">
        <div class="fw-bold">Контактів нема</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
    },
  },
};
</script>

<style>
.fw-regular p {
  margin-bottom: 0;
}
</style>
