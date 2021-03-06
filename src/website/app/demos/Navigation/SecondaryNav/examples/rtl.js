/* @flow */
import { ThemeProvider } from '../../../../../../library/themes';
import { NavItem } from '../../../../../../library/Navigation';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `SecondaryNav supports right-to-left (RTL) languages. The
alignment is reversed when the \`direction\` theme variable is set to \`'rtl'\`.
The \`messages\` prop allows customization of various messages — both those that
are displayed, and those that are announced by assistive technologies.`,
  scope: { NavItem, SecondaryNav, ThemeProvider },
  source: `() => {
    const messages = {
      moreLabel: 'المزيد من عناصر الملاحة',
      moreText: 'أكثر من'
    };

    return (
      <div dir="rtl">
        <ThemeProvider theme={{direction: 'rtl'}}>
          <SecondaryNav messages={messages} align="start">
            <NavItem href="/page-1">علامة التبويب 1</NavItem>
            <NavItem href="/page-2">علامة التبويب 2</NavItem>
            <NavItem href="/page-3">علامة التبويب 3</NavItem>
          </SecondaryNav>
        </ThemeProvider>
      </div>
    );
  }`
};
