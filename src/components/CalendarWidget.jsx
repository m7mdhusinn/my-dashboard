import React, { useState, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date(2021, 2, 13)); // March 13, 2021
  const fpRef = useRef(null);

  const changeMonth = (direction) => {
    if (fpRef.current && fpRef.current.flatpickr) {
      const currentMonth = fpRef.current.flatpickr.currentMonth;
      const currentYear = fpRef.current.flatpickr.currentYear;
      let newMonth = direction === "prev" ? currentMonth - 1 : currentMonth + 1;
      let newYear = currentYear;

      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }

      fpRef.current.flatpickr.changeMonth(direction === "prev" ? -1 : 1);
    }
  };

  return (
    <div>
      {/* External Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-black">
          {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
        </h2>
        <div className="flex gap-1">
          <button onClick={() => changeMonth("prev")} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button onClick={() => changeMonth("next")} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <Flatpickr
        ref={fpRef}
        value={date}
        options={{
          inline: true,
          static: true,
          disableMobile: true,
          defaultDate: date,
          dateFormat: "Y-m-d",
          monthSelectorType: "static",
        }}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        className="w-full calendar-flatpickr"
      />
    </div>
  );
}

