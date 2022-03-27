import { useState } from "react";
import DatePicker from "react-datepicker";
import DatePickerOutlineSVG from "public/assets/icons/date-picker-outline.svg";
import * as S from "./styles";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

interface Props {
  label: string;
  placeholder?: string;
  onChange: (newDate: Date | null) => void;
}

const DateInput = ({ label, placeholder, onChange }: Props) => {
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newDate: Date | null) => {
    setIsOpen(false);

    if (!newDate) return;

    onChange(newDate);
    setDate(newDate);
  };

  return (
    <S.Wrapper onClick={() => setIsOpen(true)}>
      <S.Label>{label}</S.Label>

      <S.DatePickerWrapper>
        <DatePicker
          onChange={handleChange}
          selected={date}
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholder}
          open={isOpen}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          onBlur={() => setIsOpen(false)}
          onClickOutside={() => setIsOpen(false)}
        />
        <DatePickerOutlineSVG />
      </S.DatePickerWrapper>
    </S.Wrapper>
  );
};

export default DateInput;
