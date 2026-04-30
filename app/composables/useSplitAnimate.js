import { SplitText } from 'gsap/SplitText';

/**
 * @param {string | Element | Element[] | NodeListOf<Element>} targets
 * @param {{
 *   type?: 'chars' | 'words' | 'lines',
 *   mask?: 'chars' | 'words' | 'lines',
 *   animProps?: GSAPTweenVars | ((context: { element: Element, index: number, split: SplitText }) => GSAPTweenVars),
 *   scrollProps?: ScrollTrigger.StaticVars | ((context: { element: Element, index: number, split: SplitText }) => ScrollTrigger.StaticVars),
 *   splitKey?: 'chars' | 'words' | 'lines'
 * }} [options]
 */
export default (
  targets,
  { type = 'lines', mask = type, animProps = {}, scrollProps = {}, splitKey = type } = {}
) => {
  const elements =
    typeof targets === 'string'
      ? Array.from(document.querySelectorAll(targets))
      : targets instanceof Element
        ? [targets]
        : Array.from(targets ?? []);
  const animations = [];
  const splits = [];

  elements.forEach((element, index) => {
    if (!(element instanceof Element)) return;

    const split = SplitText.create(element, {
      type,
      mask
    });
    const context = {
      element,
      index,
      split
    };

    splits.push(split);
    animations.push(
      useAnimate(split[splitKey], {
        animProps: typeof animProps === 'function' ? animProps(context) : animProps,
        scrollProps: typeof scrollProps === 'function' ? scrollProps(context) : scrollProps
      })
    );
  });

  return {
    animations,
    splits,
    revert: () => {
      animations.forEach(animation => animation?.revert?.());
      splits.forEach(split => split?.revert?.());
    }
  };
};
