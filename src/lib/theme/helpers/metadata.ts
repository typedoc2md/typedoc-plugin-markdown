import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { VuePressTheme } from '../theme.vuepress';

export function metadata(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }

  const md = `---
id: ${getId(this)}
title: '${getTitle(this)}'
sidebar_label: '${getLabel(this)}'
---\n`;
  return md;
}

function escapeYAMLString(str: string = '') {
  return str.replace(/([^\\])'/g, '$1\\\'');
}

function getId(page: PageEvent) {
  const urlSplit = page.url.split('/');
  return escapeYAMLString(urlSplit[urlSplit.length - 1].replace('.md', ''));
}

function getLabel(page: PageEvent) {
  let label: string;
  if (page.url === MarkdownPlugin.theme.indexName) {
    label = MarkdownPlugin.settings.readme === 'none' ? 'Globals' : 'README';
  } else if (page.url === MarkdownPlugin.theme.globalsName) {
    label = 'Globals';
  } else {
    label = getTitle(page);
  }
  return escapeYAMLString(label);
}

function getTitle(page: PageEvent) {
  let title: string;
  if (page.url === MarkdownPlugin.theme.indexName) {
    // If package.json has `label`, use that, otherwise use project name.
    title = (page.project.packageInfo && page.project.packageInfo.label) || page.project.name;
  } else if (page.url === MarkdownPlugin.theme.globalsName) {
    title = 'Globals';
  } else {
    title = MarkdownPlugin.theme.navigationTitlesMap[page.url];
  }
  return escapeYAMLString(title);
}

function isVisible() {
  if (MarkdownPlugin.theme instanceof DocusaurusTheme || MarkdownPlugin.theme instanceof VuePressTheme) {
    return true;
  }
  return false;
}
