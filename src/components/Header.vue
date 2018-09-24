<template>

<nav class="nav-vrapper indigo">
    <div class="container">
        <a href="#" class="brand-logo">Site Title</a>
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
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
