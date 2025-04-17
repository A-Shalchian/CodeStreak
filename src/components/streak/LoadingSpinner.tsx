// components/Streak/LoadingSpinner.tsx
export default function LoadingSpinner() {
    return (
      <div className="w-full py-8 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  