import styles from "./About.module.css";

export default function AboutComponent() {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.example}>
        <p className={styles.AboutText}>Hola, soy Lionel Messi, jugador profesional de fútbol y 
          considerado uno de los mejores de todos los tiempos. He tenido el privilegio de jugar 
          para el FC Barcelona durante la mayor parte de mi carrera, tambien jugue 2 años en el 
          Paris Saint-Germain y actualmente juego para el Inter Miami. Con múltiples títulos y 
          premios, mi amor por el fútbol sigue siendo tan fuerte como el primer día. Fuera del 
          campo, me dedico a causas benéficas y disfruto de momentos con mi familia.</p>
      </div>
    </div>
  )
}
