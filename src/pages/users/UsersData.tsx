import SelectForm from "@/components/form/SelectForm";
import UserBlockModal from "@/components/modal/UserBlockModal";
import UserDeleteModal from "@/components/modal/UserDeleteModal";
import UserUnblockedModal from "@/components/modal/UserUnblockedModal";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllUserQuery } from "@/redux/user/userApi";
import { useState } from "react";
import { FaBook } from "react-icons/fa";

type User = {
  _id?: string;
  name: string;
  email: string;
  isBlocked?: boolean;
};

const UsersData = () => {
  const { data: allData } = useGetAllUserQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const invoices = allData?.data?.map((item: User) => ({
    _id: item._id,
    name: item?.name,
    email: item?.email,
    isBlocked: item?.isBlocked,
  }));

  const options = [
    { value: "both", label: "Email & Name" },
    { value: "name", label: "Name" },
    { value: "email", label: "Email" },
  ];

  const filteredUsers = invoices?.filter((user: User) => {
    const SearchData = searchTerm
      ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    if (!selectedFilter || selectedFilter === "both") {
      return SearchData;
    } else if (selectedFilter === "name") {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === "email") {
      return user.email.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="px-10 pt-18 ">
      <div className=" text-center font-serif pb-5 ">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Users Data{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
      </div>
      <div className="flex flex-wrap flex-start gap-2">
        <div className="w-60">
          <Input
            className="w-full "
            type="search"
            value={searchTerm}
            placeholder="Search here"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-60">
          <SelectForm
            options={options}
            placeholder="Selecet"
            onChange={setSelectedFilter}
          ></SelectForm>
        </div>
      </div>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-5/6">Name</TableHead>
            <TableHead>Email</TableHead>

            <TableHead className="text-start">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers?.length > 0 ? (
            filteredUsers?.map((user: User) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium font-serif">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="flex flex-wrap  gap-2">
                  <UserDeleteModal id={user._id}></UserDeleteModal>
                  {user?.isBlocked ? (
                    <UserUnblockedModal id={user._id}></UserUnblockedModal>
                  ) : (
                    <UserBlockModal id={user._id}></UserBlockModal>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No Data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersData;
