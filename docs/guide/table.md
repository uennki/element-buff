# Table 表格

Table 在原有的组件基础上封住了分页，以及自定义单元格渲染的功能。

### 使用场景

数据列表的展示

### 代码演示

只需要传入数据即可展示

::: demo 除了常规渲染，还提供 `render` 方法进行自定义组件的渲染

```vue
<template>
  <ProElTable
    :columns="columns"
    :dataSource="dataSource"
    :paginationProps="paginationProps"
    :paginationEvent="paginationEvent"
  />
</template>

<script>
export default {
  data() {
    return {
      paginationProps: {
        total: 100,
      },
      paginationEvent: {
        currentChange: (value) => {
          this.onChange(value);
        },
      },
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
          title: "姓名",
          dataIndex: "name",
          width: 100,
        },
        {
          title: "联系方式",
          dataIndex: "phone",
          width: 100,
        },
        {
          title: "年龄",
          dataIndex: "age",
          width: 100,
        },
        {
          title: "出生日期",
          dataIndex: "date",
          width: 100,
        },
        {
          title: "联系地址",
          dataIndex: "address",
          width: 200,
        },
        {
          title: "编辑",
          width: 150,
          tableColumnProps: {
            fixed: "right",
          },
          render: (h, row, $index) => {
            return (
              <div>
                <el-button size="mini">删除</el-button>
                <el-button type="primary" size="mini">
                  编辑
                </el-button>
              </div>
            );
          },
        },
      ],
    };
  },
  methods: {
    onChange(page) {
      console.log(page);
    },
  },
};
</script>
```

:::

### API

| 参数             | 说明                          | 类型   | 可选值 | 默认值 |
| :--------------- | :---------------------------- | :----- | :----- | :----- |
| size             | 组件大小                      | string | -      | -      |
| columns          | 布局数据项                    | array  | -      | -      |
| dataSource       | 绑定数据                      | object | -      | -      |
| paginationProps  | 表单属性同 Element 分页属性   | object | -      | -      |
| paginationEvents | 表单事件同 Element 分页事件   | object | -      | -      |
| tableProps       | 表格事件同 Element Table 属性 | object | -      | -      |
| tableEvents      | 表格事件同 Element Table 事件 | object | -      | -      |

### columns 配置

以下是 columns 数组对象的相关属性

| 参数             | 说明             | 类型     | 可选值 | 默认值 |
| ---------------- | ---------------- | -------- | ------ | ------ |
| title            | 标题             | string   | -      | -      |
| dataIndex        | 绑定的键名       | string   | -      | -      |
| width            | 列宽             | number   | -      | -      |
| tableColumnProps | 表格列属性配置   | object   | -      | -      |
| render           | 单元格自定义渲染 | function | -      | -      |
| renderHeader     | 表头自定义渲染   | function | -      | -      |
