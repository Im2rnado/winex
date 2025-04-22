<script setup lang="ts">
import gsap from "gsap";
import Partner from "./Partner.vue";
import ServiceItem from "./ServiceItem.vue";

import Truck from "@/assets/svg/truck.svg";
import Freight from "@/assets/svg/freight.svg";
import Bicycle from "@/assets/svg/bicycle.svg";
import Warehouse from "@/assets/svg/warehouse.svg";
import Papers from "@/assets/svg/papers.svg";
import Chatbox from "@/assets/svg/chatbox.svg";

import Jumia from "@/assets/svg/jumia.svg";
import Amazon from "@/assets/svg/amazon.svg";
import Konga from "@/assets/svg/konga.svg";
import Etsy from "@/assets/svg/etsy.svg";
import Ebay from "@/assets/svg/ebay.svg";
import Macys from "@/assets/svg/macys.svg";

import { onMounted, ref } from "vue";
import { tweens } from "@/animations";

const section2Ref = ref<Nullable<HTMLElement>>(null);
let observerOptions = <IntersectionObserverInit>{
   threshold: 0.3,
};
const section2Observer = new IntersectionObserver(([{ isIntersecting }]) => {
   const tweenvar = isIntersecting ? 1 : 0;
   gsap.to(".Grid-Container > *", tweens.gridItemStaggerDrop[tweenvar]);
}, observerOptions);

onMounted(() => {
   let timeline = gsap.timeline();
   const section2 = section2Ref.value as HTMLElement;
   timeline.from(
      ".App-Services .Section-1 .Heading",
      tweens.fadeInFromBottom[0]
   );
   timeline.fromTo(
      ".App-Services .Section-1 .Line",
      tweens.lineExpand[0],
      tweens.lineExpand[1]
   );
   section2Observer.observe(section2);
});
</script>

<template>
   <main class="App-Services">
      <section class="Section Section-1">
         <h1 class="Heading">Our Services</h1>
         <hr class="Line" />
         <p class="Paragraph">
            Winex offers comprehensive logistics solutions designed to help your business grow.
            From swift deliveries to secure warehousing, we've got your business covered.
         </p>
      </section>
      <section ref="section2Ref" class="Section Section-2">
         <div class="Grid-Container">
            <ServiceItem :src="Truck" alt="truck icon.">
               <template #heading>Door-to-Door Delivery</template>
               Swift and secure deliveries to your customers' doors, ensuring maximum satisfaction with same-day and next-day options.
            </ServiceItem>
            <ServiceItem :src="Freight" alt="freight ship icon.">
               <template #heading>Transportation Solutions</template>
               From parcels to bulk shipments, our fleet moves it all — smart, safe, and on time across Egypt.
            </ServiceItem>
            <ServiceItem :src="Papers" alt="box icon.">
               <template #heading>Order Fulfillment</template>
               We store, pack, and ship your products with precision and care, taking inventory management off your hands.
            </ServiceItem>
            <ServiceItem :src="Warehouse" alt="warehouse icon.">
               <template #heading>Warehousing</template>
               Scalable and secure storage solutions for all your inventory needs, with flexible short and long-term options.
            </ServiceItem>
         </div>
      </section>

      <section ref="section3Ref" class="Section Section-3">
         <h1>Why Choose Us</h1>
         <div class="Features-Container">
            <div class="Feature-Item">
               <h3>Same-Day Speed</h3>
               <p>Get your packages delivered on the same day within city limits.</p>
            </div>
            <div class="Feature-Item">
               <h3>Reliable COD Remittance</h3>
               <p>Secure and timely cash-on-delivery payment processing.</p>
            </div>
            <div class="Feature-Item">
               <h3>Flexible Pickup & Delivery</h3>
               <p>Schedule pickups and deliveries at your convenience.</p>
            </div>
            <div class="Feature-Item">
               <h3>Real-Time Tracking</h3>
               <p>Monitor your shipments every step of the way.</p>
            </div>
            <div class="Feature-Item">
               <h3>Customer-Centric Support</h3>
               <p>Our dedicated team is always ready to assist with any inquiries.</p>
            </div>
         </div>
      </section>

      <section class="Section Section-3">
         <h1>Notable Partners</h1>
         <div class="Carousel-Container">
            <div v-for="(_, index) in 2" :key="index" class="Partners-Carousel">
               <Partner :src="Jumia" alt="Jumia" />
               <Partner :src="Amazon" alt="Amazon" />
               <Partner :src="Konga" alt="Konga" />
               <Partner :src="Etsy" alt="Etsy" />
               <Partner :src="Ebay" alt="Ebay" />
               <Partner :src="Macys" alt="Macy's" />
            </div>
         </div>
      </section>
   </main>
