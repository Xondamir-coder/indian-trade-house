const translate = (val, rt) => {
  if (val == null || typeof val !== 'object') return val;
  if ('loc' in val) return rt(val);
  if (Array.isArray(val)) return val.map(item => translate(item, rt));

  return Object.fromEntries(Object.entries(val).map(([key, value]) => [key, translate(value, rt)]));
};

export const mapRt = (arr, rt) => {
  if (!Object.keys(arr).length || !rt) {
    console.error('arr or rt not found');
    return;
  }

  return arr.map(item => translate(item, rt));
};

/**
 * Wraps target elements in overflow-hidden containers so transforms stay clipped.
 *
 * @param {string | Element | Element[] | NodeListOf<Element> | null | undefined} target
 * @returns {HTMLDivElement[]}
 */
export const wrapWithOverflowHidden = target => {
  if (!target) return [];

  const elements =
    typeof target === 'string'
      ? Array.from(document.querySelectorAll(target))
      : target instanceof Element
        ? [target]
        : Array.from(target);

  return elements.reduce((wrappers, element) => {
    const parent = element.parentElement;

    if (!parent) return wrappers;

    if (parent instanceof HTMLDivElement && parent.dataset.overflowHiddenWrapper === 'true') {
      wrappers.push(parent);
      return wrappers;
    }

    const wrapper = document.createElement('div');

    wrapper.dataset.item = element.className;
    wrapper.style.overflow = 'hidden';

    parent.insertBefore(wrapper, element);
    wrapper.appendChild(element);
    wrappers.push(wrapper);

    return wrappers;
  }, []);
};
