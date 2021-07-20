<template>
    <div class="container sticky-top bg-white">
        <nav class="navbar navbar-expand-lg navbar-light border-bottom">
            <router-link :to="routes[0].path" class="navbar-brand d-flex align-items-center text-dark text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 261.76 226.69">
                    <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" />
                    <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e" />
                </svg>
                <sup><small class="badge rounded-pill bg-info me-1">3</small></sup>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 118 94" role="img">
                    <title>Bootstrap</title>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                        fill="#6f42c1"
                    ></path>
                </svg>
                <sup><small class="badge rounded-pill bg-info me-1">5</small></sup>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 300 300">
                    <clipPath id="clip_wraped_ring">
                        <path id="wraped_ring" d="M209.8 12.46C285.71 45.46 320.54 133.89 287.54 209.8C254.53 285.71 166.1 320.54 90.19 287.54C14.28 254.53 -20.55 166.1 12.46 90.19C45.47 14.28 133.89 -20.55 209.8 12.46Z" opacity="1" fill="#a0b1c2" fill-opacity="0.5"></path>
                    </clipPath>
                    <use clip-path="url(#clip_wraped_ring)" xlink:href="#wraped_ring" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="40" stroke-opacity="1"></use>
                    <clipPath id="clip_fire">
                        <path id="fire" d="M201.82 30.81C235.5 103.82 245.73 155.5 232.53 185.87C212.72 231.42 159.66 252.32 114.12 232.52C68.57 212.72 47.67 159.66 67.48 114.11C80.68 83.74 125.46 55.97 201.82 30.81Z" opacity="1" fill="#ffff00" fill-opacity="1"></path>
                    </clipPath>
                    <use clip-path="url(#clip_fire)" xlink:href="#fire" opacity="1" fill-opacity="0" stroke="#990000" stroke-width="40" stroke-opacity="1"></use>
                    <path id="match_head" d="M161.96 122.49C177.14 129.09 184.11 146.78 177.51 161.96C170.91 177.14 153.22 184.11 138.04 177.5C122.86 170.9 115.89 153.22 122.49 138.04C129.09 122.85 146.78 115.89 161.96 122.49Z"></path>
                    <use xlink:href="#match_head" opacity="1" fill="#000000" fill-opacity="1"></use>
                    <path id="match_body" d="M126.45 156.16L140.09 170.79L52.34 252.61L38.7 237.99L126.45 156.16Z"></path>
                    <use xlink:href="#match_body" opacity="1" fill="#000000" fill-opacity="1"></use>
                </svg>
                <sup><small class="badge rounded-pill bg-info me-1">1</small></sup>
            </router-link>
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item text-uppercase" v-for="route in routes" :key="route.path">
                        <router-link :to="route.path" class="nav-link" :title="route.name" :class="{ active: isActive(route.path) }">
                            <i class="bi bi-house-fill" v-if="route.path === '/'"></i>
                            {{ route.path !== "/" ? route.name : "" }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { computed } from "vue";
    import { useRouter } from "vue-router";
    import { routes as rts } from "../router";

    export default {
        setup() {
            const routes = rts;

            const router = useRouter();
            const activeRoute = computed(() => router.currentRoute.value.path);
            const isActive = (path) => path === activeRoute.value;

            return { isActive, routes };
        },
    };
</script>

<style lang="scss" scoped>
    $blc: #000;
    $lblc: rgba($blc, 0.65);

    a {
        text-decoration: none;
        color: $lblc;
        transition: all 0.25s;
    }

    ul {
        list-style: none;
    }
</style>
