import { expectFileToEqual } from '@devtools/testing';

describe(`Categories`, () => {
  test(`should get category index page`, () => {
    expectFileToEqual('categories', 'categories', 'module-1/README.md');
  });

  test(`should get category page`, () => {
    expectFileToEqual('categories', 'categories', 'module-2/Category-3.md');
  });

  test(`should get index page for categories with single module`, () => {
    expectFileToEqual('categoriesSingleModule', 'categories', 'README.md');
  });

  test(`should get category page with single module`, () => {
    expectFileToEqual('categoriesSingleModule', 'categories', 'Category-3.md');
  });

  test(`should get category with namespace`, () => {
    expectFileToEqual('categories', 'categories', 'module-2/Category-2.md');
  });

  test(`should get category with namespace single module`, () => {
    expectFileToEqual('categoriesSingleModule', 'categories', 'Category-2.md');
  });

  test(`should get index page for categories with packages`, () => {
    expectFileToEqual(
      'packagesCategories',
      'categories',
      'package-1/README.md',
    );
  });
});
