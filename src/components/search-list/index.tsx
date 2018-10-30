import * as React from 'react'
import { concatClassNames } from 'utilities'
import './styles.css'

export interface ISearchListProps {
  className?: string
  labelClassName?: string
  inputClassName?: string
  buttonClassName?: string
  buttonIconClassName?: string
  buttonLabelClassName?: string
  hitsClassName?: string
  term?: string
  hits: string[]
  label?: string
  buttonLabel?: string
  placeholder?: string
  hideLabel?: boolean
  hideButton?: boolean
  onTermChange?: (newTerm: string) => void
  onConfirmTerm?: () => void
}

export function SearchListReact (props: ISearchListProps) {
  const {
    className, inputClassName, term, hits, label, labelClassName, placeholder,
    buttonClassName, buttonLabel, buttonIconClassName, hitsClassName, onConfirmTerm,
    onTermChange, buttonLabelClassName, hideLabel, hideButton
  } = props
  const hitsToRender = hits ? hits : []
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => onTermChange && onTermChange(evt.target.value)
  const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => onKeyPress(evt.charCode, onConfirmTerm)
  const handleConfirnTerm = (_evt: React.MouseEvent<HTMLButtonElement>) => onConfirmation(onConfirmTerm)
  const baseClass = 'search-list'

  return (
    <div className={concatClassNames([baseClass, className])}>
      {
        !hideLabel &&
        (
          <label className={concatClassNames([`${baseClass}__label`, labelClassName])}>
            {label}
          </label>
        )
      }
      <input
        className={concatClassNames([`${baseClass}__input`, inputClassName])}
        value={term}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {
        !hideButton &&
        (
          <button className={concatClassNames([`${baseClass}__button`, buttonClassName])} onClick={handleConfirnTerm}>
            <span className={concatClassNames([`${baseClass}__button-label`, buttonLabelClassName])}>
              {buttonLabel}
            </span>
            <span className={concatClassNames([`${baseClass}__button-icon`, buttonIconClassName])}></span>
          </button>
        )
      }
      {renderHits(hitsToRender, baseClass, hitsClassName)}
    </div>
  )
}

function renderHits (hits: string[], baseClass: string, hitsClassName: string) {
  if (hits.length > 0) {
    return (
      <ul className={concatClassNames([`${baseClass}__hits`, hitsClassName])}>
        {hits.map(hitMapper)}
      </ul>
    )
  } else {
    return null
  }
}

function hitMapper (hit: string, idx: number) {
  return (
    <li key={idx}>{hit}</li>
  )
}

function onKeyPress (charCode: number, confirm: () => void) {
  (charCode === 13) && onConfirmation(confirm)
}

function onConfirmation (confirm: () => void) {
  confirm && confirm()
}
