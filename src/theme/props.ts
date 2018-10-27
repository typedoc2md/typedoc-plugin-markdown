const props = new Map();

export function setProps(options: any, resources: any) {
  props.set('options', options);
  props.set('resources', resources);
}

export function getOptions() {
  return props.get('options');
}

export function getResources() {
  return props.get('resources');
}
