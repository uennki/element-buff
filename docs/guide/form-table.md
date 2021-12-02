# FormTable 表单

搜索通常用于表单，列表页面中，起到对数据进行查询的作用。由 element 中的输入框、下拉框、时间选择、级联选择四个原生组件封装而成。

### 使用场景

表格、列表展示等页面的数据查询。

### 代码演示

只需要传入数据即可展示

::: demo 目前仅提供输入、下拉、级联、日期四种内置组件

```vue
<template>
  <ProElFormTable />
</template>

<script>
export default {
  data() {
    return {
      dataSource: {},
      columns: [
        {
          label: "input",
          dataIndex: "input",
          componentName: "el-input",
        },
        {
          label: "select",
          dataIndex: "select",
          componentName: "el-select",
          options: [
            {
              label: "hello",
              value: 1,
            },
            {
              label: "world",
              value: 2,
            },
          ],
        },
        {
          label: "date",
          dataIndex: "date",
          componentName: "el-date-picker",
        },
        {
          label: "cascader",
          dataIndex: "cascader",
          componentName: "el-cascader",
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                    },
                    {
                      value: "fankui",
                      label: "反馈",
                    },
                  ],
                },
              ],
            },
          ],
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

| 参数       | 说明                           | 类型   | 可选值 | 默认值 |
| :--------- | :----------------------------- | :----- | :----- | :----- |
| columns    | 布局数据项                     | array  | -      | []     |
| dataSource | 绑定数据                       | object | -      | {}     |
| formEvents | 表单事件同 Element Form Events | object | -      | {}     |
| formProps  | 表单属性同 Element Form        | object | -      | {}     |
| span       | 列数                           | number | -      | 12     |

### columns 配置

以下是 columns 数组对象的相关属性

| 参数            | 说明               | 类型   | 可选值 | 默认值 |
| --------------- | ------------------ | ------ | ------ | ------ |
| label           | 标题               | string | -      | -      |
| dataIndex       | 绑定的键名         | string | -      | -      |
| options         | 下拉框和级联框数据 | array  | -      | -      |
| componentProps  | 组件自身属性       | object | -      | -      |
| componentEvents | 组件自身事件       | object | -      | -      |
