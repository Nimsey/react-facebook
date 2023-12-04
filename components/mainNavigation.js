import Link from 'next/link';

//importing styles
import styles from '../styles/Home.module.css';
import styles2 from '../styles/MainNav.module.css';


//// MAIN PAGE
export default function MainNavigation() {
    return (
        <div className={styles2.navContainer}>
            <nav className={styles2.navWrap}>
                <ul className={styles2.ulWrapLeft}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <Link href="#">Project 1</Link>
                    <Link href="#">Project 2</Link>
                </ul>
                <ul className={styles2.ulWrapRight}>
                    <li>
                        <Link href="/project2/">Messages</Link>
                    </li>
                    <li>Notifications</li>
                </ul>
            </nav>



        </div>
    )
}