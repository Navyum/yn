import { debounce } from 'lodash-es'
import { getActionHandler } from '../core/action'

export type MenuItem = {
  id: string;
  type: 'normal';
  title: string;
  tips?: string;
  subTitle?: string;
  disabled?: boolean;
  hidden?: boolean;
  onClick?: (item: MenuItem) => void;
}

export interface Menu {
  id: string;
  title?: string;
  tips?: string;
  icon?: string;
  hidden?: boolean;
  position: 'left' | 'right';
  onClick?: (menu: Menu) => void;
  list?: MenuItem[];
}

export type Menus = { [id: string]: Menu }

export type MenuTapper = (menus: Menus) => void

const menuTappers: MenuTapper[] = []

const _refreshMenu = debounce(() => {
  getActionHandler('status-bar.refresh-menu')()
}, 10)

/**
 * Refresh status bar menus.
 */
export function refreshMenu () {
  _refreshMenu()
}

/**
 * Add a menu processor.
 * @param tapper
 */
export function tapMenus (tapper: MenuTapper) {
  menuTappers.push(tapper)
  refreshMenu()
}

/**
 * Get status bar menus by position.
 * @param position
 * @returns
 */
export function getMenus (position: string) {
  const menus: Menus = {}
  menuTappers.forEach(tap => tap(menus))
  return Object.values(menus).filter(x => x.position === position)
}