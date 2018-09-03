<template>

<div>

    <header>

        <nav class="nav-wrapper transparent">
            <div class="container">
                <a href="" class="brand-logo">Photo Ninja</a>
                <a href="#" class="sidenav-trigger" data-target="mobile-menu">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul class="sidenav grey lighten-2" id="mobile-menu">
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <section class="container section" id="photo's">
        <div class="row">
            <div class="col s12 l4">
                <img src="../assets/img/portrait.jpg" alt="" class="responsive-img materialboxed">
            </div>
            <div class="col s12 l6 offset-l1">
                <h2 class="indigo-text text-darken-4">Portrait</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            
        </div>
        <div class="row">
            <div class="col s12 l4 push-l7 offset-l1">
                <img src="../assets/img/city.jpg" alt="" class="responsive-img materialboxed">
            </div>
            <div class="col s12 l6 pull-l5 right-align offset-l1">
                <h2 class="indigo-text text-darken-4">Cityscapes</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            
        </div>
        <div class="row">
            <div class="col s12 l4">
                <img src="../assets/img/nature.jpg" alt="" class="responsive-img materialboxed">
            </div>
            <div class="col s12 l6 offset-l1">
                <h2 class="indigo-text text-darken-4">Nature</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            
        </div>
    </section>

</div>



    
</template>

<script>
export default {
    name: 'Welcome',
    mounted(){

        var sidenavs = document.querySelectorAll('.sidenav');
        
        for (var i = 0; i < sidenavs.length; i++){
            window.M.Sidenav.init(sidenavs[i]);
        }

        var materialBoxeds = document.querySelectorAll('.materialboxed');
        
        for (var i = 0; i < materialBoxeds.length; i++){
            window.M.Materialbox.init(materialBoxeds[i]);
        }

    }

}
</script>

<style>
header{
    background: url(../assets/img/man.jpg);
    background-size: cover;
    background-position: center;
    min-height: 1000px;
}
@media screen and (max-width: 670px){
    header{
        min-height: 500px;
    }
}

</style>
