# Search 搜索

搜索通常用于表单，列表页面中，起到对数据进行查询的作用。由element中的输入框、下拉框、时间选择、级联选择四个原生组件封装而成。

### 使用场景

表格、列表展示等页面的数据查询。

### 代码演示

只需要传入数据即可展示

::: demo example description

```vue
<template>
  <ProElSearch />
</template>

<script>
export default {
  data() {
    return {
      message: "hello",
    };
  },
};
</script>
```

:::

### API

内置组件的参数与 element 对应组件配置相一致

| 参数       | 说明 | 类型 | 可选值 | 默认值 |
|:-----------|:-----|:-----|:-------|:-------|
| span       | -    | -    | -      | —      |
| columns    | -    | -    | -      | -      |
| dataSource | -    | -    | -      | -      |
| formProps  | -    | -    | -      | -      |
| formEvents | -    | -    | -      | -      |
