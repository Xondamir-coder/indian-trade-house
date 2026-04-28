import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default defineNuxtPlugin(nuxtApp => {
  const lenis = new Lenis({
    autoRaf: false,
    smoothWheel: true
  });

  let rafId = 0;
  let stopCount = 0;

  const onFrame = time => {
    lenis.raf(time);
    rafId = window.requestAnimationFrame(onFrame);
  };
  const onResize = () => {
    lenis.resize();
  };

  const pauseLenis = () => {
    stopCount += 1;
    lenis.stop();
  };

  const resumeLenis = () => {
    stopCount = Math.max(0, stopCount - 1);

    if (stopCount === 0) {
      lenis.start();
    }
  };

  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  rafId = window.requestAnimationFrame(onFrame);

  nuxtApp.hook('page:finish', () => {
    lenis.resize();
  });

  window.addEventListener('resize', onResize);

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      lenis.destroy();
    });
  }

  return {
    provide: {
      lenis,
      pauseLenis,
      resumeLenis
    }
  };
});
