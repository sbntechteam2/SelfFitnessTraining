<template>
    <div
    :class="warning ? 'bg-red-400' : 'bg-green-400'"
    class="h-20 p-2 m-2 rounded shadow-lg flex flex-col"
  >
    <h1 class="text-5xl text-left text-white pt-2 underline">Dashboard</h1>
    <button class="absolute top-1 right-10" @click="Logout()">Log Out</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const Logout = () => {
    localStorage.removeItem("token")
    router.push("/AdminLogin")
}
</script>