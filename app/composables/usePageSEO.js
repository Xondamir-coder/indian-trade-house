import en from '~/assets/data/seo/en.json';
import uz from '~/assets/data/seo/uz.json';

const seo = { en, uz };

/**
 * Sets the SEO metadata for a given page.
 *
 * @param {string} pageName - the name of the page
 * @param {import('@unhead/vue').UseSeoMetaInput} [props] - Additional SEO metadata.
 */
export default (pageName, props = {}) => {
  const { locale } = useI18n();
  const seoData = seo[locale.value]?.[pageName] || seo.en[pageName] || {};
  const { title, desc } = seoData;

  useSeoMeta({
    title,
    description: desc,
    ogSiteName: 'TIFW',
    ogTitle: title,
    ogDescription: desc,
    ogImage: '/compressed/home-about-1.jpg',
    ...props
  });
};
