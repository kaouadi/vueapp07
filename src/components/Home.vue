<template>


<div class="container">

    <h4>Grids</h4>

    <div class="row">
        <div class="col s3">content</div>
        <div class="col s3">content</div>
        <div class="col s3">content</div>
        <div class="col s3">content</div>
    </div>

    <div class="row">
        <div class="col s3 m6">content</div>
        <div class="col s3 m6">content</div>
        <div class="col s3 m6">content</div>
        <div class="col s3 m6">content</div>
    </div>

    <div class="row">
        <div class="col s6">content</div>
        <div class="col s6">content</div>
        <div class="col s6">content</div>
        <div class="col s6">content</div>
    </div>

    <div class="row">
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
        <div class="col s1">content</div>
    </div>

    <div class="row">
        <div class="col m3">content</div>
        <div class="col m3">content</div>
        <div class="col m3">content</div>
        <div class="col m3">content</div>
    </div>

        <!-- Page Layout here -->
    <div class="row">

      <div class="col s12 m4 l3"> <!-- Note that "m4 l3" was added -->
        <!-- Grey navigation panel

              This content will be:
          3-columns-wide on large screens,
          4-columns-wide on medium screens,
          12-columns-wide on small screens  -->
          A

      </div>

      <div class="col s12 m8 l9"> <!-- Note that "m8 l9" was added -->
        <!-- Teal page content

              This content will be:
          9-columns-wide on large screens,
          8-columns-wide on medium screens,
          12-columns-wide on small screens  -->
          B

      </div>

  </div>

  <div class="row">
    <div class="col s12"><p>s12</p></div>
    <div class="col s12 m4 l2"><p>s12 m4</p></div>
    <div class="col s12 m4 l8"><p>s12 m4</p></div>
    <div class="col s12 m4 l2"><p>s12 m4</p></div>
  </div>
  <div class="row">
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
   </div>

    <div class="row">
      <div class="col s1">1</div>
      <div class="col s1">2</div>
      <div class="col s1">3</div>
      <div class="col s1">4</div>
      <div class="col s1">5</div>
      <div class="col s1">6</div>
      <div class="col s1">7</div>
      <div class="col s1">8</div>
      <div class="col s1">9</div>
      <div class="col s1">10</div>
      <div class="col s1">11</div>
      <div class="col s1">12</div>
    </div>
    <div class="row">
      <div class="col s12">This div is 12-columns wide on all screen sizes</div>
      <div class="col s6">6-columns (one-half)</div>
      <div class="col s6">6-columns (one-half)</div>
    </div>
      <div class="row">
      <div class="col s12"><span class="flow-text">This div is 12-columns wide on all screen sizes</span></div>
      <div class="col s6 offset-s6"><span class="flow-text">6-columns (offset-by-6)</span></div>
    </div>
    
</div>
    
</template>

<script>
export default {
    name: 'Home'

}
</script>

<style>
.row > div{
    padding: 10px;
    background: #ddd;
    border: 1px solid #fff;
    line-height: 60px;

}
.row{
    margin: 40px auto;
}

</style>
