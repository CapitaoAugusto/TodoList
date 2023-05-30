import TodoListProjetoLogo from '../../assets/TodoListProjetoLogo.svg'
import { Link } from "react-router-dom"
import styles from "./index.module.css"

export const LandingPage = () => {
    return (
        <section className={styles.sectionPrincipal}>
           <Link to="/to-do" className={styles.link}>
           <p className={styles.textoPrincipal}>ToDo List</p>
           </Link>
           <img className={styles.img} src={TodoListProjetoLogo} alt="Logo do projeto Todo List"></img>
        </section>
    )
}