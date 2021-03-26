import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/ex1">
            <div className={styles.card}>
              <h3>useState example 1-0 &rarr;</h3>
            </div>
          </Link>
          <Link href="/ex1-1">
            <div className={styles.card}>
              <h3>useState example 1-1 &rarr;</h3>
            </div>
          </Link>

          <Link href="/useEffect-1">
            <div className={styles.card}>
              <h3>useEffect &rarr;</h3>
              <p>case 1</p>
            </div>
          </Link>
          <Link href="/useEffect-2">
            <div className={styles.card}>
              <h3>useEffect &rarr;</h3>
              <p>case 2 - mounted 될때만 실행하고 싶은 경우</p>
            </div>
          </Link>
          <Link href="/useEffect-3">
            <div className={styles.card}>
              <h3>useEffect &rarr;</h3>
              <p>case 3 - 특정값이 업데이트 될 때만 실행하고 싶은 경우</p>
            </div>
          </Link>
          <Link href="/useContext-1">
            <div className={styles.card}>
              <h3>useContext &rarr;</h3>
              <p>case 1 - context 활용하고 싶은 경우</p>
            </div>
          </Link>
          <Link href="/useReducer-1">
            <div className={styles.card}>
              <h3>useReducer &rarr;</h3>
              <p>case 1 - useReducer 활용하고 싶은 경우</p>
            </div>
          </Link>
          <Link href="/useReducer-2">
            <div className={styles.card}>
              <h3>useReducer &rarr;</h3>
              <p>case 2 - useReducer을 활용한 상태 관리</p>
            </div>
          </Link>
          <Link href="/useMemo-1">
            <div className={styles.card}>
              <h3>useMemo &rarr;</h3>
              <p>case 1 - useMemo를 활용한 연산 최적화</p>
            </div>
          </Link>
          <Link href="/useCallback-1">
            <div className={styles.card}>
              <h3>useCallback &rarr;</h3>
              <p>case 1 - useCallback를 활용한 랜더링 최적화</p>
            </div>
          </Link>
          <Link href="/useRef-1">
            <div className={styles.card}>
              <h3>useRef &rarr;</h3>
              <p>case 1 - ref 활용법</p>
            </div>
          </Link>
          <Link href="/useCustom-1">
            <div className={styles.card}>
              <h3>useCustom &rarr;</h3>
              <p>case 1 - custom Hook 만드는법</p>
            </div>
          </Link>

          <Link href="/usePromise-1">
            <div className={styles.card}>
              <h3>usePromise &rarr;</h3>
              <p>case 1 - usePromise 사용 예</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
