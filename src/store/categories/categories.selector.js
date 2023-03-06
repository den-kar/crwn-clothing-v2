import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories,
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    // console.log('selectCategoriesMap fired');
    return categories.reduce((acc, categoryData) => {
      const { title, items } = categoryData;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  },
);

// export const selectCategoriesMap = (state) => {
//   console.log('selectCategoriesMap fired');
//   return state.categories.categories.reduce((acc, categoryData) => {
//     const { title, items } = categoryData;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

// export const selectCategoriesMap = (state) => state.categories.categoriesMap;

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
)
