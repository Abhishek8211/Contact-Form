import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={`${styles.navigation} container`}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
