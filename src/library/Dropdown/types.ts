/* @flow */
import { PLACEMENT } from './constants';

import { MenuItems } from '../Menu/types';
import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Placement = keyof typeof PLACEMENT;

export type DropdownProps = {
  children: React.ReactNode | DropdownRenderFn,
  data: MenuItems,
  defaultHighlightedIndex?: number,
  defaultIsOpen?: boolean,
  disabled?: boolean,
  highlightedIndex?: number,
  id?: string,
  isOpen?: boolean,
  item?: DropdownRenderFn,
  itemKey?: string,
  menu?: DropdownRenderFn,
  modifiers?: Object,
  onClose?: (event: React.SyntheticEvent) => void,
  onOpen?: (event: React.SyntheticEvent) => void,
  placement?: Placement,
  positionFixed?: boolean,
  usePortal?: boolean,
  wide?: boolean
};

export type DropdownDefaultProps = {
  itemKey: string,
  placement: Placement
};

export type DropdownState = {
  highlightedIndex: ?number,
  isOpen: boolean
};

type DropdownHelpers = {
  close: (event: React.SyntheticEvent) => void,
  focusTrigger: () => void,
  open: (event: React.SyntheticEvent) => void
};

export type DropdownStateAndHelpers = {
  state: DropdownState,
  helpers: DropdownHelpers
};

export type DropdownPropGetter = (props?: Object) => Object;

export type DropdownRenderFn = (props?: DropdownRenderProps) => React.ReactNode;

type DropdownRenderProps = {
  props: Object
} & DropdownStateAndHelpers;

export type DropdownContentProps = {
  children: React.ReactNode,
  forwardedRef?: (node: ?HTMLElement) => void,
  id: string,
  modifiers?: Object,
  placement?: Placement,
  positionFixed?: boolean,
  wide?: boolean
};

export type DropdownThemeFn = ComponentThemeFn<DropdownTheme>;
export type DropdownTheme = ComponentTheme<DropdownThemeKeys>;
type DropdownThemeKeys = DropdownContentThemeKeys;

export type DropdownContentThemeFn = ComponentThemeFn<DropdownContentTheme>;
export type DropdownContentTheme = ComponentTheme<DropdownContentThemeKeys>;
type DropdownContentThemeKeys = {
  DropdownContent_backgroundColor: ThemeValue,
  DropdownContent_borderColor: ThemeValue,
  DropdownContent_borderRadius: ThemeValue,
  DropdownContent_boxShadow: ThemeValue,
  DropdownContent_margin: ThemeValue,
  DropdownContent_zIndex: ThemeValue
};
