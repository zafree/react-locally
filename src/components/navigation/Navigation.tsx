import { Children, cloneElement } from 'react'

import s from './Navigation.module.sass'
import { INavigation } from '../../api/interface/INavigation'

function Navigation(props: INavigation) {
  return (
    <nav className={s.Navigation}>
      <ul className={s.Navigation__list}>
        {Children.map(props.children, (child) => (
          <li className={s.Navigation__item}>
            {cloneElement(child as never, {
              className: s.Navigation__link,
            })}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
