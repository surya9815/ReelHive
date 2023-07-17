const APP_PATH = "/";

export const routePath = {
  home: `${APP_PATH}/`,
  categories: `${APP_PATH}/categories`,
  invalid: `${APP_PATH}/*`,
  movieDetails: `${APP_PATH}/:mediaType/:id`,
  searchResult: `${APP_PATH}/search/:query`,
  explore: `${APP_PATH}/explore/:mediaType`,
};
