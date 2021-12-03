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
        return [];
      },
    },
    dataSource: {
      type: Array,
      default: function () {
        return [];
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
          isFunction(success) && success();
        } else {
          isFunction(error) && error();
          return false;
        }
      });
    },
  },
  render: function (h) {
    const {
      size,
      dataSource,
      columns,
      getTableEvents,
      getTableProps,
      getFormEvents,
      getFormProps,
    } = this;

    const defaultHeader = ({ rules = {}, title }) => {
      const requestedHeader = (
        <span>
          <i style="color: red">*</i> {title}
        </span>
      );

      return rules.required ? requestedHeader : title;
    };

    const defaultComponent = (column) => {
      const {
        title,
        dataIndex,
        width,
        render,
        renderHeader,
        rules,
        tableColumnProps,
        formItemProps,
      } = column;

      return (
        <el-table-column
          width={width}
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
              : () => defaultHeader(column),
          }}
        ></el-table-column>
      );
    };

    const formComponent = (column) => {
      const {
        title,
        dataIndex,
        width,
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
          width={width}
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
              : () => defaultHeader(column),
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
              "el-input-number",
            ];

            // 返回内置组件
            if (components.includes(componentName)) {
              return formComponent(column);
            }

            // 返回默认组件
            return defaultComponent(column);
          })}
        </el-table>
      </el-form>
    );
  },
};
