const baseOptions = require('../../../../devtools/packages/fixtures/typedoc.cjs');
module.exports = {
  ...baseOptions,
  textContentMappings: {
    'header.title': 'My API -  {version}',
    'header.docs': 'API',
    'footer.text': 'Copyright Test',
    'title.indexPage': ':tada: Custom Index Title',
    'title.memberPage': '{name}',
    'title.modulePage': '{kind} - {name}',
    'label.source': 'Defined In',
    'kind.event.plural': 'My Events',
    'kind.event.singular': 'Event!',
    'kind.interface.plural': '多变的',
    'kind.variable.plural': 'CoolVars',
  },
};
