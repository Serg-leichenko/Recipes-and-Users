import { ref, onMounted } from "@vue/composition-api";

export function useUsers() {
  const contacts = ref([]);

  const addContact = (contact) => {
    contacts.value.push(contact);
    saveContacts();
    console.log(contacts);
  };
  const removeContact = (x) => {
    contacts.value.splice(x, 1);
    saveContacts();
  };
  const saveContacts = () => {
    let parsed = JSON.stringify(contacts.value);
    localStorage.setItem("contacts", parsed);
  };

  onMounted(() => {
    if (localStorage.getItem("contacts")) {
      try {
        contacts.value = JSON.parse(localStorage.getItem("contacts"));
      } catch (e) {
        localStorage.removeItem("contacts");
      }
    }
  });

  return {
    contacts,
    addContact,
    removeContact,
    saveContacts,
  };
}
