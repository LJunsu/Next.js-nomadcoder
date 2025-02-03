import styles from "../styles/credit.module.css";
import blank_user from "../images/user.png";

export default function Credit({credit}) {

    return (
        <div 
            key={credit.order}
            className={styles.credit_container}
        >
            <img
                src={credit.profile_path === null ? blank_user.src : credit.profile_path}
            />

            <div>
                <h3>{credit.name}</h3>
                <h4>{credit.character}</h4>
                <p>{credit.gender === 1 ? "Woman" : "Man"}</p>
            </div>
        </div>
    )
}