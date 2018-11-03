<template>

<div class="container" >
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
            <a href="#" @click.prevent="add('close', $event)" class="modal-close waves-effect waves-green btn-flat" >Agree</a>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Modals',
    methods:{
        add: function (message, event){
            event.stopPropagation();
            //var instance = window.M.Modal.getInstance(this.$refs.modal1)
            console.log(Object.getOwnPropertyNames(this.$refs)[0]);
            //instance.close();
        },
        doThis: function(){
            console.log('--dothis--');
        }
    }


}
</script>

<style>

</style>
