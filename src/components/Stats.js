export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length; // Derived State
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = +((packedItems * 100) / numItems).toFixed();
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
