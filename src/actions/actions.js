// action types

export const ADD_BUG = 'ADD_BUG'

// other constants
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_OPEN: 'SHOW_OPEN'
}

// action creators

export function addBug(bugObj) {
  return { type: 'ADD_BUG', bugObj }
}