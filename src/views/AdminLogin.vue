<template>
  <div class="flex items-center bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Sign in
          </h1>
        </div>
        <div class="m-7">
          <form @submit.prevent="onSubmit">
            <div class="mb-6">
              <label
                for="username"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Username</label
              >
              <input
                type="text"
                name="username"
                v-model="username"
                placeholder="Your Username"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <div class="flex justify-between mb-2">
                <label
                  for="password"
                  class="text-sm text-gray-600 dark:text-gray-400"
                  >Password</label
                >
              </div>
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Your Password"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <button @click="login()"
                type="submit"
                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <div class="mb-6" v-if="loginError">
              <p class="text-red-400">Invalid Username or Password!</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLoginApi } from "../apis/LoginApi";
const username = ref("");
const password = ref("");
const loginError = ref(false);
const router = useRouter();
const { loginUser } = useLoginApi(username, password, router);

const login = async () => {
  const { token } = await loginUser();
  if (token) {
    localStorage.setItem("token", token);
    router.push("/AdminLogs")
  }
};
</script>

<style>
</style>