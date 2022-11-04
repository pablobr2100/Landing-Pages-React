export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};

export const mapMenu = (menu = {}) => {
  const {
    logo_text: text = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  const srcImg =
    menu.logo && menu.logo.data ? menu.logo.data.attributes.url : '';

  return {
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};
