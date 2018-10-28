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

export class SearchListComponent extends HTMLElement {
  public connectedCallback () {
    const mountPoint = document.createElement('div')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)
    ReactDOM.render(searchListReact({}), mountPoint)
  }
}
