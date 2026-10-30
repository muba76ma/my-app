// @vitest-environment happy-dom
import { expect, it } from 'vitest'
import { setupCounter } from './main.js'

it('counts clicks', () => {
  const el = document.createElement('button')
  setupCounter(el)
  el.click()
  expect(el.innerHTML).toBe('count is 1')
})
