/* eslint-disable import/prefer-default-export */
import React from 'react'
import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

React.useLayoutEffect = React.useEffect

export function render(
  _url: string,
  _ssrManifest?: string,
  options?: RenderToPipeableStreamOptions
) {
  return renderToPipeableStream(
    <React.StrictMode>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </React.StrictMode>,
    options
  )
}
