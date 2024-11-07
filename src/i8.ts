import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      LatestBlogPosts: 'Latest blog posts',
      MenuItemAbout: 'About',
      MenuItemBlog: 'Blog',
      MenuItemTags: 'Tags',
      LinkAbout: '/',
      LinkBlog: '/blog',
      LinkTags: '/blog/tags',
      ViewFullPost: 'Click to view full post',
      ViewAllPosts: 'View all posts',
      CreatedBy: 'Created by',
      Created: 'Created',
      Updated: 'Updated',
      Ago: 'ago',
      Next: 'Next',
      Previous: 'Previous',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
