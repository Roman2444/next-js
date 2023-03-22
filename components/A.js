import Link from "next/link";
import styles from "../styles/A.module.css"

export default function A({ href, text }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
