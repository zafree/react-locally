import { Children } from 'react'

import s from './Navigation.module.sass'
import { INavigation } from '../../api/interface/INavigation'

function Navigation(props: INavigation) {
  const arrayChildren = Children.toArray(props.children)
  return (
    <nav className={s.Navigation}>
      <ul className={s.Navigation__list}>
        {arrayChildren.map((child) => {
          return <li className={s.Navigation__item}>{child}</li>
        })}
      </ul>
    </nav>
  )
}

export default Navigation
