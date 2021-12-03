<template>
  <el-form
    :model="dataSource"
    v-bind="formProps"
    v-on="formEvents"
    label-position="right"
    style="padding-top: 18px"
    ref="form"
  >
    <el-row :gutter="20">
      <el-col v-for="(column, index) in getColumns" :span="span" :key="index">
        <el-form-item :label="column.title" :prop="`${column.dataIndex}`">
          <el-input
            v-if="column.componentName === 'el-input'"
            v-model="dataSource[column.dataIndex]"
            v-bind="column.componentProps"
            v-on="column.componentEvents"
            placeholder="请输入内容"
            style="width: 100%"
          ></el-input>

          <el-select
            v-if="column.componentName === 'el-select'"
            v-model="dataSource[column.dataIndex]"
            v-bind="column.componentProps"
            v-on="column.componentEvents"
            placeholder="请选择"
            style="width: 100%"
          >
            <el-option
              v-for="item in column.options || []"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-date-picker
            v-if="column.componentName === 'el-date-picker'"
            v-model="dataSource[column.dataIndex]"
            v-bind="column.componentProps"
            v-on="column.componentEvents"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
            style="width: 100%"
          >
          </el-date-picker>

          <el-cascader
            v-if="column.componentName === 'el-cascader'"
            v-model="dataSource[column.dataIndex]"
            v-bind="column.componentProps"
            v-on="column.componentEvents"
            :options="column.options || []"
            style="width: 100%"
          ></el-cascader>
        </el-form-item>
      </el-col>

      <el-col :span="span">
        <el-form-item label="">
          <slot name="default">
            <el-button type="text" @click="handleShowMore">
              {{ getShowTitle }}
            </el-button>
            <el-button size="small" @click="handleReset">重置</el-button>
            <el-button type="primary" size="small" @click="handleSubmit">
              搜索
            </el-button>
          </slot>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "ProElSearch",
  props: {
    span: {
      type: Number,
      default: 6,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: function () {
        return [];
      },
    },
    dataSource: {
      type: Object,
      default: function () {
        return {};
      },
    },
    formProps: {
      type: Object,
      default: function () {
        return {
          size: "small",
          "label-width": "80px",
        };
      },
    },
    formEvents: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      showMore: this.collapse,
    };
  },
  computed: {
    getColumns: function () {
      if (this.showMore) return this.columns.slice(0, 3);
      return this.columns.slice(0);
    },
    getShowTitle: function () {
      if (this.showMore) return "展开";
      return "收起";
    },
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSubmit() {
      alert(JSON.stringify(this.dataSource));
    },
    handleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
