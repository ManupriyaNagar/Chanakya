// components/RoseIcon.jsx
export default function RoseIcon({ className = "w-6 h-6" }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2s4 4 4 7-2 6-4 6-4-3-4-6 4-7 4-7z" />
        <path d="M12 12v10" />
        <path d="M9 18h6" />
      </svg>
    );
  }
  