<template>
  <el-form
    ref="formRef"
    label-width="0"
    :size="size"
    :model="{ dataSource }"
    v-bind="getFormProps"
    v-on="getFormEvents"
    class="form-wrapper"
  >
    <el-table
      ref="tableRef"
      style="width: 100%"
      :data="dataSource"
      :size="size"
      v-bind="getTableProps"
      v-on="getTableEvents"
    >
      <el-table-column
        v-for="item in columns"
        :key="item.id"
        :label="item.title"
        :prop="item.dataIndex"
        :resizable="false"
        v-bind="item.tableColumnProps || {}"
      >
        <!-- 表单组件渲染判断 -->
        <template v-if="item.componentName" v-slot:default="{ row, $index }">
          <el-form-item
            label=""
            :required="item.required"
            :prop="`dataSource[${$index}][${item.dataIndex}]`"
            :rules="item.rules"
          >
            <el-input
              v-if="item.componentName === 'el-input'"
              v-model="row[`${item.dataIndex}`]"
              style="width: 100%"
              placeholder="请输入"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            />

            <el-input-number
              v-if="item.componentName === 'el-input-number'"
              v-model="row[`${item.dataIndex}`]"
              style="width: 100%"
              placeholder="请输入"
              controls-position="right"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            />

            <el-select
              v-if="item.componentName === 'el-select'"
              v-model="row[`${item.dataIndex}`]"
              style="width: 100%"
              placeholder="请选择"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            >
              <el-option
                v-for="option in item.options || []"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              >
              </el-option>
            </el-select>

            <el-switch
              v-if="item.componentName === 'el-switch'"
              v-model="row[`${item.dataIndex}`]"
              active-value="1"
              inactive-value="0"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            />

            <el-date-picker
              v-if="item.componentName === 'el-date-picker'"
              v-model="row[`${item.dataIndex}`]"
              type="date"
              placeholder="请选择"
              value-format="yyyy-MM-dd"
              style="width: 100%"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            >
            </el-date-picker>

            <el-cascader
              v-if="item.componentName === 'el-cascader'"
              v-model="row[`${item.dataIndex}`]"
              :options="item.options || []"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            ></el-cascader>

            <el-upload
              class="avatar-uploader"
              list-type="picture-card"
              action="https://jsonplaceholder.typicode.com/posts/"
              :auto-upload="false"
              :file-list="row[`${item.dataIndex}`]"
              v-if="item.componentName === 'el-upload'"
              v-bind="item.componentProps || {}"
              v-on="item.componentEvents || {}"
            >
              <i class="el-icon-plus"></i>

              <template v-slot:file="{ file }">
                <div>
                  <img
                    class="el-upload-list__item-thumbnail"
                    src="http://iph.href.lu/200x200"
                    alt=""
                  />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </template>

        <!-- 自定义render -->
        <!-- <template v-else-if="item.render" v-slot:default="{ row, $index }">
          {{ typeof item.render === "function" && item.render(row, $index) }}
        </template> -->

        <!-- 必填项表头标题 -->
        <template
          v-if="item.required || (item.rules && item.rules.required)"
          v-slot:header
        >
          <div>
            <span style="color: #f56c6c">*</span>
            {{ item.title }}
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 14px"></div>
    <el-button size="small" @click="resetFields"> Reset </el-button>
    <el-button type="primary" size="small" @click="validate">
      Submit
    </el-button>
  </el-form>
</template>

