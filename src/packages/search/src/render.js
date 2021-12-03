import { isFunction } from "../../../utils/index";

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
    minCollapse: {
      type: Number,
      default: 3,
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
      if (this.showMore) return this.columns.slice(0, this.minCollapse);
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
      this.$emit("on-search", this.dataSource);
    },
    handleShowMore() {
      this.showMore = !this.showMore;
    },
  },
  render(h) {
    const {
      span,
      columns,
      getColumns,
      dataSource,
      formProps,
      formEvents,
      getShowTitle,
    } = this;

    const renderComponent = ({ render }) => {
      return render(h, dataSource);
    };

    const formComponent = ({
      dataIndex,
      componentName,
      componentProps,
      componentEvents,
      options = [],
    }) => {
      if (componentName === "el-input") {
        return (
          <el-input
            v-model={dataSource[dataIndex]}
            style="width: 100%"
            placeholder="请输入"
            props={{ ...componentProps }}
            on={{ ...componentEvents }}
          />
        );
      }

      if (componentName === "el-select") {
        return (
          <el-select
            v-model={dataSource[dataIndex]}
            style="width: 100%"
            placeholder="请选择"
            props={{ ...componentProps }}
            on={{ ...componentEvents }}
          >
            {options.map(({ label, value }) => {
              return <el-option label={label} value={value}></el-option>;
            })}
          </el-select>
        );
      }

      if (componentName === "el-date-picker") {
        return (
          <el-date-picker
            type="date"
            v-model={dataSource[dataIndex]}
            value-format="yyyy-MM-dd"
            style="width: 100%"
            placeholder="请选择"
            props={{ ...componentProps }}
            on={{ ...componentEvents }}
          ></el-date-picker>
        );
      }
    };

    const defaultComponent = ({ dataIndex }) => {
      return dataSource[dataIndex];
    };

    const createComponent = (column) => {
      const { render, componentName } = column;
      const components = ["el-input", "el-select", "el-date-picker"];

      // 返回自定义组件
      if (isFunction(render)) {
        return renderComponent(column);
      }

      // 返回内置组件
      if (components.includes(componentName)) {
        return formComponent(column);
      }

      // 返回默认组件
      return defaultComponent(column);
    };

    const createButtons = () => {
      return (
        <el-col span={span}>
          <el-form-item label="">
            <slot name="default">
              {columns.length <= 3 ? null : (
                <el-button type="text" vOn:click={this.handleShowMore}>
                  {getShowTitle}
                </el-button>
              )}

              <el-button size="small" vOn:click={this.handleReset}>
                重置
              </el-button>
              <el-button type="primary" vOn:click={this.handleSubmit}>
                搜索
              </el-button>
            </slot>
          </el-form-item>
        </el-col>
      );
    };

    return (
      <el-form
        ref="form"
        label-width="80px"
        props={{ ...{ model: dataSource }, ...formProps }}
        on={{ ...formEvents }}
      >
        <el-row gutter={20}>
          {getColumns.map((column) => {
            const { title, dataIndex } = column;

            return (
              <el-col span={span}>
                <el-form-item label={title} prop={dataIndex}>
                  {createComponent(column)}
                </el-form-item>
              </el-col>
            );
          })}

          {createButtons()}
        </el-row>
      </el-form>
    );
  },
};
