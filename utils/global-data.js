export const getGlobalData = () => {
  const name = 'Jehangir Kazi'
  const blogTitle = 'Curly Haired Guide to Curiosity'
  const footerText = 'All rights reserved.'
  
  // const name = process.env.BLOG_NAME
  //   ? decodeURI(process.env.BLOG_NAME)
  //   : 'Jay Doe';
  // const blogTitle = process.env.BLOG_TITLE
  //   ? decodeURI(process.env.BLOG_TITLE)
  //   : 'Next.js Blog Theme';
  // const footerText = process.env.BLOG_FOOTER_TEXT
  //   ? decodeURI(process.env.BLOG_FOOTER_TEXT)
  //   : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
