### Hello Uennki-UI 👋

<!--
**uennki/uennki** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

基于 Element UI 封装的常用业务组件，方便基础业务需求的快捷开发使用，适用 Vue2.0 项目。

### 组件列表

- ProElFormTable 表格形式的表单组件
- ProTable 表格组件

### 插件依赖

- "@vue/babel-helper-vue-jsx-merge-props": "^1.2.1"
- "@vue/babel-preset-jsx": "^1.2.4"
- "element-ui": "^2.15.6"
- "vue": "^2.6.11"

关于上述 [Babel 插件](https://github.com/vuejs/jsx)，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。

### 安装组件

```
yarn add uennki-ui
```

### 引入组件并注册

```
import { ProElFormTable } from 'uennki-ui'
Vue.use( ProElFormTable )
```

ProElFormTable 组件内封装了几种常用表单组件：

- "el-input",
- "el-select",
- "el-date-picker",
- "el-cascader",
- "el-input-number",

使用时，直接传入 componentName 具体组件名称即可。

如果内置的组件不满足使用，还可以传入 render 方法来自定义组件。

### 使用示例

```
<template>
  <ProElFormTable :columns="columns" :data-source="dataSource" />
</template>

<script>
export default {
  data(){
    return {
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
          rules: { required: true },
          componentName: "el-input",
        },
        {
          title: "Age",
          dataIndex: "age",
          rules: { required: true },
          componentName: "el-input-number",
          tableColumnProps: {
            sortable: true,
          },
        },
        {
          title: "Date",
          dataIndex: "date",
          componentName: "el-date-picker",
        },
        {
          title: "Like",
          dataIndex: "like",
          componentName: "el-select",
          options: [
            { label: "cat", value: "0" },
            { label: "dog", value: "1" },
          ],
        },
        {
          title: "Address",
          dataIndex: "address",
          componentName: "el-input",
        },
        {
          title: "Source",
          dataIndex: "source",
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
                  {
                    value: 12,
                    label: "浙江",
                    children: [
                      { value: 13, label: "杭州" },
                      { value: 14, label: "宁波" },
                      { value: 15, label: "嘉兴" },
                    ],
                  },
                ],
              },
            ];
            return (
              <el-cascader
                v-model={row.source}
                options={options}
              ></el-cascader>
            );
          },
        },
      ],
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
      ]
    }
  }
}
</script>
```

### ProElFormTable 组件参数

| 参数        | 说明                              | 类型     | 默认值  |
| ----------- | --------------------------------- | -------- | ------- |
| size        | 组件尺寸                          | string   | 'small' |
| columns     | 表格列的配置描述，具体项见下表    | object[] | -       |
| dataSource  | 表格数据                          | object[] | -       |
| formProps   | 表单属性，参考 element form 组件  | object   | -       |
| formEvents  | 表单事件，参考 element form 组件  | object   | -       |
| tableProps  | 表格属性，参考 element table 组件 | object   | -       |
| tableEvents | 表格事件，参考 element table 组件 | object   | -       |

### ProElFormTable columns 参数配置

| 参数             | 说明                                              | 类型     | 默认值 |
| ---------------- | ------------------------------------------------- | -------- | ------ |
| title            | 标题                                              | string   | -      |
| dataIndex        | 列数据在数据项中对应的字段                        | String   | -      |
| rules            | 表单校验配置，参考 element form 校验规则配置      | object   | -      |
| componentName    | 内置组件名                                        | string   | -      |
| componentProps   | 内置组件属性，参考对应 element 组件属性配置       | object   | -      |
| componentEvents  | 内置组件事件，参考对应 element 组件事件配置       | object   | -      |
| tableColumnProps | 表格项属性，参考 element table-column 属性配置    | object   | -      |
| formItemProps    | 表单项属性，参考 element form-item 属性配置       | object   | -      |
| options          | 内置组件为 el-select 时独有的配置，展示下拉项数据 | object[] | -      |
