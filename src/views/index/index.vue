<template>
    <div>this is {{username}}</div>
</template>

<script>
import { getCookies } from "@/utils/cookies";
export default {
    data() {
        return {
            username: getCookies("username")
        };
    }
};
</script>

<style>
</style>