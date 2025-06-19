import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Documents)`, () => {
  describe(`Project`, () => {
    it(`should compile index page for project`, () => {
      expectFileToEqual('documents', ['modules', 'members'], 'README.md');
    });

    it(`should compile a project document`, () => {
      expectFileToEqual(
        'documents',
        ['modules', 'members'],
        'documents/Project-Document-1.md',
        1,
      );
    });
  });

  describe(`Module`, () => {
    it(`should compile index page for module`, () => {
      expectFileToEqual(
        'documents',
        ['modules', 'members'],
        'ModuleWithDocuments1/README.md',
        1,
      );
    });

    it(`should compile module documents`, () => {
      expectFileToEqual(
        'documents',
        ['modules', 'members'],
        'ModuleWithDocuments1/documents/MODULE_DOC.md',
        1,
      );
    });
  });

  describe(`Enum`, () => {
    it(`should compile index page for enum`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/enumerations/EnumWithDocuments.md',
        1,
      );
    });

    it(`should compile a module document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/enumerations/documents/ENUM_DOC.md',
        1,
      );
    });
  });

  describe(`Class`, () => {
    it(`should compile index page for class`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/classes/ClassWithDocuments.md',
        1,
      );
    });

    it(`should compile a module document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/classes/documents/CLASS_DOC.md',
        1,
      );
    });
  });

  describe(`Interface`, () => {
    it(`should compile index page for interface`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/InterfaceWithDocuments.md',
        1,
      );
    });

    it(`should compile a interface document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/documents/INTERFACE_DOC.md',
        1,
      );
    });
  });

  describe(`Interface`, () => {
    it(`should compile index page for interface`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/InterfaceWithDocuments.md',
        1,
      );
    });

    it(`should compile a interface document`, () => {
      expectFileToEqual(
        'documents',
        ['members'],
        'ModuleWithDocuments1/interfaces/documents/INTERFACE_DOC.md',
        1,
      );
    });
  });
});
