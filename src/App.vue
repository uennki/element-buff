<template>
  <div id="app">
    <ProElFormTable :columns="columns" :dataSource="dataSource" />
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";

export default {
  name: "App",
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
          phone: "1362222123123333",
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
        },
        {
          title: "联系方式",
          dataIndex: "phone",
          rules: { required: true },
          render: (h, row, $index) => {
            return (
              <el-input
                v-model={row.phone}
                style="width: 100%"
                placeholder="请输入"
                props={{}} // 绑定相关属性
                on={{
                  // 绑定相关事件
                  input: (value) => console.log(value),
                }}
              />
            );
          },
        },
        {
          title: "年龄",
          dataIndex: "age",
          rules: { required: true },
          componentName: "el-input-number",
          tableColumnProps: {
            sortable: true,
          },
        },
        {
          title: "出生日期",
          dataIndex: "date",
          componentName: "el-date-picker",
        },
        {
          title: "职业",
          dataIndex: "like",
          componentName: "el-select",
          options: [
            { label: "工人", value: "0" },
            { label: "其他", value: "1" },
          ],
        },
        {
          title: "联系地址",
          dataIndex: "address",
          componentName: "el-input",
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
  mounted() {
    const element = document.querySelector(".js-tilt");
    VanillaTilt.init(element);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 32px;
}
</style>
