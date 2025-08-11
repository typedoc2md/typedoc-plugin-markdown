// @ts-check

/**
 * @param {import('typedoc').Application} app
 */
export function load(app) {
  // do something with app instance
  console.log(app.renderer);

  console.log(app.renderer.hooks);
}
