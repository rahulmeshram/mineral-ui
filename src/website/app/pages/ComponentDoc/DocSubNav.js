/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import { pxToEm } from '../../../../library/styles';
import Link from '../../SiteLink';
import Section from './DocSection';

import type { ComponentDocType } from './types';

type DocSubNavProps = {
  componentDoc: ComponentDocType
};

const styles = {
  navElement: ({ theme }) => ({
    display: 'inline-block',
    fontFamily: theme.fontFamily_headline,
    fontWeight: theme.fontWeight_regular,
    marginRight: theme.space_inline_lg,
    textDecoration: 'none',

    [theme.bp_moreSpacious]: {
      fontSize: pxToEm(22)
    }
  }),
  subnav: ({ theme }) => ({
    marginTop: pxToEm(89), // to baseline
    position: 'sticky',
    top: -1,
    zIndex: theme.zIndex_100,

    [theme.bp_moreSpacious]: {
      marginTop: pxToEm(108) // to baseline
    },

    '& > div': {
      backgroundColor: theme.color_white,
      borderBottom: `2px solid ${theme.borderColor}`,
      padding: `${pxToEm(6)} 0`
    }
  })
};

const Root = withProps({ as: 'nav' })(styled(Section)(styles.subnav));
const NavElement = styled(Link)(styles.navElement);

export default function DocSubNav(props: DocSubNavProps) {
  const { componentDoc, ...rootProps } = props;
  const { bestPractices, examples, whenHowToUse } = componentDoc;
  // there is no Examples h2, so we just link to the first example.
  let firstExampleId = 'examples';
  if (examples && examples.length > 0) {
    firstExampleId = examples[0].id;
  }

  const navElements = []; // only show the tabs menu if there is more than one tab
  if (examples && examples.length > 0) {
    navElements.push(
      <NavElement href={`#${firstExampleId}`} key="examples">
        Examples
      </NavElement>
    );
  }

  navElements.push(
    <NavElement href="#api-and-theme" key="api-and-theme">
      API & Theme
    </NavElement>
  );

  if (whenHowToUse || bestPractices) {
    navElements.push(
      <NavElement href="#usage" key="usage">
        Usage
      </NavElement>
    );
  }

  return navElements.length > 1 && <Root {...rootProps}>{navElements}</Root>;
}
