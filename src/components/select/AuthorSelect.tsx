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
  setAuthorSelect: (authors: string[]) => void;
  authors: string[];
}
const Authorselect: React.FC<SelectedProps> = ({
  setAuthorSelect,
  authors,
}) => {
  const handleSelect = (value: string) => {
    if (value === "All Authors") {
      setAuthorSelect([]);
    } else {
      setAuthorSelect([value]);
    }
  };
  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[50%]">
        <SelectValue placeholder="Select a Authors" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Authors</SelectLabel>
          <SelectItem key="All Authors" value="All Authors">
            All Authors
          </SelectItem>
          {authors.map((author: string) => (
            <SelectItem key={author} value={author}>
              {author}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Authorselect;
