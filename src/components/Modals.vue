<template>

<div class="container">
    <h2>Modals</h2>

    <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn orange modal-trigger" href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
            </p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Modals',
    mounted(){
        var modals = document.querySelectorAll('.modal');
        
        for (var i = 0; i < modals.length; i++){
            window.M.Modal.init(modals[i]);
        }
    }

}
</script>

<style>

</style>
