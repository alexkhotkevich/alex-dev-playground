import { createEvent, createStore } from 'effector'
import { dark, light } from 'theme'

export const toggleMenu = createEvent()
export const closeMenu = createEvent()
export const openMenu = createEvent()
export const $isMenuOpen = createStore(false)
  .on(toggleMenu, state => !state)
  .on(openMenu, _state => true)
  .on(closeMenu, _state => false)

export const toggleTheme = createEvent()
export const setTheme = createEvent<'dark' | 'light'>()
export const $theme = createStore(dark)
  .on(toggleTheme, state => (state === dark ? light : dark))
  .on(setTheme, (_state, payload) => (payload === 'dark' ? dark : light))
