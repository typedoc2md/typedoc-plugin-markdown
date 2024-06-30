import { expectFileToEqual } from '@devtools/testing';

describe(`Documents`, () => {
  describe(`Project`, () => {
    test(`should compile index page for project`, () => {
      expectFileToEqual('documents', ['modules', 'members'], 'README.md');
    });

    test(`should compile a project document`, () => {
      expectFileToEqual(
        'documents',
        ['modules', 'members'],
        'documents/Project-Document-1.md',
        1,
      );
    });
  });

  describe(`Module`, () => {
    test(`should compile index page for module`, () => {
      expectFileToEqual(
        'documents',
        ['modules', 'members'],
        'ModuleWithDocuments1/README.md',
        1,
      );
    });

    test(`should compile module documents`, () => {
      expectFileToEqual(
        'documents',
        ['modules', 'members'],
        'ModuleWithDocuments1/documents/MODULE_DOC.md',
        1,
      );
    });
  });

  describe(`Enum`, () => {
    test(`should compile index page for enum`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/enumerations/EnumWithDocuments.md',
        1,
      );
    });

    test(`should compile a module document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/enumerations/documents/ENUM_DOC.md',
        1,
      );
    });
  });

  describe(`Class`, () => {
    test(`should compile index page for class`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/classes/ClassWithDocuments.md',
        1,
      );
    });

    test(`should compile a module document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/classes/documents/CLASS_DOC.md',
        1,
      );
    });
  });

  describe(`Interface`, () => {
    test(`should compile index page for interface`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/InterfaceWithDocuments.md',
        1,
      );
    });

    test(`should compile a interface document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/documents/INTERFACE_DOC.md',
        1,
      );
    });
  });

  describe(`Interface`, () => {
    test(`should compile index page for interface`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/InterfaceWithDocuments.md',
        1,
      );
    });

    test(`should compile a interface document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/documents/INTERFACE_DOC.md',
        1,
      );
    });
  });
});
