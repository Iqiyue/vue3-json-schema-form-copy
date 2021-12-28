import { defineComponent, h } from "vue";

export default defineComponent({
  name: "ObjectField",
  setup(props) {
    console.log("props", props);
    return () => {
      return <h3>ObjectField</h3>;
    };
  },
});
