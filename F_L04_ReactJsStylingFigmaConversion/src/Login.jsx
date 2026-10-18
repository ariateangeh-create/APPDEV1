
import styles from "./Login.module.css";
import logo from "./logo.svg";

export default function Login({ onSignupClick }) {
  return (
    <main className={styles.login}>
      <section className={styles.left}>
        <h1 className={styles.tagline}>
          Need webdesign
          <br />
          for your business?
          <br />
          <strong>Design Spacee</strong>
          <br />
          will help you.
        </h1>

        <img
          className={styles.logo}
          src={logo}
          alt="Design Spacee logo"
        />

        <p className={styles.link}>figma.com/@designspacee</p>
      </section>

      <section className={styles.right}>
        <div className={styles.form}>
          <h2>Sign-in</h2>

          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              required
            />

            <button type="submit">Login</button>
          </form>

          <p className={styles.signup}>
            Don't have an account?{" "}
            <button
              type="button"
              className={styles.signupLink}
              onClick={onSignupClick}
            >
              Signup Here
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
