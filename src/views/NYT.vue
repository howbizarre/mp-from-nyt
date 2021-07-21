<template>
    <header>
        <Heads>
            <template v-slot:head>Most Popular from NYT</template>
            <template v-slot:body>
                <h3 v-if="loading">Loading...</h3>
                <div v-if="results">
                    <ul id="array-rendering">
                        <li v-for="result in results" :key="result.id">
                            <a :href="result.url" :title="`New Yourk Times article: '${result.title}'`">
                                {{ result.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </template>
        </Heads>
    </header>
</template>

<script>
    import { ref, onMounted } from "vue";
    import Heads from "../components/Heads.vue";

    export default {
        name: "Nasa",
        components: {
            Heads,
        },
        setup() {
            let loading = ref(false);
            let results = ref(null);

            loading.value = true;

            onMounted(() => {
                (async function() {
                    const response = await fetch("/rsp", {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        method: "GET",
                    });
                    const data = await response.json();

                    loading.value = false;
                    results.value = data;
                })();
            });

            return {
                loading,
                results,
            };
        },
    };
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
    }

    ul li {
        margin-bottom: 1rem;
    }
</style>
