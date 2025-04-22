<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import emailjs from '@emailjs/browser';

// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  industry: "",
  location: "",
  dailyVolume: "",
  percentageDelivery: "",
  pickupDropoff: [],
  frequency: "",
  codRemittance: ""
});

// Form options
const pickupOptions = [
  { id: 'pickup', label: 'Pick-Up / استلام' },
  { id: 'dropoff', label: 'Drop-Off / تسليم' }
];

// Animation refs
const section1Ref = ref<Nullable<HTMLElement>>(null);
const formSectionRef = ref<Nullable<HTMLElement>>(null);

// Loading state
const isSubmitting = ref(false);

// Handle form submission
const handleSubmit = () => {
  isSubmitting.value = true;
  
  // Prepare form data for EmailJS
  const emailParams = {
    to_name: "Nabil",
    to_email: "Nabil@win-ex.com",
    from_name: formData.value.name,
    from_email: formData.value.email,
    phone: formData.value.phone,
    industry: formData.value.industry,
    location: formData.value.location,
    daily_volume: formData.value.dailyVolume,
    percentage_delivery: formData.value.percentageDelivery,
    pickup_dropoff: formData.value.pickupDropoff.join(', '),
    frequency: formData.value.frequency,
    cod_remittance: formData.value.codRemittance
  };
  
  // Send using EmailJS
  emailjs.send(
    'service_winex', // Replace with your EmailJS service ID
    'template_winex', // Replace with your EmailJS template ID
    emailParams,
    'iT0QUvPLLgJIQEVJs' // Replace with your EmailJS public key
  )
  .then(() => {
    alert('Thank you! Your form has been submitted successfully.');
    // Reset form
    formData.value = {
      name: "",
      email: "",
      phone: "",
      industry: "",
      location: "",
      dailyVolume: "",
      percentageDelivery: "",
      pickupDropoff: [],
      frequency: "",
      codRemittance: ""
    };
  })
  .catch((error: any) => {
    console.error('Error submitting form:', error);
    alert('There was a problem submitting your form. Please try again later.');
  })
  .finally(() => {
    isSubmitting.value = false;
  });
};

onMounted(() => {
  let timeline = gsap.timeline();
  timeline.from(
    ".Contact .Section-1 .Heading",
    {
      opacity: 0,
      y: 50,
      duration: 0.7
    }
  );
  timeline.fromTo(
    ".Contact .Section-1 .Line",
    { scaleX: 0 },
    { scaleX: 1, duration: 0.6 }
  );
  
  // Animate form elements
  gsap.from(".Form-Container .Form-Group", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".Form-Container",
      start: "top 80%",
    }
  });
});
</script>

<template>
  <main class="Contact">
    <section class="Section Section-1" ref="section1Ref">
      <h1 class="Heading">Start Your Service with Us</h1>
      <hr class="Line" />
      <p class="Paragraph">
        Please fill in the details below
      </p>
    </section>
    
    <section class="Section Section-2" ref="formSectionRef">
      <div class="Form-Container">
        <form @submit.prevent="handleSubmit">
          <div class="Form-Group">
            <label for="name">
              Client Name:
              <span class="Arabic-Label">اسم العميل</span>
            </label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>

          <div class="Form-Group">
            <label for="email">
              Email Address:
              <span class="Arabic-Label">البريد الإلكتروني</span>
            </label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>

          <div class="Form-Group">
            <label for="phone">
              Phone Number:
              <span class="Arabic-Label">رقم الهاتف</span>
            </label>
            <input type="tel" id="phone" v-model="formData.phone" required>
          </div>
          
          <div class="Form-Group">
            <label for="industry">
              Industry:
              <span class="Arabic-Label">القطاع</span>
            </label>
            <input type="text" id="industry" v-model="formData.industry" required>
          </div>
          
          <div class="Form-Group">
            <label for="location">
              Location:
              <span class="Arabic-Label">الموقع</span>
            </label>
            <input type="text" id="location" v-model="formData.location" required>
          </div>
          
          <div class="Form-Group">
            <label for="dailyVolume">
              Daily Volume Pick-Up:
              <span class="Form-Hint">(e.g., number of parcels per day)</span>
              <span class="Arabic-Label">عدد الطرود اليومية</span>
            </label>
            <input type="text" id="dailyVolume" v-model="formData.dailyVolume" required>
          </div>
          
          <div class="Form-Group">
            <label for="percentageDelivery">
              Percentage of Delivery:
              <span class="Form-Hint">(e.g., 80% delivery, 20% return)</span>
              <span class="Arabic-Label">نسبة التسليم</span>
            </label>
            <input type="text" id="percentageDelivery" v-model="formData.percentageDelivery" required>
          </div>
          
          <div class="Form-Group">
            <label class="Checkbox-Label">
              Pick-Up or Drop-Off:
              <span class="Form-Hint">(Choose one or both)</span>
              <span class="Arabic-Label">استلام أو تسليم</span>
            </label>
            <div class="Checkbox-Container">
              <div v-for="option in pickupOptions" :key="option.id" class="Checkbox-Item">
                <input 
                  type="checkbox" 
                  :id="option.id" 
                  :value="option.id" 
                  v-model="formData.pickupDropoff"
                >
                <label :for="option.id">{{ option.label }}</label>
              </div>
            </div>
          </div>
          
          <div class="Form-Group">
            <label for="frequency">
              Frequency Per Week:
              <span class="Form-Hint">(e.g., 3 times/week)</span>
              <span class="Arabic-Label">عدد المرات في الأسبوع</span>
            </label>
            <input type="text" id="frequency" v-model="formData.frequency" required>
          </div>
          
          <div class="Form-Group">
            <label for="codRemittance">
              COD Remittance Request Per Week:
              <span class="Form-Hint">(e.g., once a week, twice a month)</span>
              <span class="Arabic-Label">عدد مرات تسليم مبلغ الدفع عند الاستلام في الأسبوع</span>
            </label>
            <input type="text" id="codRemittance" v-model="formData.codRemittance" required>
          </div>
          
          <div class="Form-Group Button-Group">
            <button type="submit" class="Submit-Button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Get Started' }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.Contact {
  margin-top: var(--Header-Size);
}

