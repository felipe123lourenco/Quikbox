import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>QuikBox</h1>
      <h1 className={estilos.Titulo}>Sistema de gestão de entregas.</h1>
    </div>
  </section>)
}

export default Banner