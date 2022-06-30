<template>
    <dashboard class="w-full"></dashboard>
    <item-logs-list :logs="logs"></item-logs-list>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useGetAllLogsApi } from "../apis/LogsApi";
import ItemLogsList from "../Item/ItemLogsList.vue";
import Dashboard from "../Item/Dashboard.vue";
const router = useRouter();
const { getAllLogs } = useGetAllLogsApi();
const logs = ref()
// [{rank:"COL", name:"Mattheus", mobile:"999", unit:"SBN", cluster:"HQ", subunit:"S1", camp:"Nee Soon", date:"01/01/2021", starttime:"0900", estimatedendtime:"1100", endtime:"1030", superior:"2LT Danial"}]

onBeforeMount(async ()  => {
    if(!localStorage.getItem("token")) {
       router.push("/AdminLogin"); 
    }  
    logs.value =  await getAllLogs()
});

</script> 

<style scoped>

</style>
