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
                    <li><a href="#photos">Photos</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a href="#" class="tooltiped btn-floating btn-small indigo darken-4" data-tooltip="this is instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <ul class="sidenav grey lighten-2" id="mobile-menu">
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <section class="container section scrollspy" id="photos">
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
    <div class="parallax-container">
        <div class="parallax">
            <img src="../assets/img/street.jpg" alt="" class="responsive-img">

        </div>

    </div>

    <section class="container section scrollspy" id="services">
        <div class="row">
            <div class="col s12 l4">
                <h2 class="indigo-text text-darken-4">what I do..</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </p>
            </div>
            <div class="col s12 l6 offset-l2">
                <ul class="tabs">
                    <li class="tab col s6">
                        <a href="#photography" class="indigo-text text-darken-4 active">Photography</a>
                    </li>
                    <li class="tab col s6">
                        <a href="#editing" class="indigo-text text-darken-4">Editing</a>
                    </li>
                </ul>
                <div class="col s12" id="photography">
                    <p class="flow-text indigo-text text-darken-4">PHOTOGRAPHY</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </div>
                <div class="col s12" id="editing">
                    <p class="flow-text indigo-text text-darken-4">EDITING</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
            </div>

            </div>
            
        </div>
    
    </section>

    <div class="parallax-container">
        <div class="parallax">
            <img src="../assets/img/stars.jpg" alt="" class="responsive-img">

        </div>

    </div>

    <div class="container">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>

    </div>

    <section class="section container scrollspy" id="contact">

        <div class="row">
            <div class="col s12 l5">

                <h2 class="indigo-text text-darken-4">Get in touch</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </p>
            </div>
            <div class="col s12 l5 offset-l2">
                <form action="">

                    <div class="input-field">
                        <i class="material-icons prefix">email</i>
                        <input type="email" id="email"/>
                        <label for="email">Your email</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">message</i>
                        <textarea class="materialize-textarea" id="message"/>
                        <label for="message">Your message</label>
                    </div>
                     <div class="input-field">
                        <input type="text" id="date" class="datepicker"/>
                        <label for="date">Choose a date that you need..</label>
                    </div>
                    <div class="input-field">
                        <p>Service required...</p>
                        <p>
                            <label>
                            <input type="checkbox">
                            <span>Photography</span>
                            </label>
                        </p>
                    </div>
                    <div class="input-field center">
                        <button class="btn">submit</button>
                    </div>



                </form>
            </div>
        </div>

    </section>

    <footer class="page-footer grey darken-3">
        <div class="container">
            <div class="row">
                <div class="col s12 l6">
                    <h5>About me</h5>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>

                </div>
                <div class="col s12 l4 offset-l2">
                    <h5>Connect</h5>
                    <ul>
                        <li class="grey-text text-lighten-3">Facebook</li>
                        <li class="grey-text text-lighten-3">Twitter</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="footer-copyright grey darken-4">
            <div class="container center-align">&copy; 2018</div>
        </div>
    </footer>

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
        
        for (var j = 0; j < materialBoxeds.length; j++){
            window.M.Materialbox.init(materialBoxeds[j]);
        }

        var parallaxes = document.querySelectorAll('.parallax');
        
        for (var k = 0; k < parallaxes.length; k++){
            window.M.Parallax.init(parallaxes[k]);
        }

        var tabs = document.querySelectorAll('.tabs');
        
        for (var x = 0; x < tabs.length; x++){
            window.M.Tabs.init(tabs[x]);
        }

        var datepickers = document.querySelectorAll('.datepicker');
        
        for (var y = 0; y < datepickers.length; y++){
            window.M.Datepicker.init(datepickers[y], {disableWeekends: true});
        }

        var tooltipeds = document.querySelectorAll('.tooltiped');
        
        for (var z = 0; z < tooltipeds.length; z++){
            window.M.Tooltip.init(tooltipeds[z]);
        }

        var scrollspys = document.querySelectorAll('.scrollspy');
        
        for (var w = 0; w < scrollspys.length; w++){
            window.M.ScrollSpy.init(scrollspys[w]);
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
.section{
    padding-top: 4vw;
    padding-bottom: 4vw;
}
.tabs .indicator{
    background-color: #1a237e;

}
.tabs .tab a:focus, .tabs .tab a:focus.active{
    background: transparent;
}
@media screen and (max-width: 670px){
    header{
        min-height: 500px;
    }
}

</style>
