import { IAppLayout } from '../../api/interface/IAppLayout'

import s from './AppLayout.module.sass'

function AppLayout(props: IAppLayout) {
  return <div className={s.AppLayout}>{props.children}</div>
}

export default AppLayout
