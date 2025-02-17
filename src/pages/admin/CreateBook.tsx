import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaBook } from "react-icons/fa";
import SelectForm from "@/components/form/SelectForm";
import SelectDatePicker from "@/components/form/SelectDatePicker";

const FormSchema = z.object({
  title: z.string().nonempty({
    message: "title is Required",
  }),
  author: z.string().nonempty({
    message: "author is Required",
  }),
  price: z.number().min(1, {
    message: "price is Required",
  }),
  category: z.string().nonempty({
    message: "category is Required",
  }),
  description: z.string().nonempty({
    message: "description is Required",
  }),
  quantity: z.number({
    message: "quantity is Required",
  }),
  inStock: z.string().nonempty({
    message: "inStock is Required",
  }),
  publicationDate: z.string().nonempty({
    message: "publicationDate is Required",
  }),
  publisher: z.string().nonempty({
    message: "publisher is Required",
  }),
  imageURL: z.string().nonempty({
    message: "imageURL is Required",
  }),
});

const stockOption = [
  { value: "true", label: "true" },
  { value: "false", label: "false" },
];

const categoryOption = [
  { value: "Fiction", label: "Fiction" },
  { value: "Science", label: "Science" },
  { value: "SelfDevelopment", label: "SelfDevelopment" },
  { value: "Poetry", label: "Poetry" },
  { value: "Religious", label: "Religious" },
];

const CreateBook = () => {
  // const [addBook] = useCreatebookMutation();
  // console.log(addBook);

  // const onsubmit: SubmitHandler<FieldValues> = async (data) => {
  //   const bookData = {
  //     ...data,
  //     price: Number(data?.price),
  //     quantity: Number(data?.quantity),
  //     inStock: Boolean(data?.inStock),
  //   };
  //   console.log(bookData);
  //   try {
  //     const res = (await addBook(bookData)) as TResponse<TBook>;
  //     console.log(res);
  //     if (res?.error) {
  //       toast.error(res?.error?.data?.message);
  //     } else {
  //       toast.success("Book Created SuccessFully");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(data);
  // };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      author: "",
      price: 33,
      category: "",
      description: "",
      quantity: 36,
      inStock: "",
      publicationDate: "",
      publisher: "",
      imageURL: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = {
      ...data,
      price: Number(data?.price),
      quantity: Number(data?.quantity),
      inStock: Boolean(data?.inStock),
    };
    console.log(formData);
  }

  return (
    <div className="pt-16 px-10">
      <div className=" text-center font-serif pt-8 pb-5 ">
        <h2 className="text-3xl mb-2 text-cyan-500">
          -- <FaBook className="inline" /> Book Create{" "}
          <FaBook className="inline" /> --{" "}
        </h2>
        <p className="max-w-3/6 mx-auto">
          Discover in-depth details about this book, including its author,
          category, price, and availability. Get insights into the story and why
          readers love it!
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className=" flex flex-wrap  gap-x-2 gap-y-5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="author" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <SelectForm
                      options={categoryOption}
                      placeholder="select a Category"
                      onChange={field.onChange}
                    ></SelectForm>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="quantity" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="inStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>InStock</FormLabel>
                  <FormControl>
                    <SelectForm
                      options={stockOption}
                      placeholder="select a Stock"
                      onChange={field.onChange}
                    ></SelectForm>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publicationDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-1">
                  <FormLabel>PublicationDate</FormLabel>
                  <FormControl>
                    <SelectDatePicker
                      value={field.value}
                      onSelect={field.onChange}
                    ></SelectDatePicker>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publisher"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publisher</FormLabel>
                  <FormControl>
                    <Input placeholder="publisher" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="imageURl" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {/* <div>
        <form onSubmit={handleCreate}>
          <div className=" flex flex-wrap justify-center items-center  gap-x-2 gap-y-5 ">
            <div className=" w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className=" w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className=" w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className=" w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className=" w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className=" w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </div>
          <div className=" text-center ">
            <button
              type="submit"
              className="btn mb-2 mx-auto  px-5 mt-2  bg-cyan-300 hover:bg-cyan-400 border-1 border-cyan-500 hover:border-cyan-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </div>
    // <Row justify="center" align="middle">
    //   <Divider>
    //     {" "}
    //     <Title style={{ color: "#23A8E1" }} level={4}>
    //       Create a Book
    //     </Title>
    //   </Divider>
    //   <PHForm onSubmit={onsubmit} defaultValues={defaultValues}>
    //     <Row justify="center" align="middle" gutter={8}>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHInput label="Title" type="text" name="title"></PHInput>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHInput label="Author" type="text" name="author"></PHInput>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHInput label="Price" type="number" name="price"></PHInput>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         {" "}
    //         <PHInput label="Quantity" type="number" name="quantity"></PHInput>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHSelect
    //           label="Category"
    //           name="category"
    //           options={categoryOption}
    //         ></PHSelect>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHInput
    //           label="Description"
    //           type="text"
    //           name="description"
    //         ></PHInput>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHDatePicker
    //           label="PublicationDate"
    //           name="publicationDate"
    //         ></PHDatePicker>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHSelect
    //           label="InStock"
    //           name="inStock"
    //           options={stockOption}
    //         ></PHSelect>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHInput label="Publisher" type="text" name="publisher"></PHInput>
    //       </Col>
    //       <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
    //         <PHInput
    //           label="IamgeURL Link"
    //           type="text"
    //           name="imageURL"
    //         ></PHInput>
    //       </Col>
    //       <Col>
    //         <Button htmlType="submit">Submit</Button>
    //       </Col>
    //     </Row>
    //   </PHForm>
    // </Row>
  );
};

export default CreateBook;
