<template>
<div class="container">
    <h2>Modals</h2>
    <a href="#terms" class="btn orange modal-trigers">Terms & conditions</a>

    <div class="modal" id="terms">
        <div class="modal-content">
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
            </p>

        </div>
        <div class="modal-footer">
            <a href="#" class="modal-close btn orange">
                Agree & Close
            </a>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Modals',
    mounted(){
         $('.modal').modal
    }

}
</script>

<style>

</style>
