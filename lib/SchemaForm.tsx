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
  },
  setup(props) {
    return () => {
      const { schema, value, uiSchema } = props;
      return (
        <SchemaItem schema={schema} value={value} uiSchema={uiSchema || {}} />
      );
    };
  },
});
