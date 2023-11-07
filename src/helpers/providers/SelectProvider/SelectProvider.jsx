import { SelectContext } from "@helpers/context";

export default function SelectProvider({
  children,
  selectedOption,
  changeSelectedOption,
}) {
  return (
    <SelectContext.Provider value={{ selectedOption, changeSelectedOption }}>
      {children}
    </SelectContext.Provider>
  );
}
