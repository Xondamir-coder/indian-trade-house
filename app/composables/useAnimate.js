// @ts-nocheck

/**
 * @typedef {GSAPTweenVars} AnimateProps
 * @typedef {ScrollTrigger.StaticVars} AnimateScrollProps
 * @typedef {Element | string | object | null} AnimateTarget
 * @typedef UseAnimateOptions
 * @property {AnimateProps} [animProps]
 * @property {AnimateScrollProps} [scrollProps]
 */

/**
 * @param {AnimateTarget} el
 * @param {UseAnimateOptions} [options]
 */
export default (el, { animProps = {}, scrollProps = {} } = {}) => {
  const { $gsap } = useNuxtApp();
  const elements = $gsap.utils.toArray(el);
  const trigger = elements[0];
  const rect = trigger?.getBoundingClientRect?.();
  const isInViewport = rect ? rect.top < window.innerHeight && rect.bottom > 0 : false;
  const gsapProps = {
    opacity: 0,
    ...animProps
  };

  if (trigger && !isInViewport) {
    gsapProps.scrollTrigger = {
      trigger,
      end: 'bottom 80%',
      start: 'top 85%',
      ...scrollProps
    };
  }

  $gsap.from(elements, gsapProps);
};
