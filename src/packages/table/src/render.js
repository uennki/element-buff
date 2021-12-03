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
        return [];
      },
    },
    dataSource: {
      type: Array,
      default: function () {
        return [];
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
    paginationProps: {
      type: Object,
      default: function () {
        return {
          total: 0,
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
      paginationProps,
      paginationEvents,
    } = this;

    const renderDefaultComponent = (column) => {
      const {
        title,
        width,
        dataIndex,
        render,
        renderHeader,
        tableColumnProps,
      } = column;

      return (
        <el-table-column
          resizable={false}
          label={title}
          prop={dataIndex}
          width={width}
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
          props={{ ...getTableProps }}
          on={{ ...getTableEvents }}
        >
          {columns.map((column) => renderDefaultComponent(column))}
        </el-table>

        {paginationProps?.total ? (
          <div style="text-align: right; margin-top: 20px;">
            <el-pagination
              background
              layout="prev, pager, next"
              props={{ ...paginationProps }}
              on={{ ...paginationEvents }}
            ></el-pagination>
          </div>
        ) : null}
      </div>
    );
  },
};
