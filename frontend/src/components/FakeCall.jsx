import { triggerSOS } from "../services/api";

export default function FakeCall() {
  const user = JSON.parse(localStorage.getItem("user"));

  const acceptFakeCall = async () => {
    await triggerSOS({
      userId: user._id,
      reason: "Fake call accepted – possible threat",
      location: "28.61,77.21"
    });

    alert("Fake Call Accepted 📞 → SOS Sent");
  };

  return (
    <button
      onClick={acceptFakeCall}
      className="bg-yellow-500 px-4 py-2 rounded"
    >
      Accept Fake Call
    </button>
  );
}
