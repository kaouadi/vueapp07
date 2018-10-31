<template>

<div class="container">
    <h2>Modals</h2>

    <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn orange modal-trigger" href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal" ref="modal1">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
            </p>
        </div>
        <div class="modal-footer">
            <a href="#" @click.prevent="add" class="modal-close waves-effect waves-green btn-flat" ref="modal1">Agree</a>
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
    },
    methods:{
        add(e){
            //e.stopPropagation();
        }
    }


}
</script>

<style>

</style>
