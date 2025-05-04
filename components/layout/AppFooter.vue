<script setup lang="ts">
import Logo from "@/assets/image/logo2.png";
import Facebook from "@/assets/svg/facebook.svg";
import Twitter from "@/assets/svg/twitter.svg";
import LinkedIn from "@/assets/svg/linkedin.svg";
import Instagram from "@/assets/svg/instagram.svg";
</script>

<template>
   <footer class="App-Footer">
      <div class="Logo-Container">
         <img :src="Logo" alt="Winex Logo" />
         <p>
            © Winex®, the Winex logo, and the names and marks associated
            with Winex's products are trademarks of Winex and/or
            its affiliates.
         </p>
      </div>
      <!-- Hidden elements (commented out for now) -->
      <!-- <div class="Icon-Row Outer-Icon-Row">
         <img :src="Facebook" alt="facebook icon" />
         <img :src="Instagram" alt="instagram icon" />
         <img :src="LinkedIn" alt="linkedin icon" />
         <img :src="Twitter" alt="twitter icon" />
      </div> -->
      <!-- <nav class="Links-Container">
         <li class="Links">
            <h3>INFO</h3>
            <ul>
               <li>About Winex</li>
               <li>Help & Support</li>
               <li>FAQs</li>
               <li>Return Policy</li>
               <li>Terms of Use</li>
            </ul>
         </li>
         <li class="Links">
            <h3>SERVICES</h3>
            <ul>
               <li>Transportation</li>
               <li>Delayed Deliveries</li>
               <li>Packaging</li>
            </ul>
         </li>
         <li class="Links">
            <h3>COMPANY</h3>
            <ul>
               <li>Privacy Policy</li>
               <li>Careers</li>
               <li>Management</li>
            </ul>
         </li>
         <li class="Links Contact-Links">
            <h3>CONTACT</h3>
            <div class="Icon-Row">
               <img :src="Facebook" alt="facebook icon" />
               <img :src="Instagram" alt="instagram icon" />
               <img :src="LinkedIn" alt="linkedin icon" />
               <img :src="Twitter" alt="twitter icon" />
            </div>
         </li>
      </nav> -->
      <p class="Copyright">Winex 2025.</p>
   </footer>
</template>

<style scoped>
.App-Footer {
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 180px; /* Reduced height since we're only showing minimal content */
   background: #11567d29;
   padding: 20px var(--Vertical-Squeeze);
}

.Logo-Container {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-bottom: 20px;
}

.Logo-Container img {
   height: 60px;
   margin-top: 15px;
}

.Logo-Container p {
   max-width: 400px;
   font-size: 13px;
   line-height: 16px;
   color: #125e8a;
   text-align: center;
}

.Copyright {
   font-family: "Product Sans";
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 23px;
   text-align: center;
   color: #11567d;
   margin-top: auto;
   padding-bottom: 15px;
}

/* Hidden styles kept for future reference */
.Links-Container {
   display: none;
}

.Icon-Row {
   display: none;
}

.Links {
   display: none;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
   .App-Footer {
      height: 160px;
      padding: 15px var(--Vertical-Squeeze);
   }

   .Logo-Container img {
      height: 50px;
      margin-top: 30px;
   }

   .Logo-Container p {
      font-size: 11px;
      line-height: 16px;
      max-width: 300px;
   }

   .Copyright {
      font-size: 14px;
   }
}

@media (max-width: 768px) {
   .App-Footer {
      height: 150px;
      padding: 12px var(--Vertical-Squeeze);
   }

   .Logo-Container img {
      height: 45px;
   }

   .Logo-Container p {
      font-size: 10px;
      line-height: 14px;
      max-width: 280px;
   }

   .Copyright {
      font-size: 12px;
   }
}
</style>