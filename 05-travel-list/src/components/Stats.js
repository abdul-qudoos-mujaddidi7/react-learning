export default function Stats({ items }) {
  if (!items.length)
    return(
  <p className="stats"><em>Start adding some Item to your packing list🚀</em></p>
  )
  const total = items.length;
  const picked = items.filter((item) => item.picked).length;
  const percentage =
    total === 0 ? 0 : Math.round((picked / total) * 100);

  return (
    <footer className="stats">
      <em>
        You have {total} item{total !== 1 ? "s" : ""} on your list, and you
        already picked {picked} ({percentage}%)
      </em>
    </footer>
  );
}
