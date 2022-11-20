<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div>
        <div class="container">
      <div class="row">
        <div class="col-1">
          <div class="img1"><img src="../../assets/cleaning.png" alt=""></div>
        </div>

        <div class="col-11">
          <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
           
            <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/">Home</RouterLink>
      
            </li>
            <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/about">About</RouterLink>
      
            </li>
            <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" aria-current="page" to="/services">Services</RouterLink>
      
            </li>


            <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/offers">Offers</RouterLink>
      
            </li>
            <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/pricing">Pricing</RouterLink>
      
            </li>
            <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/reviews">Reviews</RouterLink>
      
            </li>
            <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/contact">Contact</RouterLink>
      
            </li>

          </ul>


        </div>

      </div>
    </div>
    </div>
</template>

<style>
.active{
  background-color: blue;
}
</style>