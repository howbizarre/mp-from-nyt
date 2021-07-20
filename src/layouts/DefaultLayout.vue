<template>
    <Nav />

    <header class="container">
        <Heads>
            <template v-slot:head>
                What is the point of all?
            </template>
            <template v-slot:body>
                The point of it all is beyond the grasp of human intelligence. Be humble. Be grateful simply knowing that you, we, all are taking part in this One big story called The Universe. Thankfully, we have the tools to acknowledge that fact in wonder and awe.
            </template>
        </Heads>
    </header>

    <main class="container flex-shrink-0 mb-4">
        <router-view />
    </main>

    <footer class="container footer mb-2 mt-auto">
        <div class="border-top py-3">
            &copy; How
            <Refs />
        </div>
    </footer>
</template>

<script>
    import Nav from "../components/Nav.vue";
    import Refs from "../components/Refs.vue";
    import Heads from "../components/Heads.vue";

    export default {
        name: "DefaultLayout",
        components: {
            Nav,
            Refs,
            Heads,
        },
    };
</script>
