import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrayField",
  props: FieldPropsDefine,
  setup() {
    return () => {
      return <h3>ArrayField</h3>;
    };
  },
});
