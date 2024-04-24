import { Link } from 'react-router-dom'
import { IHeader } from '../../api/interface/IHeader'

import s from './Header.module.sass'

function Header(props: IHeader) {
  return (
    <header className={s.Header}>
      <div className={s.Header__container}>
        <div className={s.Header__row}>
          <Link to="/" className={s.Header__logo}>
            Logo
          </Link>
          <div className={s.Header__navigation}>{props.children}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
