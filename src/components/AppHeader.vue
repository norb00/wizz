<template>
    <header>
        <div class="branding">
            <h1>block-o-meter</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import '../assets/variables';
    @import '../assets/mixins';
    @import '../assets/elements';

    header {
        background: $color-primary;
        color: $color-white;
        padding: s(1) s(.5) s(1.5);
        margin-bottom: s(-2.5);
        border-bottom: 10px solid darken($color-primary, 10);

        .branding {
            max-width: 1400px;
            margin: auto;
        }

        img {
            margin: 0 0 0 s(1);
            height: s(6);
            vertical-align: s(-1);
        }

        h1 {
            display: inline-block;
            font-size: s(3);
            font-weight: 700;
            letter-spacing: -0.07em;
            line-height: 1;
        }
    }
</style>

