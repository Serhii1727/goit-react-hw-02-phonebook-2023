export default function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
