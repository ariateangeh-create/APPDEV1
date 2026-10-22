
import { useState } from 'react';
import styles from './App.module.css';

function GoogleIcon() {
  return (
    <svg
      className={styles.googleIcon}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3c1.6-4.8 6.1-8.3 11.4-8.3Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className={styles.facebookIcon}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M18.1 27V17.4h3.2l.5-3.8h-3.7v-2.4c0-1.1.3-1.9 1.9-1.9H22V5.9c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v2.5h-3.5v3.8h3.5V27h4.4Z"
      />
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      activeTab === 'login'
        ? 'Login demo only.'
        : 'Sign up demo only.'
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.loginCard}>
        <div className={styles.leafPanel}>
          <img
            src="/leaf-panel.png"
            alt="Decorative botanical leaf pattern"
          />
        </div>

        <div className={styles.formPanel}>
          <h1 className={styles.heading}>
            <strong>Hello,</strong>
            <span>Guyss!</span>
          </h1>

          <div className={styles.tabs}>
            <button
              type="button"
              className={
                activeTab === 'login'
                  ? styles.activeTab
                  : styles.inactiveTab
              }
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>

            <button
              type="button"
              className={
                activeTab === 'signup'
                  ? styles.activeTab
                  : styles.inactiveTab
              }
              onClick={() => setActiveTab('signup')}
            >
              SignUp
            </button>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              autoComplete="email"
              required
            />

            <div className={styles.passwordField}>
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                aria-label="Enter Password"
                autoComplete={
                  activeTab === 'login'
                    ? 'current-password'
                    : 'new-password'
                }
                required
              />

              <button
                className={styles.passwordToggle}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button className={styles.loginButton} type="submit">
              {activeTab === 'login' ? 'Login' : 'SignUp'}
            </button>
          </form>

          <div className={styles.orText}>Or</div>

          <div className={styles.socialButtons}>
            <button
              className={styles.socialButton}
              type="button"
              aria-label="Continue with Google"
            >
              <GoogleIcon />
            </button>

            <button
              className={styles.socialButton}
              type="button"
              aria-label="Continue with Facebook"
            >
              <FacebookIcon />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
