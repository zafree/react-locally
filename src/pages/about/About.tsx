import s from './About.module.sass'

function About() {
  return (
    <div className={s.About}>
      <div className={s.About__container}>
        <h1 className={s.About__heading}>About</h1>
      </div>
    </div>
  )
}

export default About
