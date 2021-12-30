import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";
import { isObject } from "@vue/shared";
import SchemaItem from "../SchemaItem";

export default defineComponent({
  name: "ObjectField",
  props: FieldPropsDefine,
  setup(props) {
    console.log("props", props);
    const handleObjectChange = (key:string,v: any) => {
      const value:any = isObject(props.value)? props.value : {};
      if(v === undefined){
        Reflect.deleteProperty(value,key)
      }else {
        value[key] = v;
      }
      props.onChange(value);
    };
    return () => {
      const { value, schema, uiSchema } = props;
      const properties = schema.properties || {};
      const currentValue = isObject(value) ? value : {};
      return Object.keys(properties).map((key) => {
        return (
          <SchemaItem
            schema={properties[key]}
            value={currentValue[key]}
            uiSchema={uiSchema.properties ? uiSchema.properties[key] || {} : {}}
            onChange={(v:any) =>handleObjectChange(key,v)}
          />
        );
      });
    };
  },
});
