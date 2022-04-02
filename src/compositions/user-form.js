import { ref, reactive } from "@vue/composition-api";

export function useUserForm(props) {
  const showFilds1 = ref(false);
  const showFilds2 = ref(false);
  const form = reactive({
    first_name: "",
    last_name: "",
    phone: "",
    phone1: "",
    phone2: "",
  });

  const submit = () => {
    const contact = {
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      phone: form.phone.trim(),
      phone1: form.phone1.trim(),
      phone2: form.phone2.trim(),
    };
    form.first_name =
      form.last_name =
      form.phone =
      form.phone1 =
      form.phone2 =
        "";
    props.onAddContact(contact);
  };

  const addFilds1 = () => {
    showFilds1.value = true;
  };
  const addFilds2 = () => {
    showFilds2.value = true;
  };

  return {
    showFilds1,
    showFilds2,
    form,
    submit,
    addFilds1,
    addFilds2,
  };
}
