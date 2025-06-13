import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyDatePicker = ({ value, onChange }: { value?: Date; onChange?: (date: Date | undefined) => void }) => {
  const [selected, setSelected] = useState<Date | undefined>(value);

  const handleSelect = (date?: Date) => {
    setSelected(date);
    if (onChange) onChange(date);
  };

  return (
    <div className="flex flex-col items-start">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleSelect}
        footer={
          selected ? (
            <span className="text-blue-600 font-semibold">Izabrano: {selected.toLocaleDateString()}</span>
          ) : (
            <span className="text-gray-400">Izaberi datum</span>
          )
        }
        className="rounded-xl shadow-lg bg-white p-4"
      />
    </div>
  );
};

export default MyDatePicker; 