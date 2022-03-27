import Button from "components/atoms/Button";
import DateInput from "components/atoms/DateInput";
import TextInput from "components/atoms/TextInput";
import Tabs from "components/molecules/Tabs";
import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { FilterTabItem, FilterTabProps, ValuesType } from "./types";

const FilterTab = ({ items, shadow = true }: FilterTabProps) => {
  const [values, setValues] = useState<ValuesType>({});

  useEffect(() => {
    const obj: ValuesType = {};
    items.forEach((item) => {
      obj[item.key] = {};
      item.fields.forEach((field) => {
        obj[item.key][field.key] = field.defaultValue || null;
      });
    });

    setValues(obj);
  }, [items]);

  const handleChangeValue = useCallback(
    ({
      item,
      fieldKey,
      newValue,
    }: {
      item: FilterTabItem;
      fieldKey: string;
      newValue: string | Date | null;
    }) => {
      setValues((prevValues) => ({
        ...prevValues,
        [item.key]: {
          ...prevValues[item.key],
          [fieldKey]: newValue,
        },
      }));
    },
    []
  );

  const renderFields = useCallback(
    (item: FilterTabItem) => {
      const { fields, submitButtonText, onSubmit } = item;

      return (
        <S.FieldsWrapper>
          {fields.map((field) => {
            const {
              label,
              defaultValue,
              placeholder,
              type,
              width,
              key,
              onChange,
            } = field;

            const completeKey = `${item.key}-${key}`;

            if (type === "date") {
              return (
                <S.Field
                  key={key}
                  style={{
                    width: `calc(${width || 0} + 4rem)`,
                  }}
                >
                  <DateInput
                    key={completeKey}
                    label={label}
                    placeholder={placeholder}
                    onChange={(newDate) => {
                      if (onChange) {
                        onChange(newDate);
                        return;
                      }

                      handleChangeValue({
                        item,
                        fieldKey: key,
                        newValue: newDate,
                      });
                    }}
                  />
                </S.Field>
              );
            }

            return (
              <S.Field
                key={key}
                style={{
                  width: `calc(${width || 0} + 4rem)`,
                }}
              >
                <TextInput
                  key={completeKey}
                  label={label}
                  defaultValue={String(defaultValue || "")}
                  placeholder={placeholder}
                  type={type}
                  onChange={(e) => {
                    if (onChange) {
                      onChange(e.target.value);
                      return;
                    }

                    handleChangeValue({
                      item,
                      fieldKey: key,
                      newValue: e.target.value,
                    });
                  }}
                />
              </S.Field>
            );
          })}
          <Button onClick={() => onSubmit(values)}>{submitButtonText}</Button>
        </S.FieldsWrapper>
      );
    },
    [values, handleChangeValue]
  );

  return (
    <S.Wrapper>
      <S.TabWrapper>
        <Tabs
          items={items.map((item) => ({
            key: item.key,
            title: item.title,
            content: renderFields(item),
          }))}
        />
      </S.TabWrapper>
      {shadow && <S.Shadow />}
    </S.Wrapper>
  );
};

export default FilterTab;
