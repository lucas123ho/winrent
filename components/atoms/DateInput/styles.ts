import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  .react-datepicker {
    font-size: 1.28rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.fonts.family};
    border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
    box-shadow: 0 20px 64px rgb(8 102 83 / 6%);

    button {
      padding: 1rem;
    }
  }

  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before {
    border-top-color: ${({ theme }) => theme.colors.borderColor};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.borderColor};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.colors.primary} !important;
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    width: 3rem;
    margin: 0.3rem 0.8rem;
    padding: 1rem 0;
    border-radius: 0.8rem;
  }

  .react-datepicker__day:hover {
    background-color: ${({ theme }) => theme.colors.borderColor};
  }

  .react-datepicker__current-month {
    font-size: 1.5104rem;
  }

  .react-datepicker-popper {
    left: 50% !important;
    transform: translate(-50%, -4rem) !important;
  }

  .react-datepicker__triangle {
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.labelColor};
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fonts.sizes.extraNormal};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.family};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;
