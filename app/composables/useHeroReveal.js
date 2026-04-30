import { SplitText } from 'gsap/SplitText';

/**
 * @param {{
 *   title?: string | Element,
 *   subtitle?: string | Element,
 *   extra?: string | Element,
 *   defaults?: gsap.TimelineVars['defaults'],
 *   titleFrom?: GSAPTweenVars,
 *   subtitleFrom?: GSAPTweenVars,
 *   extraFrom?: GSAPTweenVars,
 *   subtitlePosition?: string | number,
 *   extraPosition?: string | number
 * }} [options]
 */
export default ({
  title = '.hero h1',
  subtitle = '.hero__subtitle',
  extra,
  defaults,
  titleFrom = {
    yPercent: 100,
    stagger: 0.08
  },
  subtitleFrom = {
    yPercent: 100,
    stagger: 0.05
  },
  extraFrom = {
    opacity: 0,
    y: 15
  },
  subtitlePosition = '-=0.3',
  extraPosition = subtitlePosition
} = {}) => {
  const { $gsap } = useNuxtApp();
  const splits = [];
  const timeline = $gsap.timeline({
    defaults
  });

  const addSplitStep = ({ target, type, from, position }) => {
    const split = SplitText.create(target, {
      type,
      mask: type
    });

    splits.push(split);

    if (position == null) {
      timeline.from(split[type], from);
      return;
    }

    timeline.from(split[type], from, position);
  };

  addSplitStep({
    target: title,
    type: 'words',
    from: titleFrom
  });
  addSplitStep({
    target: subtitle,
    type: 'lines',
    from: subtitleFrom,
    position: subtitlePosition
  });

  if (extra) {
    timeline.from(extra, extraFrom, extraPosition);
  }

  return {
    timeline,
    revert: () => {
      timeline.kill();
      splits.forEach(split => split?.revert?.());
    }
  };
};
