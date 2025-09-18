import { UnorderedListOutlined } from '@ant-design/icons';
import { Button, Form, Input, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';

const DragEditTable = () => {
  const [form] = Form.useForm();

  const removeItem = (index: number) => {
    const names = form.getFieldValue('names');
    names.splice(index, 1);
    form.setFieldValue('names', names);
  };

  const columns: ColumnType<any>[] = [
    {
      title: '',
      width: 20,
      render: () => {
        return (
          <UnorderedListOutlined
            style={{
              cursor: 'grabbing',
            }}
          />
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, __, index) => (
        <Form.Item noStyle name={[index, 'name']}>
          <Input />
        </Form.Item>
      ),
    },
    // age
    {
      title: 'Age',
      dataIndex: 'age',
      render: (_, __, index) => (
        <Form.Item noStyle name={[index, 'age']}>
          <Input />
        </Form.Item>
      ),
    },
    // 操作,
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, __, index) => (
        <Button onClick={() => removeItem(index)}>Remove</Button>
      ),
    },
  ];

  return (
    <>
      <Form
        form={form}
        initialValues={{
          names: [],
        }}
      >
        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('At least 2 passengers'));
                }
              },
            },
          ]}
        >
          {(fields, { add }) => (
            <>
              <Table size="small" columns={columns} dataSource={fields} />
              <Button
                onClick={() => {
                  add({ name: 'hellow' }, 0);
                }}
              >
                新增数据
              </Button>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
};

export default DragEditTable;
