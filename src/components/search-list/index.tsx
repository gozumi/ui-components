import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles.css'

interface IProps {
  value?: string
}

function searchListReact (props: IProps) {
  const { value } = props
  return (
    <input value={value} />
  )
}

/**
 * Defines a component that renders a search box with related search results.
 */
export class SearchListComponent extends HTMLElement {
  public connectedCallback () {
    const mountPoint = document.createElement('div')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)
    ReactDOM.render(searchListReact({}), mountPoint)
  }
}
