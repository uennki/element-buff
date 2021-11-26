import { isFunction } from "../../../utils/index";

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
              ];
              return (
                <el-cascader
                  v-model={row.source}
                  options={options}
                ></el-cascader>
              );
            },
          },
          {
            title: "Address",
            dataIndex: "address",
            componentName: "el-input",
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
  render(h) {
    const {
      size,
      dataSource,
      columns,
      getTableEvents,
      getTableProps,
      getFormEvents,
      getFormProps,
    } = this;

    const renderDefaultHeader = ({ rules = {}, title }) => {
      const requestedHeader = (
        <span>
          <i style="color: red">*</i> {title}
        </span>
      );

      return rules.required ? requestedHeader : title;
    };

    const renderDefaultComponent = (column) => {
      const {
        title,
        dataIndex,
        render,
        renderHeader,
        rules,
        tableColumnProps,
        formItemProps,
      } = column;

      return (
        <el-table-column
          resizable={false}
          label={title}
          prop={dataIndex}
          props={tableColumnProps}
          scopedSlots={{
            default: isFunction(render)
              ? ({ row, $index }) => {
                  // 渲染单元格主体内容
                  return (
                    <el-form-item
                      label=""
                      style="margin-bottom: 0px"
                      prop={`dataSource[${$index}][${dataIndex}]`}
                      rules={rules}
                      props={formItemProps}
                    >
                      {render(h, row, $index)}
                    </el-form-item>
                  );
                }
              : "",
            header: isFunction(renderHeader)
              ? () => renderHeader()
              : () => renderDefaultHeader(column),
          }}
        ></el-table-column>
      );
    };

    const renderFormComponent = (column) => {
      const {
        title,
        dataIndex,
        rules,
        tableColumnProps,
        formItemProps,
        componentName,
        componentEvents,
        componentProps,
        options = [],
        renderHeader,
      } = column;

      return (
        <el-table-column
          resizable={false}
          label={title}
          prop={dataIndex}
          props={tableColumnProps}
          scopedSlots={{
            default: ({ row, $index }) => {
              // 渲染单元格主体内容
              return (
                <el-form-item
                  label=""
                  style="margin-bottom: 0px"
                  prop={`dataSource[${$index}][${dataIndex}]`}
                  rules={rules}
                  props={formItemProps}
                >
                  {/* 输入框 */}
                  {componentName === "el-input" && (
                    <el-input
                      v-model={row[`${dataIndex}`]}
                      style="width: 100%"
                      placeholder="请输入"
                      props={{ ...componentProps }}
                      on={{ ...componentEvents }}
                    />
                  )}

                  {/* 数字输入款 */}
                  {componentName === "el-input-number" && (
                    <el-input-number
                      v-model={row[`${dataIndex}`]}
                      style="width: 100%"
                      placeholder="请输入"
                      controls-position="right"
                      props={{ ...componentProps }}
                      on={{ ...componentEvents }}
                    />
                  )}

                  {/* 下拉框 */}
                  {componentName === "el-select" && (
                    <el-select
                      v-model={row[`${dataIndex}`]}
                      style="width: 100%"
                      placeholder="请选择"
                      props={{ ...componentProps }}
                      on={{ ...componentEvents }}
                    >
                      {options.map(({ label, value }) => {
                        return (
                          <el-option label={label} value={value}></el-option>
                        );
                      })}
                    </el-select>
                  )}

                  {/* 日期选择框 */}
                  {componentName === "el-date-picker" && (
                    <el-date-picker
                      type="date"
                      v-model={row[`${dataIndex}`]}
                      value-format="yyyy-MM-dd"
                      style="width: 100%"
                      placeholder="请选择"
                      props={{ ...componentProps }}
                      on={{ ...componentEvents }}
                    ></el-date-picker>
                  )}
                </el-form-item>
              );
            },
            header: isFunction(renderHeader)
              ? () => renderHeader()
              : () => renderDefaultHeader(column),
          }}
        ></el-table-column>
      );
    };

    return (
      <el-form
        class="form-wrapper"
        ref="formRef"
        label-width="0"
        size={size}
        props={{ model: { dataSource }, ...getFormProps }}
        on={getFormEvents}
      >
        <el-table
          ref="tableRef"
          style="width: 100%"
          data={dataSource}
          size={size}
          props={getTableProps}
          on={getTableEvents}
        >
          {columns.map((column) => {
            const { componentName } = column;
            const components = [
              "el-input",
              "el-select",
              "el-date-picker",
              "el-cascader",
              "el-switch",
              "el-input-number",
            ];

            // 返回内置组件
            if (components.includes(componentName)) {
              return renderFormComponent(column);
            }

            // 返回默认组件
            return renderDefaultComponent(column);
          })}
        </el-table>

        <div style="margin-top: 14px">
          <el-button size="small" v-on:click={this.resetFields}>
            Reset
          </el-button>
          <el-button type="primary" size="small" v-on:click={this.validate}>
            Submit
          </el-button>
        </div>
      </el-form>
    );
  },
};
