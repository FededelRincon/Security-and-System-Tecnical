import styles from "./Form.module.css";

export default function FormComponent() {
  return (
    <div className={styles.FormContainer}>
      <div>
        Form
      </div>

      <form action="#" method="POST">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input className={styles.field} type="text" placeholder="Nombre" name="fullName" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className={styles.field} type="email" placeholder="Email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea className={styles.field} cols={20} rows={5} placeholder="Your message..." name="description" id="message"></textarea>
        </div>
        <div >
            <input className={styles.button} type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  )
}