<script>
export default {
  name: "ProElFormTable",
  props: {
    size: {
      type: String,
      default: "small",
    },
    columns: {
      type: Array,
      default: function () {
        return [
          {
            tableColumnProps: {
              type: "selection",
              align: "center",
            },
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            tableColumnProps: {
              filters: [
                { text: "Tom Smith", value: "Tom Smith" },
                { text: "Bob Json", value: "Bob Json" },
              ],
              "filter-method": (value, row, column) =>
                this.filterTag(value, row, column),
              "filter-placement": "bottom-end",
            },
            render: (h) => {
              return <div>"hello"</div>;
            },
          },
          {
            title: "TelPhone",
            dataIndex: "phone",
            key: "phone",
            required: true,
            rules: { required: true },
            componentName: "el-input",
          },
          {
            title: "Date",
            dataIndex: "date",
            key: "date",
            componentName: "el-date-picker",
          },
          {
            title: "Like",
            dataIndex: "like",
            key: "like",
            componentName: "el-select",
            options: [
              { label: "cat", value: "0" },
              { label: "dog", value: "1" },
            ],
          },
          {
            title: "Alive",
            dataIndex: "alive",
            key: "alive",
            componentName: "el-switch",
          },
          {
            title: "Source",
            dataIndex: "source",
            key: "source",
            componentName: "el-cascader",
            options: [
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
                    value: 7,
                    label: "江苏",
                    children: [
                      { value: 8, label: "南京" },
                      { value: 9, label: "苏州" },
                      { value: 10, label: "无锡" },
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
              {
                value: 17,
                label: "西北",
                children: [
                  {
                    value: 18,
                    label: "陕西",
                    children: [
                      { value: 19, label: "西安" },
                      { value: 20, label: "延安" },
                    ],
                  },
                  {
                    value: 21,
                    label: "新疆维吾尔族自治区",
                    children: [
                      { value: 22, label: "乌鲁木齐" },
                      { value: 23, label: "克拉玛依" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Max",
            dataIndex: "max",
            key: "max",
            componentName: "el-input-number",
            tableColumnProps: {
              sortable: true,
            },
          },
          {
            title: "fileList",
            dataIndex: "fileList",
            key: "fileList",
            componentName: "el-upload",
            componentProps: {
              "on-change": (file, fileList) => {
                // console.log(file, fileList);
              },
              "on-success": (file, fileList) => {
                console.log(file, fileList);
              },
            },
          },
        ];
      },
    },
    dataSource: {
      type: Array,
      default: function () {
        return [
          {
            date: "2016-05-03",
            name: "Tom Smith",
            phone: "15688881111",
            address: "No. 189, Grove St, Los Angeles",
            remark: "No. 189, Grove St, Los Angeles",
            like: "0",
            alive: "0",
            max: 19,
            fileList: [],
          },
          {
            date: "2016-05-02",
            name: "Bob Json",
            phone: "13622223333",
            address: "No. 189, Grove St, Los Angeles",
            remark: "No. 189, Grove St, Los Angeles",
            like: "1",
            alive: "1",
            max: 21,
            fileList: [],
          },
        ];
      },
    },
    formProps: {
      type: Object,
      default: function () {
        return {};
      },
    },
    formEvents: {
      type: Object,
      default: function () {
        return {};
      },
    },
    tableProps: {
      type: Object,
      default: function () {
        return {};
      },
    },
    tableEvents: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    getFormProps() {
      let defaultProps = {
        showMessage: false,
      };
      return { ...defaultProps, ...this.formProps };
    },
    getFormEvents() {
      let defaultEvents = {};
      return { ...defaultEvents, ...this.formEvents };
    },
    getTableProps() {
      let defaultProps = {
        border: false,
        stripe: false,
        "header-cell-style": {
          background: "#fafafa",
          color: "#606266",
        },
      };
      return { ...defaultProps, ...this.tableProps };
    },
    getTableEvents() {
      let defaultEvents = {};
      return { ...defaultEvents, ...this.tableEvents };
    },
  },
  methods: {
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] == value;
    },

    handleRemove(file) {
      console.log(file);
    },

    resetFields() {
      // 重置表单
      this.$refs.formRef.resetFields();
    },

    validate(success, error) {
      // 表单校验
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          alert(JSON.stringify(this.dataSource));
          success && typeof success === "function" && success();
        } else {
          error && typeof error === "function" && error();
          return false;
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>

<style scoped>
.form-wrapper >>> .el-form-item {
  margin-bottom: 0 !important;
}

.form-wrapper >>> .avatar-uploader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
}

.form-wrapper >>> .el-upload--picture-card {
  max-width: 40px !important;
  max-height: 40px !important;
  line-height: 40px !important;
  overflow: hidden;
}

.form-wrapper >>> .el-upload--picture-card i {
  font-size: 14px;
}

.form-wrapper >>> .el-upload-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.form-wrapper >>> .el-upload-list__item {
  max-width: 40px !important;
  max-height: 40px !important;
  margin-bottom: 0 !important;
  overflow: hidden;
}
</style>
