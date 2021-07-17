import { Input, Form, Button, Space, notification } from "antd";

const FormItem = Form.Item;
const [form] = Form.useForm(); //?hint: This constant contains all of the form methods.

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  //--------------------------------------------------------------------------------------
  //TODO: This is the submit handler for the form. Pass it to the form to make it work.
  //?hint: You can learn about how to do so in Ant designs Form documentation => https://ant.design/components/form/#API
  const handleSubmit = (values: IForm) =>
    notification.success({ description: "Submitted" });

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      <Form onFinish={undefined}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
          <Button
            //TODO: Ant designs Form has a method that can reset the fields. Pass to to the reset button below.
            //?hint: the form const defined above contains the said method.
            onClick={() => {
              // form.{METHOD NAME}
            }}
          >
            reset
          </Button>
        </Space>
      </Form>
    </div>
  );
}
