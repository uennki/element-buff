# Search 搜索

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

### 使用场景

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

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
| :--------- | :--- | :--- | :----- | :----- |
| span       | -    | -    | -      | —      |
| columns    | -    | -    | -      | -      |
| dataSource | -    | -    | -      | -      |
| formProps  | -    | -    | -      | -      |
| formEvents | -    | -    | -      | -      |
