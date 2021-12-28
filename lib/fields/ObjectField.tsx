import { FieldPropsDefine } from "../types";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "ObjectField",
  props: FieldPropsDefine,
  setup(props) {
    console.log("props", props);
    return () => {
      return <h3>ObjectField</h3>;
    };
  },
});
