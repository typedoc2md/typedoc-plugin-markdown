import { KindRouter } from 'typedoc';

export function load(app) {
  app.renderer.defineRouter('custom-router', CustomRouter);
}

export class CustomRouter extends KindRouter {
  extension = '.md';
}
