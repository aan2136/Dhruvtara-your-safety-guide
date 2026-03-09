import { triggerSOS } from "../services/api";

export default function SafetyToggle() {
  const user = JSON.parse(localStorage.getItem("user"));

  const enableSafety = async () => {
    await triggerSOS({
      userId: user._id,
      reason: "High Safety Mode Enabled",
      location: "28.61,77.21"
    });

    alert("High Safety Mode ON 🚨");
  };

  return (
    <button
      onClick={enableSafety}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Enable High Safety
    </button>
  );
}

