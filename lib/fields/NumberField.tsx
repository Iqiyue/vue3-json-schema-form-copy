import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberFied",
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema, value } = props;
      const handleChange = (e: any) => {
        const v = e.target.value;
        e.target.value = props.value;
        const value = Number(v);
        Number.isNaN(value) ? props.onChange(undefined) : props.onChange(v);
      };
      return (
        <div>
          <label>{schema.title}</label>
          <br />
          <input type="number" onInput={handleChange} value={value} />
        </div>
      );
    };
  },
});
