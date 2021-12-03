# FormTable 表单

FormTable 将常规的表单形式，转化成表格的形式，方便用于批量数据的录入。

### 使用场景

相同类型的数据，需要批量录入时候使用。例如批量录入商品信息、发货信息、个人信息等。

### 代码演示

只需要传入数据即可展示

::: demo 目前仅提供输入、数字输入、下拉、日期四种内置组件。如果不满足需求，可以使用 `render` 方法进行自定义组件的渲染

```vue
<template>
  <ProElFormTable :columns="columns" :dataSource="dataSource" />
</template>

<script>
export default {
  data() {
    return {
      dataSource: [
        {
          date: "2016-05-03",
          name: "Tom Smith",
          phone: "15688881111",
          source: "",
          address: "No. 189, Grove St, Los Angeles",
          age: 19,
        },
        {
          date: "2016-05-02",
          name: "Bob Json",
          phone: "13622223333",
          source: "",
          address: "No. 189, Grove St, Los Angeles",
          age: 21,
        },
      ],
      columns: [
        {
          tableColumnProps: {
            type: "selection",
            align: "center",
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          width: 150,
          render: (h, row, $index) => {
            return (
              <el-input
                v-model={row.name}
                style="width: 100%"
                placeholder="请输入"
                props={{}} // 绑定相关属性
                on={{
                  // 绑定相关事件
                  input: (value) => console.log(this),
                }}
              />
            );
          },
        },
        {
          title: "Phone",
          dataIndex: "phone",
          width: 150,
          rules: { required: true },
          componentName: "el-input",
        },
        {
          title: "Age",
          dataIndex: "age",
          width: 150,
          rules: { required: true },
          componentName: "el-input-number",
          tableColumnProps: {
            sortable: true,
          },
        },
        {
          title: "Date",
          dataIndex: "date",
          width: 150,
          componentName: "el-date-picker",
        },
        {
          title: "Like",
          dataIndex: "like",
          width: 150,
          componentName: "el-select",
          options: [
            { label: "cat", value: "0" },
            { label: "dog", value: "1" },
          ],
        },
        {
          title: "Source",
          dataIndex: "source",
          width: 150,
          render: (h, row, $index) => {
            const options = [
              {
                value: 1,
                label: "东南",
                children: [
                  {
                    value: 2,
                    label: "上海",
                    children: [
                      { value: 3, label: "普陀" },
                      { value: 4, label: "黄埔" },
                      { value: 5, label: "徐汇" },
                    ],
                  },
                ],
              },
            ];
            return (
              <el-cascader v-model={row.source} options={options}></el-cascader>
            );
          },
        },
        {
          title: "Address",
          dataIndex: "address",
          width: 150,
          componentName: "el-input",
        },
        {
          title: "Address",
          dataIndex: "address",
          width: 150,
          tableColumnProps: {
            fixed: "right",
          },
          render: (h, row, $index) => {
            return (
              <div>
                <el-button size="mini">up</el-button>
                <el-button type="primary" size="mini">
                  down
                </el-button>
              </div>
            );
          },
        },
      ],
    };
  },
};
</script>
```

:::

### API

内置组件的参数与 element 对应组件配置相一致

| 参数        | 说明                          | 类型   | 可选值 | 默认值 |
| :---------- | :---------------------------- | :----- | :----- | :----- |
| size        | 组件大小                      | string | -      | -      |
| columns     | 布局数据项                    | array  | -      | -      |
| dataSource  | 绑定数据                      | object | -      | -      |
| formProps   | 表单属性同 Element Form 属性  | object | -      | -      |
| formEvents  | 表单事件同 Element Form 事件  | object | -      | -      |
| tableProps  | 表格事件同 Element Table 属性 | object | -      | -      |
| tableEvents | 表格事件同 Element Table 事件 | object | -      | -      |

### columns 配置

以下是 columns 数组对象的相关属性

| 参数             | 说明             | 类型     | 可选值 | 默认值 |
| ---------------- | ---------------- | -------- | ------ | ------ |
| title            | 标题             | string   | -      | -      |
| dataIndex        | 绑定的键名       | string   | -      | -      |
| width            | 列宽             | number   | -      | -      |
| rules            | 校验规则         | object   | -      | -      |
| tableColumnProps | 表格列属性配置   | object   | -      | -      |
| formItemProps    | 表单项属性配置   | object   | -      | -      |
| componentName    | 内置组件名       | string   | -      | -      |
| componentEvents  | 内置组件事件     | object   | -      | -      |
| componentProps   | 内置组件属性     | object   | -      | -      |
| options          | 下拉项数组       | array    | -      | -      |
| render           | 单元格自定义渲染 | function | -      | -      |
| renderHeader     | 表头自定义渲染   | function | -      | -      |
