import { defineComponent } from "vue";
import { FieldPropsDefine, SchemaTypes } from "./types";
import ObjectField from "./fields/ObjectField";
import StringField from "./fields/StringField";
import ArrayField from "./fields/ArrayFiled";
import NumberField from "./fields/NumberField";
export default defineComponent({
  name: "SchemaItem",
  props: FieldPropsDefine,
  setup(props) {
    let Component: any;
    const { schema } = props;
    const type = schema.type;
    switch (type) {
      case SchemaTypes.STRING:
        Component = StringField;
        break;
      case SchemaTypes.OBJECT:
        Component = ObjectField;
        break;
      case SchemaTypes.ARRAY:
        Component = ArrayField;
        break;
      case SchemaTypes.NUMBER:
        Component = NumberField;
        break;
    }
    return () => {
      return <Component {...props} />;
    };
  },
});
