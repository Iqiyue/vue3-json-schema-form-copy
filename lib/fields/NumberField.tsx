import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberFied",
  props: FieldPropsDefine,
  setup() {
    return () => {
      return <h3>NumberFied</h3>;
    };
  },
});
