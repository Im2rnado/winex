<script setup>
import InfoItem from "./InfoItem.vue";
import Person from "./Person.vue";

import Moustafa from "@/assets/image/moustafa.jpeg";
</script>

<template>
   <main class="App-About">
      <section class="Section Section-1">
         <div class="Overlay"></div>
         <h1 class="Heading">We deliver goods to where they need to be.</h1>
      </section>
      <Suspense>
         <section class="Section Section-2">
            <InfoItem heading="Who we are" image="info"
               color="linear-gradient(110.76deg, #204B57 0.54%, #053957 66.49%)">
               We’re a next-generation logistics company that takes your business further, faster. From door-to-door delivery to same-day and next-day shipping, transportation, fulfillment, and warehousing, we handle it all. 
            </InfoItem>
            <InfoItem heading="What we do" image="box" color=" #125E8A">
               Led by a dedicated team of logistics specialists, we consistently deliver innovative, cost-effective, and tailor-made shipping and transport solutions.
            </InfoItem>
            <InfoItem heading="What is our mission?" image="flag" color="#36578B">
               To provide innovative, agile, and customer-centric logistics solutions that empower businesses to grow and thrive 
               in a rapidly changing world.
            </InfoItem>
            <InfoItem heading="What is our vision?" image="world"
               color="linear-gradient(222.98deg, #8A716A 28.01%, #6C5A55 100%)">
               To become the leading 3PL provider in the industry, recognized for our commitment to innovation, agility, and customer 
               satisfaction.
            </InfoItem>
         </section>
      </Suspense>
      <section class="Section Section-3">
         <div class="Overlay"></div>
         <h1 class="Heading">Meet Our Management</h1>
         <div class="Profile-Grid">
            <Person :image="Moustafa">
               Nabil Akef
               <template #title> Chief Executive Officer </template>
            </Person>
         </div>
      </section>
   </main>
</template>

<style scoped>
.Section-1 {
   position: relative;
   background-image: url(@/assets/image/Temple-Background.png);
   display: flex;
   justify-content: end;
   align-items: center;
}
.Overlay {
   position: absolute;
   z-index: 0;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
}
.Section-1 .Overlay {
   background-image: linear-gradient(0deg, white, transparent);
}
.Heading {
   position: relative;
   z-index: 1;
   text-align: end;
   width: 70%;
}
.Section-2 {
   display: grid;
   grid: auto auto/ 50% 50%;
   gap: 33px;
   place-items: center;
   height: fit-content;
   max-height: fit-content;
   margin-bottom: 45px;
}
.Section-3 {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: fit-content;
   max-height: fit-content;
   background-image: url(@/assets/image/Temple-Background.png);
}
.Section-3 .Heading {
   text-align: center;
   margin-top: 45px;
}
.Profile-Grid {
   display: grid;
   grid: repeat(2, auto) / repeat(1, auto);
   place-items: center;
   width: 100%;
   margin-block: 100px;
}
.Section-3 .Overlay {
   background-image: linear-gradient(180deg, white, transparent);
}
@media (max-width: 768px) {
   .Section-2 {
      display: flex;
      flex-direction: column;
      max-height: fit-content;
      height: fit-content;
      gap: 0;
      padding: 0;
   }

   .Profile-Grid {
      display: flex;
      flex-direction: column;
   }
   .Section-3 .Heading {
      width: 100%;
   }
}
@media (max-width: 475px) {
   .Section-1 .Heading {
      width: 100%;
   }
}
</style>
