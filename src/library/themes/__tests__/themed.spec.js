/* @flow */
import React from 'react';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import { themed } from '../index';
import Link from '../../Link';
import Sample from '../../../website/app/demos/ThemeProvider/common/Sample';

// Allow full theme values in snapshots for ThemeProvider
import snapshotSerializer from '../../../../utils/snapshotSerializer';
snapshotSerializer.print = (val: Object, serialize: Function) => {
  val.processed = true;
  return serialize(val);
};

function mountThemedLink(theme) {
  const ThemedLink = themed(Link)(theme);

  return mountInThemeProvider(<ThemedLink />);
}

function mountThemedSample(theme) {
  const ThemedSample = themed(Sample)(theme);

  return mountInThemeProvider(<ThemedSample />);
}

describe('themed', () => {
  it('renders correctly', () => {
    const [themedSample] = mountThemedSample({
      color: 'mediumvioletred'
    });

    expect(themedSample).toMatchSnapshot();
  });

  it('renders a Link correctly with a custom theme object', () => {
    const [themedLink] = mountThemedLink({
      Link_color: 'mediumvioletred'
    });

    expect(themedLink).toMatchSnapshot();
  });

  it('renders a Link correctly with a custom theme function', () => {
    const [themedLink] = mountThemedLink(({ theme }) => ({
      Link_color: theme.color_danger
    }));

    expect(themedLink).toMatchSnapshot();
  });
});