</template>

<style scoped>
.App-Services {
   margin-top: var(--Header-Size);
}
.Section-1 {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: linear-gradient(105.76deg, #11567d 6.99%, #174552 85.54%);
}
.Section-1 .Heading {
   color: #c1dbe4;
   background-clip: unset;
   -webkit-background-clip: unset;
   -webkit-text-fill-color: unset;
   background: none;
}
.Section-1 .Line {
   width: 75%;
   height: 7px;
   background-color: #c1dbea;
   border-radius: 10px;
}
.Section-1 .Paragraph {
   width: 65%;
   font-style: normal;
   font-weight: 700;
   font-size: 20.4848px;
   line-height: 27px;
   text-align: center;
   letter-spacing: 0.01em;
   color: #c1dbe4;
}
.Section-2 {
   display: flex;
   justify-content: center;
   align-items: center;
}
.Grid-Container {
   display: grid;
   grid: repeat(2, auto) / repeat(2, auto);
   row-gap: 25px;
   column-gap: 25px;
   place-items: center;
}
.Section-3 {
   padding-top: 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #f4f9fb;
   height: 60vh;
}
.Section-3 h1 {
   margin-bottom: 35px;
   color: var(--Dark-Green);
}
.Features-Container {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 30px;
   width: 80%;
   max-width: 1200px;
}
.Feature-Item {
   background: white;
   padding: 25px;
   border-radius: 10px;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
   transition: transform 0.3s ease;
}
.Feature-Item:hover {
   transform: translateY(-5px);
}
.Feature-Item h3 {
   color: var(--Dark-Green);
   margin-bottom: 10px;
   font-size: 20px;
}
.Feature-Item p {
   color: var(--Yet-Another-Dark-Green);
   font-size: 16px;
   line-height: 1.5;
}
.Section-4 {
   padding-right: 0;
   max-height: 450px;
}
.Section-4 h1 {
   margin-bottom: 35px;
}
.Carousel-Container {
   display: flex;
   width: 100%;
   overflow-x: hidden;
   border-left: 2px solid var(--Dark-Green);
}
.Partners-Carousel {
   display: flex;
   animation: scroll 4500ms infinite linear;
}
@keyframes scroll {
   100% {
      transform: translate(-100%);
   }
}
@media (max-width: 1024px) {
   .Grid-Container {
      row-gap: 50px;
   }
   .Features-Container {
      grid-template-columns: repeat(2, 1fr);
      width: 90%;
   }
}
@media (max-width: 768px) {
   .Section-2 {
      justify-content: flex-start;
      align-items: flex-start;
      height: fit-content;
      max-height: fit-content;
      padding-top: 90px;
      margin-bottom: 39px;
   }
   .Grid-Container {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: fit-content;
      max-height: fit-content;
   }
   .Features-Container {
      grid-template-columns: 1fr;
   }
}
@media (max-width: 475px) {
   .Section-1 .Paragraph {
      font-size: 15px;
      line-height: 25px;
      width: 90%;
   }
   .Feature-Item {
      padding: 15px;
   }
   .Feature-Item h3 {
      font-size: 18px;
   }
   .Feature-Item p {
      font-size: 14px;
   }
}
</style>
