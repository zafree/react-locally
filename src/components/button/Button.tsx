import { Link } from 'react-router-dom'
import c from 'classnames'

import { IButton } from '../../api/interface/IButton'
import s from './Button.module.sass'

function Button(props: IButton) {
  // Some flags
  const isLink = typeof props.to !== 'undefined'
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(props.to as string)

  // Extend className
  const classNames = c(s.button, props.className)

  // External
  // http, https, //, mailto, etc.
  if (isExternal) {
    return (
      <a
        className={classNames}
        href={props.to}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    )
  }

  // Internal
  if (isLink) {
    return (
      <Link className={classNames} to={props.to as string}>
        {props.children}
      </Link>
    )
  }

  // Default
  return (
    <button className={classNames} type="button">
      {props.children}
    </button>
  )
}

export default Button
