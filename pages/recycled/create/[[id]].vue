<template>
  <div class="container mx-auto">
    <form class="flex flex-col gap-10 w-1/2 p-10 border border-orange-300" @submit.prevent="submitForm">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="form.title" placeholder="Title" />
      </div>
      <div>
        <label for="method">Method</label>
        <input type="text" id="method" v-model="form.method" placeholder="Method" />
      </div>
      <p v-if="formError" class="font-bold text-red-600">*** {{ formError }} ***</p>
      <button
        type="submit"
        class="rounded-md bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-100"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const supabase: any = useSupabaseClient();
const route = useRoute();
const router = useRouter();
const form = reactive<{ title: string | undefined; method: string | undefined }>({
  title: "",
  method: "",
});

const formError = ref<string>("");

if (route.params.id) {
  const { data: recycled, error } = await supabase.from("recycled").select("*").eq("id", route.params.id).single();
  if (error) {
    console.log(error);
    router.push("/recycled");
  }
  form.title = recycled.title;
  form.method = recycled.method;
}

const submitForm = async () => {
  if (!form.title || !form.method) {
    formError.value = "Please fill out all fields";
    return;
  }
  //clearing the error
  formError.value = "";

  // Update
  if (route.params.id) {
    try {
      const { data, error } = await supabase
        .from("recycled")
        .update({ title: form.title, method: form.method })
        .eq("id", route.params.id)
        .select();
    } catch (error) {
      console.log(error);
    }
    clearForm();
    router.push("/recycled");
    return;
  }
  // Insert
  try {
    const { data, error } = await supabase
      .from("recycled")
      .insert([{ title: form.title, method: form.method }])
      .select();
  } catch (error) {
    console.log(error);
  }
  router.push("/recycled");
  clearForm();
};
const clearForm = () => {
  form.title = "";
  form.method = "";
};
</script>

<style scoped>
label {
  @apply block text-sm font-medium leading-6 text-gray-900;
}
input {
  @apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
  @apply placeholder:text-gray-400 placeholder:p-5;
}
</style>