.Section-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(105.76deg, #11567d 6.99%, #174552 85.54%);
  padding: 0;
  padding-bottom: 60px;
  text-align: center;
  height: 80vh;
}

.Section-1 .Heading {
  color: #c1dbe4;
  background-clip: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  background: none;
  margin-bottom: 10px;
}

.Arabic-Heading {
  color: #c1dbe4;
  font-size: 32px;
  margin-top: 0;
  margin-bottom: 20px;
  direction: rtl;
}

.Section-1 .Line {
  width: 75%;
  height: 7px;
  background-color: #c1dbea;
  border-radius: 10px;
  margin: 15px 0;
}

.Section-1 .Paragraph {
  width: 65%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #c1dbe4;
  display: flex;
  flex-direction: column;
}

.Arabic-Text {
  direction: rtl;
  margin-top: 5px;
  font-size: 18px;
}

.Section-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 270px;
  padding-bottom: 270px;
  background-color: #f4f9fb;
  height: auto;
}

.Form-Container {
  width: 80%;
  max-width: 800px;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.Form-Group {
  margin-bottom: 25px;
}

label {
  display: block;
  font-weight: 700;
  color: var(--Dark-Green);
  margin-bottom: 8px;
  font-size: 18px;
}

.Arabic-Label {
  display: block;
  direction: rtl;
  font-weight: 400;
  margin-top: 4px;
  color: var(--Yet-Another-Dark-Green);
  font-size: 16px;
}

.Form-Hint {
  display: block;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: #666;
  margin-top: 2px;
}

input[type="text"], input[type="email"], input[type="tel"] {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid rgba(18, 94, 138, 0.3);
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus, input[type="email"]:focus, input[type="tel"]:focus {
  outline: none;
  border-color: var(--Another-Dark-Green);
}

.Checkbox-Container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.Checkbox-Item {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.Checkbox-Item input {
  margin-right: 8px;
  width: 18px;
  height: 18px;
}

.Button-Group {
  margin-top: 40px;
  text-align: center;
}

.Submit-Button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 35px;
  background: var(--Another-Dark-Green);
  color: white;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease, background-color 0.3s;
  margin: 0 auto;
}

.Arabic-Button {
  font-size: 16px;
  margin-top: 5px;
}

.Submit-Button:hover {
  transform: scale(1.05);
  background-color: #0d4e75;
}

@media (max-width: 768px) {
  .Form-Container {
    width: 90%;
    padding: 30px 20px;
  }
  
  .Arabic-Heading {
    font-size: 26px;
  }
  
  .Checkbox-Container {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 475px) {
  .Section-1 .Paragraph {
    width: 90%;
    font-size: 16px;
  }
  
  .Arabic-Heading {
    font-size: 22px;
  }
  
  label {
    font-size: 16px;
  }
  
  .Arabic-Label {
    font-size: 14px;
  }
}
</style>