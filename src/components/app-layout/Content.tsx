import { IContent } from '../../api/interface/IAppLayout'
import s from './Content.module.sass'

function Content(props: IContent) {
  return <main className={s.content}>{props.children}</main>
}

export default Content
