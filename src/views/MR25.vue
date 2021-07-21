<template>
    <header>
        <Heads>
            <template v-slot:head>Mel Robbins 25 Quotes</template>
            <template v-slot:body>
                <h3 class="mb-3">That Will Inspire You To Change Your life</h3>
                <ul id="array-rendering">
                    <li v-for="data in myJson" :key="data">
                        {{ data }}
                    </li>
                </ul>
            </template>
        </Heads>
    </header>
</template>

<script>
    import Heads from "../components/Heads.vue";
    import mr25 from "../../public/mr25.json";

    export default {
        name: "Nasa",
        components: {
            Heads,
        },
        data() {
            return {
                myJson: mr25,
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
