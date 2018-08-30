<template>

<nav class="nav-vrapper indigo">
    <div class="container">
        <a href="#" class="brand-logo">Site Title</a>
        <a href="#" class="sidenav-trigger">
            <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
        </ul>

    </div>
    

</nav>


    
</template>

<script>
export default {
    name: 'Header',
    created(){

        console.log('--created--')

    },
    mounted(){
        console.log(this.$el);
        console.log(this.$vnode);
    }
}


</script>

<style>

</style>
