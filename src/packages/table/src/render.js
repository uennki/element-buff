import { isFunction } from "../../../utils/index";

export default {
  name: "ProElTable",
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
                    input: (value) => console.log("hello world"),
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
            title: "Address",
            dataIndex: "address",
            renderHeader: (h) => {
              return <div>hello</div>;
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
            age: 19,
          },
          {
            date: "2016-05-02",
            name: "Bob Json",
            phone: "13622223333",
            address: "No. 189, Grove St, Los Angeles",
            age: 21,
          },
        ];
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
    pagination: {
      type: Boolean,
      default: true,
    },
    paginationProps: {
      type: Object,
      default: function () {
        return {
          total: 100,
        };
      },
    },
    paginationEvents: {
      type: Object,
      default: function () {
        return {
          "current-change": (val) => {
            console.log(val);
          },
        };
      },
    },
  },
  computed: {
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
  methods: {},
  render(h) {
    const {
      size,
      dataSource,
      columns,
      getTableEvents,
      getTableProps,
      pagination,
      paginationProps,
      paginationEvents,
    } = this;

    const renderDefaultComponent = (column) => {
      const { title, dataIndex, render, renderHeader, tableColumnProps } =
        column;

      return (
        <el-table-column
          resizable={false}
          label={title}
          prop={dataIndex}
          props={tableColumnProps}
          scopedSlots={{
            default: isFunction(render)
              ? ({ row, $index }) => render(h, row, $index)
              : "",
            header: isFunction(renderHeader) ? () => renderHeader(h) : "",
          }}
        ></el-table-column>
      );
    };

    return (
      <div class="pro-el-table-wrapper">
        <el-table
          ref="tableRef"
          style="width: 100%"
          data={dataSource}
          size={size}
          props={getTableProps}
          on={getTableEvents}
        >
          {columns.map((column) => renderDefaultComponent(column))}
        </el-table>

        {pagination && (
          <div style="text-align: right; padding: 14px 0;">
            <el-pagination
              background
              layout="prev, pager, next"
              props={paginationProps}
              on={paginationEvents}
            ></el-pagination>
          </div>
        )}
      </div>
    );
  },
};
