"use client";

import { Dropdown, DropdownItem } from "flowbite-react";

export type ColorSource = "misolla1" | "misolla2" | "tailwind4" | "flowbiteFigma3" | "flowbiteReact127";

interface ColorSourceOption {
  value: ColorSource;
  label: string;
}

const colorSourceOptions: ColorSourceOption[] = [
  { value: "misolla2", label: "Misolla2" },
  { value: "misolla1", label: "Misolla1" },
  { value: "tailwind4", label: "Tailwind4" },
  { value: "flowbiteFigma3", label: "FlowbiteFigma" },
  { value: "flowbiteReact127", label: "FlowbiteReact" },
];

interface ColorSourceDropdownProps {
  selectedSource: ColorSource;
  onSourceChange: (source: ColorSource) => void;
}

export function ColorSourceDropdown({ selectedSource, onSourceChange }: ColorSourceDropdownProps) {
  const selectedOption = colorSourceOptions.find((option) => option.value === selectedSource)!;

  return (
    <Dropdown label={selectedOption?.label} color="alternative" arrowIcon={true}>
      {colorSourceOptions.map((option) => (
        <DropdownItem key={option.value} onClick={() => onSourceChange(option.value)}>
          {option.label}
        </DropdownItem>
      ))}
    </Dropdown>
  );
}
