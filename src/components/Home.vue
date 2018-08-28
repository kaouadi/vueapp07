<template>


<div class="container">

    <h4> Shadow & depth</h4>
    
    <div class="row">
        <div class="col s2">
            <div></div>

        </div>
        <div class="col s2">
            <div></div>
        </div>
        <div class="col s2">
            <div class="z-depth-1"></div>

        </div>
        <div class="col s2">
            <div class="z-depth-2"></div>

        </div>
        <div class="col s2">
             <div class="z-depth-2"></div>

        </div>
        <div class="col s2">
             <div class="z-depth-1"></div>

        </div>
    </div>
    

</div>
    
</template>

<script>
export default {
    name: 'Home'

}
</script>

<style>
.col > div {
    background: lightblue;
    height: 120px;
}



</style>
