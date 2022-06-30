<template>
    <center>
        <div class="text-xl font-bold underline">Logs List</div>
    </center>
    <center>
        <table class="min-w-full leading-normal">
            <thead>
                <tr>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Rank:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Name:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Mobile:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Unit:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Cluster/Coy:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Subunit:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Camp Of SFT:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Date:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Starttime:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Est. Endtime:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Endtime:
                    </th>
                    <th
                    class="
                        px-5
                        py-3
                        border-b-2 border-gray-200
                        bg-gray-100
                        text-center text-xs
                        font-semibold
                        text-gray-600
                        uppercase
                        tracking-wider
                    "
                    >
                    Superior Informed:
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, id) in props.logs" :key="id">
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.rank }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.name }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.mobile }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.unit }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.cluster }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.subunit }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.camp }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.date }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.starttime }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.estimatedendtime }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.endtime }}
                    </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ item.superior }}
                    </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  logs: Object,
});
</script>