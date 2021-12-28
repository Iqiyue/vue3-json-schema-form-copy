import { FieldPropsDefine } from "../types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StringField",
  props: FieldPropsDefine,
  setup() {
    return () => {
      return <h3>stringfield</h3>;
    };
  },
});
