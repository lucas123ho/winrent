export interface FilterTabItemFields {
  label: string;
  placeholder?: string;
  type: "text" | "number" | "date";
  onChange?: (value: string | Date | null) => void;
  defaultValue?: string | number;
  width?: string;
  key: string;
}

export interface FilterTabItem {
  key: string;
  title: string;
  fields: FilterTabItemFields[];
  onSubmit: (values: any) => void;
  onChange?: (values: any) => void;
  submitButtonText?: string;
}

export interface ValuesType {
  [x: string]: { [x: string]: string | number | Date | null };
}

export interface FilterTabProps {
  items: FilterTabItem[];
  shadow?: boolean;
}
