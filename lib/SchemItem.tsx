import { DefineComponent, defineComponent } from "vue";
import { FieldPropsDefine, SchemaTypes } from "./types";
import StringField from "./fields/StringField";
import ObjectField from "./fields/ObjectField";
import ArrayField from "./fields/ArrayFiled";
import NumberField from "./fields/NumberField";
export default defineComponent({
  name: "SchemaItem",
  props: FieldPropsDefine,
  setup(props) {
    //todo 得验证 componnent类型
    let component: any;
    const { schema } = props;
    const type = schema.type;
    switch (type) {
      case SchemaTypes.STRING:
        component = StringField;
        break;
      case SchemaTypes.NUMBER:
        component = NumberField;
        break;
      case SchemaTypes.OBJECT:
        component = ObjectField;
        break;
      case SchemaTypes.ARRAY:
        component = ArrayField;
        break;
      default:
        console.warn(`${type} is not supported`);
    }
    return () => {
      return <component {...props} />;
    };
  },
});
