import { Schema, UISchema } from "./types";
import { defineComponent, PropType } from "vue";
import SchemaItem from "./SchemItem";

export default defineComponent({
  name: "SchemaForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    uiSchema: {
      type: Object as PropType<UISchema>,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    const handleChange = (data: any) => {
      props.onChange(data);
    };
    return () => {
      const { schema, value, uiSchema } = props;
      return (
        <SchemaItem
          schema={schema}
          value={value}
          uiSchema={uiSchema || {}}
          onChange={handleChange}
        />
      );
    };
  },
});
