import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StringField",
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema, value } = props;
      const handleChange = (e: any) => {
        const v = e.target.value;
        e.target.value = props.value;
        props.onChange(v);
      };
      return (
        <div>
          <label>{schema.title}</label>
          <br />
          <input onInput={handleChange} value={value} />
        </div>
      );
    };
  },
});
