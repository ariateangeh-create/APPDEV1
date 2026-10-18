
import styles from "./Signup.module.css";
import logo from "./logo.svg";

export default function Signup({ onLoginClick }) {
  return (
    <main className={styles.signup}>
      <section className={styles.left}>
        <h1 className={styles.tagline}>
          Start your journey
          <br />
          with <strong>Design Spacee</strong>
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
          <h2>Sign-up</h2>

          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              autoComplete="name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              autoComplete="new-password"
              minLength={8}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              autoComplete="new-password"
              minLength={8}
              required
            />

            <button type="submit">Create Account</button>
          </form>

          <p className={styles.loginText}>
            Already have an account?{" "}
            <button
              type="button"
              className={styles.loginLink}
              onClick={onLoginClick}
            >
              Login Here
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
