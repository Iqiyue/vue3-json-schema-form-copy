import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";
import { isObject } from "@vue/shared";
import SchemItem from "../SchemItem";

export default defineComponent({
  name: "ObjectField",
  props: FieldPropsDefine,
  setup(props) {
    console.log("props", props);
    const handleChange = (data: any) => {
      props.onChange(data);
    };
    return () => {
      const { value, schema, uiSchema } = props;
      const properties = schema.properties || {};
      const currentValue = isObject(value) ? value : {};
      return Object.keys(properties).map((key) => {
        return (
          <SchemItem
            schema={properties[key]}
            value={currentValue[key]}
            uiSchema={uiSchema.properties ? uiSchema.properties[key] || {} : {}}
            onChange={handleChange}
          />
        );
      });
    };
  },
});
