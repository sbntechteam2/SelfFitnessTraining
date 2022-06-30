<template>
    <div class="background h-screen">
    <div class="background">
        <h1 class="font-bold text-5xl text-center shadow-xl headertext bg-size-auto"> Submit Success! </h1>
    </div>

    <div class="font-bold text-3xl text-center headertext shadow-xl bg-size-auto">
    {{now}}
    </div> 
    <br/>
    <center>
            <div class="text-2xl font-bold underline contacts">Essential Contact Numbers:</div>
            <div class="contacts"> SBN HQ Ops Room: 6477 2296 </div>
            <div class="contacts"> Activation of Emergency Response: 1733 </div>
            <div class="contacts"> Army Lightning Risk Update (Telegram Chat): https://t.me/ArmyCAT1 </div>
        </center>
        <br/>
    <center>
    <button @click="endSession()"> End Session </button>
    </center>
   
</div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
//import { useGetLogApi } from "../apis/LogsApi";

const route = useRoute();
const router = useRouter();
const id = ref()
//const logs = ref({})
//const { getLog } = useGetLogApi(id);


onBeforeMount(async () => {
    id.value = route.query.id;
});

// onMounted( async () => {
//     logs.value = await getLog()
// })

const endSession = async() => {
    let currentTime = new Date().toLocaleString();
    let submitError = false
    const res = await fetch(`https://sbnttinfobot.xyz/sftapi/submission/`+id.value, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    endtime: currentTime,
                }),
                });
            const data = await res.json();
            router.push("/SessionEnd")
            if (data != "") {
                this.submitError = false;
                router.push("/SessionEnd")
            } else {
                this.submitError = true;
            }
            return submitError;
};
</script>

<style scoped>
.background {
    background-color: rgb(42, 36, 56)
}
.headertext {
    background-color: rgb(42, 36, 56);
    color: rgb(219, 216, 227)
}
.contacts {
    color: rgb(219, 216, 227)
}
</style>