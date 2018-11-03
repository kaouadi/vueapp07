<template>

<nav class="nav-vrapper indigo">
    <div class="container">
        <a href="#" class="brand-logo">Site Title</a>
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
            <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
            <li>
                <a href="#" v-on:click="changeTitle">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#" class="btn-floating indigo darken-4 z-depth-0">
                    <i class="material-icons">notifications</i>
                </a>
            </li>
            <li><span class="badge white-text pink new">5</span></li>
        </ul>

    </div>
    

</nav>


    
</template>

<script>
export default {
    name: 'Header',
    created(){

    },
    mounted(){

        var sidenavs = document.querySelectorAll('.sidenav');
        
        for (var i = 0; i < sidenavs.length; i++){
            window.M.Sidenav.init(sidenavs[i]);
        }

    },
    methods:{
      changeTitle: function(){
        console.log('etape 1');
        this.$emit('changeTitle', 'Vue Ninjas');
        console.log('etape 3');
      }
    }
}


</script>

<style>

nav .badge{
    position: relative;
    top: 20px;
    right: 20px;

}

</style>
