import { Button, Col, Divider, Row } from "antd";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../components/form/PHInput";
import PHDatePicker from "../../components/form/PHDatePicker";
import { useCreatebookMutation } from "../../redux/book/bookApi";
import { TBook, TResponse } from "../../types/type";
import { toast } from "sonner";
import { Typography } from "antd";

const { Title } = Typography;

const stockOption = [
  { value: "true", label: "true" },
  { value: "false", label: "false" },
];

const categoryOption = [
  { value: "Fiction", label: "Fiction" },
  { value: "Science", label: "Science" },
  { value: "SelfDevelopment", label: "SelfDevelopment" },
  { value: "Poetry", label: "Poetry" },
  { value: "Religious", label: "ScieReligiousnce" },
];

const defaultValues = {
  title: "The Silent Garden",
  author: "Sophia Larkin",

  category: "Fiction",
  description:
    "A captivating collection of poems that celebrate the beauty of nature and the profound connection between humans and the Earth. Larkin's words evoke powerful emotions that resonate deeply with readers.",

  publisher: "Poetry Works",
};

const CreateBook = () => {
  const [addBook] = useCreatebookMutation();
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data,
      price: Number(data?.price),
      quantity: Number(data?.quantity),
      inStock: Boolean(data?.inStock),
    };
    console.log(bookData);
    try {
      const res = (await addBook(bookData)) as TResponse<TBook>;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success("Book Created SuccessFully");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <Row justify="center" align="middle">
      <Divider>
        {" "}
        <Title style={{ color: "#23A8E1" }} level={4}>
          Create a Book
        </Title>
      </Divider>
      <PHForm onSubmit={onsubmit} defaultValues={defaultValues}>
        <Row justify="center" align="middle" gutter={8}>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput label="Title" type="text" name="title"></PHInput>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput label="Author" type="text" name="author"></PHInput>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput label="Price" type="number" name="price"></PHInput>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            {" "}
            <PHInput label="Quantity" type="number" name="quantity"></PHInput>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              label="Category"
              name="category"
              options={categoryOption}
            ></PHSelect>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              label="Description"
              type="text"
              name="description"
            ></PHInput>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHDatePicker
              label="PublicationDate"
              name="publicationDate"
            ></PHDatePicker>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              label="InStock"
              name="inStock"
              options={stockOption}
            ></PHSelect>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput label="Publisher" type="text" name="publisher"></PHInput>
          </Col>
          <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput
              label="IamgeURL Link"
              type="text"
              name="imageURL"
            ></PHInput>
          </Col>
          <Col>
            <Button htmlType="submit">Submit</Button>
          </Col>
        </Row>
      </PHForm>
    </Row>
  );
};

export default CreateBook;
