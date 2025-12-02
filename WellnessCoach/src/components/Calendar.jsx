import React, { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-08-19"));
  const [currentMonth, setCurrentMonth] = useState(7); // 0=Jan, 7=August
  const [currentYear, setCurrentYear] = useState(2025);

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

  // Har month me days calculate karna
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // First day ka position (offset)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="w-80 p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-lg font-semibold mb-2 bg-">Date & Time Selection</h2>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-2 py-1 rounded hover:bg-gray-200"
          onClick={handlePrevMonth}
        >
          ◀
        </button>
        <h3 className="font-bold">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h3>
        <button
          className="px-2 py-1 rounded hover:bg-gray-200"
          onClick={handleNextMonth}
        >
          ▶
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 text-center text-gray-600 font-medium">
        {daysOfWeek.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1 text-center mt-2">
        {/* Empty cells before month start */}
        {Array((firstDayOfMonth + 6) % 7)
          .fill(null)
          .map((_, i) => (
            <div key={i}></div>
          ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateObj = new Date(currentYear, currentMonth, day);
          const isSelected =
            dateObj.toDateString() === selectedDate.toDateString();

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(dateObj)}
              className={`p-2 rounded-lg text-sm ${
                isSelected
                  ? "bg-yellow-200 font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}