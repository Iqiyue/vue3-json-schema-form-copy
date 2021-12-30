import { defineComponent, reactive, ref, watchEffect } from "vue";
import { createUseStyles } from "vue-jss";

import demos from "./demos";
console.log(demos);
import MonacoEditor from "./components/MonacoEditor";
import demo from "./demos/demo";
import { Schema } from "../lib/types";
import SchemaForm from "../lib/SchemaForm";
const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "1200px",
    margin: "0 auto",
  },
  menu: {
    marginBottom: 20,
  },
  menuButton: {
    appearance: "none",
    borderWidth: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-block",
    padding: 15,
    borderRadius: 5,
    "&:hover": {
      background: "#efefef",
    },
  },
  menuSelected: {
    background: "#337ab7",
    color: "#fff",
    "&:hover": {
      background: "#337ab7",
    },
  },
  content: {
    display: "flex",
  },
  code: {
    width: 700,
    flexShrink: 0,
  },
  form: {
    padding: "0 20px",
    flexGrow: 1,
  },
  codePanel: {
    minHeight: 400,
    marginBottom: 20,
  },
  uiAndValue: {
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      width: "46%",
    },
  },
});
function toJson(data: any) {
  return JSON.stringify(data, null, 2);
}
export default defineComponent({
  setup() {
    const selectedRef = ref<number>(1);
    const demo: {
      schema: Schema | null;
      data: any;
      uiSchema: any;
      schemaCode: string;
      dataCode: string;
      uiSchemaCode: string;
      customValidate: ((d: any, e: any) => void) | undefined;
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: "",
      uiSchemaCode: "",
      dataCode: "",
      customValidate: undefined,
    });

    watchEffect(() => {
      const index = selectedRef.value;
      const d: any = demos[index];
      demo.schema = d.schema;
      demo.data = d.default;
      demo.uiSchema = d.uiSchema;
      demo.schemaCode = toJson(d.schema);
      demo.dataCode = toJson(d.default);
      demo.uiSchemaCode = toJson(d.uiSchema);
      demo.customValidate = d.customValidate;
    });

    function handleCodeChange(
      field: "schema" | "data" | "uiSchema",
      value: string
    ) {
      try {
        const json = JSON.parse(value);
        demo[field] = json;
        (demo as any)[`${field}Code`] = value;
      } catch (error) {
        console.log("json解析失败");
      }
    }
    const handleSchemaChange = (v: string) => handleCodeChange("schema", v);
    const handleUISchemaChange = (v: string) => handleCodeChange("uiSchema", v);
    const handleDataChange = (v: string) => handleCodeChange("data", v);
    const handleChange = (data: any) => {
      demo.data = data;
      data.dataCode = toJson(data);
    };

    const classesRef = useStyles();
    return () => {
      const classes = classesRef.value;
      return (
        <div class={classes.container}>
          <div class={classes.menu}>
            <h1>vue3 JsonSchema Form</h1>
            <div>
              {demos.map((demo, index) => {
                return (
                  <button
                    class={{
                      [classes.menuButton]: true,
                      [classes.menuSelected]: index == selectedRef.value,
                    }}
                    onClick={() => (selectedRef.value = index)}
                  >
                    {demo.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div class={classes.content}>
            <div class={classes.code}>
              <MonacoEditor
                code={demo.schemaCode}
                class={classes.codePanel}
                onChange={handleSchemaChange}
                title="Schema"
              />
              <div class={classes.uiAndValue}>
                <MonacoEditor
                  code={demo.uiSchemaCode}
                  class={classes.codePanel}
                  onChange={handleUISchemaChange}
                  title="UISchema"
                />
                <MonacoEditor
                  code={demo.dataCode}
                  class={classes.codePanel}
                  onChange={handleDataChange}
                  title="Value"
                />
              </div>
            </div>
            <div class={classes.form}>
              <SchemaForm
                value={demo.data}
                schema={demo.schema || {}}
                uiSchema={demo.uiSchema || {}}
                onChange={handleChange}
              ></SchemaForm>
            </div>
          </div>
        </div>
      );
    };
  },
});
