// Same rule as scripts/generate-resume.js: current roles first,
// then ended roles by end date, newest first (ties: newer start first).
function monthKey(d?: string) {
  if (!d || d === "Present") return Infinity
  const [m, y] = d.split("/").map(Number)
  return y * 12 + m
}

export function byRecency<T extends { start: string; end: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => monthKey(b.end) - monthKey(a.end) || monthKey(b.start) - monthKey(a.start),
  )
}
