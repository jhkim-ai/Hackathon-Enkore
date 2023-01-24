<template>
    <div>
        <donate-tool-bar></donate-tool-bar>
        <DonateBottom></DonateBottom>
    </div>
</template>
  
<script>
import DonateToolBar from '@/components/DonateToolBar.vue'
import DonateBottom from '@/components/DonateBottom.vue'
export default {
    components: { DonateToolBar , DonateBottom },
}
</script>
  
<style scoped>
.vue-divider {
    display: flex;
    width: 60%;
    justify-content: center;
    margin: auto;
}
.outer-line {
    margin: 30px auto;
    width: 60%;
}
</style>