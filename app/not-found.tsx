import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">404 · Off the roadmap</p>
      <h1>Looks like this page<br />hasn’t shipped.</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link className="button button-primary" href="/">Back to portfolio →</Link>
    </main>
  );
}
