import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

  return {
    provide: {
      gsap
    }
  };
});
