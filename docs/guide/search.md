# Search 搜索

搜索通常用于表单，列表页面中，起到对数据进行查询的作用。由 element 中的输入框、下拉框、时间选择、级联选择四个原生组件封装而成。

### 使用场景

表格、列表展示等页面的数据查询。

### 代码演示

只需要传入数据即可展示

::: demo 目前仅提供输入、下拉、日期三种常用组件，还提供 `render` 方法进行自定义组件的渲染

```vue
<template>
  <ProElSearch
    :columns="columns"
    :dataSource="dataSource"
    :span="12"
    @on-search="onSearch"
  />
</template>

<script>
export default {
  data() {
    return {
      dataSource: {},
      columns: [
        {
          title: "名称",
          dataIndex: "name",
          componentName: "el-input",
        },
        {
          title: "编号",
          dataIndex: "code",
          componentName: "el-input",
        },
        {
          title: "负责人",
          dataIndex: "person",
          render: (h, row) => {
            return (
              <el-input
                vModel={row.name}
                placeholder="请输入"
                style="width:100%;"
              ></el-input>
            );
          },
        },
        {
          title: "状态",
          dataIndex: "status",
          componentName: "el-select",
          options: [
            {
              label: "开启",
              value: 1,
            },
            {
              label: "关闭",
              value: 0,
            },
          ],
        },
        {
          title: "日期",
          dataIndex: "date",
          componentName: "el-date-picker",
        },
      ],
    };
  },
  methods: {
    onSearch(values) {
      alert(JSON.stringify(values));
    },
  },
};
</script>
```

:::

### API

内置组件的参数与 element 对应组件配置相一致

| 参数       | 说明                           | 类型    | 可选值 | 默认值 |
| :--------- | :----------------------------- | :------ | :----- | :----- |
| columns    | 布局数据项                     | array   | -      | -      |
| dataSource | 绑定数据                       | object  | -      | -      |
| formEvents | 表单事件同 Element Form Events | object  | -      | -      |
| formProps  | 表单属性同 Element Form        | object  | -      | -      |
| span       | 列数                           | number  | -      | 6      |
| collapse   | 展示收起按钮                   | boolean | -      | false  |

### columns 配置

以下是 columns 数组对象的相关属性

| 参数            | 说明               | 类型   | 可选值 | 默认值 |
| --------------- | ------------------ | ------ | ------ | ------ |
| title           | 标题               | string | -      | -      |
| dataIndex       | 绑定的键名         | string | -      | -      |
| options         | 下拉框和级联框数据 | array  | -      | -      |
| componentProps  | 组件自身属性       | object | -      | -      |
| componentEvents | 组件自身事件       | object | -      | -      |
