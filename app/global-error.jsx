"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Global Error: {error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
