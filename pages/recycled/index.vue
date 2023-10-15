<template>
  <div class="container mx-auto my-10">
    <div class="flex flex-row items-center justify-between">
      <h1 class="text-3xl font-bold my-4">Recycled</h1>
      <a href="/recycled/create"><button class="orange-btn">Create new method</button></a>
    </div>

    <div class="flex flex-col">
      <h2 class="text-xl font-semibold">Sort By:</h2>
      <div class="flex gap-6">
        <button class="rec-btn" @click="orderBy = 'created_at'">Time Created</button>
        <button class="rec-btn" @click="orderBy = 'title'">title</button>
      </div>
    </div>

    <Loader v-if="loading" />
    <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-10 my-10">
      <div
        v-for="action in recycledArr"
        :key="action.id"
        class="relative flex flex-col gap-5 border rounded-lg border-black drop-shadow p-5 text-center"
      >
        <div class="absolute top-0 right-0 py-2 px-3 bg-purple-400 rounded-lg translate-x-1/2 -translate-y-1/2">
          <p class="text-xs font-bold text-white">{{ action.id }}</p>
        </div>

        <h2 class="capitalize text-lg font-bold">{{ action.title }}</h2>
        <p>{{ action.method }}</p>
        <div class="flex items-center justify-center gap-5">
          <button @click="deleteMethod(action.id)" class="delete-btn">Delete</button>
          <nuxt-link :href="`/recycled/create/${action.id}`"> <button class="edit-btn">Edit</button></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const loading = ref<boolean>(true);
const recycledArr = ref<any>([]);
const orderBy = ref<string>("id");

onMounted(() => {
  getRecycledRecords();
});

watch(orderBy, () => {
  getRecycledRecords();
});

const getRecycledRecords = async () => {
  loading.value = true;
  let { data: recycled, error } = await supabase.from("recycled").select("*").order(orderBy.value, { ascending: true });

  if (error) {
    console.log(error);
    loading.value = false;
  }
  recycledArr.value = recycled;
  loading.value = false;
};

const deleteMethod = async (id: number) => {
  try {
    const { error } = await supabase.from("recycled").delete().eq("id", id);
    if (!error) {
      recycledArr.value = recycledArr.value.filter((action: any) => action.id !== id);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.delete-btn {
  @apply rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-100;
}
.edit-btn {
  @apply rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-100;
}

.rec-btn {
  @apply rounded-md bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-100;
}
</style>
