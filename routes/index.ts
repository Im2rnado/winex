import Home from "./Home/Home.vue";
const About = () => import("./About/About.vue");
const Services = () => import("./Services/Services.vue");
const Contact = () => import("./Contact/Contact.vue");

export default [
   {
      path: "/",
      component: Home,
   },
   {
      path: "/about",
      component: About,
   },
   {
      path: "/services",
      component: Services,
   },
   {
      path: "/contact",
      component: Contact,
   },
];
