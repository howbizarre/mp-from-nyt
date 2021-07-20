<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold"><slot name="head"></slot></h1>
            <p class="col-md-8 fs-4"><slot name="body"></slot></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Heads",
    };
</script>
