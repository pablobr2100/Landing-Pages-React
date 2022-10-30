export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-text',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title: textTitle = '', description: textDescription = '' } = text;

      return {
        textTitle,
        textDescription,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-image',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;

      return {
        srcImg,
        altText,
      };
    }),
  };
};

export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid: textGrid = [], image_grid: imageGrid = [] } = section;

      if (textGrid.length > 0) {
        return mapTextGrid(section);
      }

      if (imageGrid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};
