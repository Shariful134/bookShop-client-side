import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface SelectedProps {
  setCategoriesSelect: (categories: string[]) => void;
  categories: string[];
}
const CategorySelect: React.FC<SelectedProps> = ({
  setCategoriesSelect,
  categories,
}) => {
  const handleSelect = (value: string) => {
    if (value === "All Category") {
      setCategoriesSelect([]);
    } else {
      setCategoriesSelect([value]);
    }
  };
  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[50%]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem key="All Category" value="All Category">
            All Category
          </SelectItem>
          {categories.map((category: string) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
