import s from './Home.module.sass'

function Home() {
  return (
    <div className={s.Home}>
      <div className={s.Home__container}>
        <h1 className={s.Home__heading}>Home</h1>
      </div>
    </div>
  )
}

export default Home
