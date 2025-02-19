import UserBlockModal from "@/components/modal/UserBlockModal";
import UserDeleteModal from "@/components/modal/UserDeleteModal";
import UserUnblockedModal from "@/components/modal/UserUnblockedModal";
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
import { FaBook } from "react-icons/fa";

type User = {
  _id?: string;
  name: string;
  email: string;
  isBlocked: boolean;
};

const UsersData = () => {
  const { data: allData } = useGetAllUserQuery(undefined);

  const invoices = allData?.data?.map((item: User) => ({
    _id: item._id,
    name: item?.name,
    email: item?.email,
    isBlocked: item?.isBlocked,
  }));
  console.log(invoices);
  return (
    <div className="px-10 pt-18">
      <div className=" text-center font-serif  ">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Users Data{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
        <p className="max-w-3/6 mx-auto">
          {" "}
          Explore our most popular books, loved by readers worldwide. From
          fiction to self-help, find your next favorite read today!
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-5/6">Name</TableHead>
            <TableHead>Email</TableHead>

            <TableHead className="text-start">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices?.map((invoice: User) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="flex flex-wrap  gap-2">
                <UserDeleteModal id={invoice._id}></UserDeleteModal>
                {invoice?.isBlocked ? (
                  <UserUnblockedModal id={invoice._id}></UserUnblockedModal>
                ) : (
                  <UserBlockModal id={invoice._id}></UserBlockModal>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersData;
