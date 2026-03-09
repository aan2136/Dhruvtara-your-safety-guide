import { startTrip } from "../services/api";
import SafetyToggle from "../components/SafetyToggle";
import FakeCall from "../components/FakeCall";

export default function Journey() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Please login first</p>;
  }

  const start = async () => {
    await startTrip({
      userId: user._id,
      mode: "WALK",
      destination: "Home",
      vehicleNumber: "",
      safetyIndex: 82
    });

    alert("Trip Started Safely ✅");
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Your Journey</h2>

      <button
        onClick={start}
        className="bg-green-600 text-white px-4 py-2 rounded"
