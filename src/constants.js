/* eslint-disable global-require */

export const categoryImages = {
  categoryNightlife: require('./img/categoryNightlife.png'),
  categoryDebate: require('./img/categoryDebate.png'),
  categoryPresentations: require('./img/categoryPresentations.png'),
  categorySport: require('./img/categorySport.png'),
  categoryOther: require('./img/categoryOther.png'),
  categoryExhibitions: require('./img/categoryExhibitions.png'),
  categoryPerformances: require('./img/categoryPerformances.png'),
  categoryMusic: require('./img/categoryMusic.png'),
};
/* eslint-enable global-require */

export const categoryElements = [
   { name: 'Debatter', id: 'DEBATE', imgUrl: categoryImages.categoryDebate },
   { name: 'Utstillinger', id: 'EXHIBITIONS', imgUrl: categoryImages.categoryExhibitions },
   { name: 'Musikk', id: 'MUSIC', imgUrl: categoryImages.categoryDebate },
   { name: 'Uteliv', id: 'NIGHTLIFE', imgUrl: categoryImages.categoryNightlife },
   { name: 'Forestillinger', id: 'PERFORMANCES', imgUrl: categoryImages.categoryPerformances },
   { name: 'Presentasjoner', id: 'PRESENTATIONS', imgUrl: categoryImages.categoryPresentations },
   { name: 'Sport', id: 'SPORT', imgUrl: categoryImages.categorySport },
   { name: 'Andre', id: 'OTHER', imgUrl: categoryImages.categoryOther },
];

export const actionIconSize = 30;
export const checkboxSize = 30;
export const searchButtonSize = 30;
