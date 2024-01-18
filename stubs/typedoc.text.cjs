const path = require('path');
const baseOptions = require('./typedoc.cjs');
module.exports = {
  ...baseOptions,
  textContentMappings: {
    'header.title': 'My API -  {version}',
    'header.readme': 'My Readme',
    'header.index': 'Docs',
    'breadcrumbs.home': 'Home',
    'footer.generator': '@copyright My Test',
    'title.indexPage': ':tada: Custom Index Title',
    'title.memberPage': '{name}',
    'title.member': '{kind}: {name}',
    'title.modulePage': '{kind} - {name}',
    'label.source': 'Defined In',
    'kind.event.plural': 'My Events',
    'kind.event.singular': 'Event!',
    'kind.interface.plural': '多变的',
  },
};
