/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '../../../../../library/themes';
import Box from '../../../../../library/Box';
import Button from '../../../../../library/Button';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.color_gray_10,
  border: `1px solid ${theme.color_gray_20}`
}));

const bestPractices: BestPractices = [
  {
    type: 'do',
    description:
      'Wrap Box around other components to apply spacing from the theme.',
    example: (
      <Container>
        <Box margin="lg" marginHorizontal="xl">
          <Button primary variant="success">
            New Report
          </Button>
        </Box>
      </Container>
    )
  },
  {
    type: 'do',
    description: `Use Box's \`marginStart\` & \`marginEnd\` props to apply
directionally-appropriate left/right margins.`,
    example: (
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Container dir="rtl">
          <Box marginStart="xl">
            <Button primary>This Button has marginStart</Button>
          </Box>
        </Container>
      </ThemeProvider>
    )
  },
  {
    type: 'dont',
    description: `Don't use Box to display content directly. Wrap Box around
components instead.`,
    example: (
      <Container>
        <Box>
          This is some text, without the proper text styles, because it is
          directly inside a Box.
        </Box>
      </Container>
    )
  }
];

export default bestPractices;
