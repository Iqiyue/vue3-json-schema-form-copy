import { defineComponent, PropType, Ref, ref } from "vue";

export default defineComponent({
  emits: ["add"],
  props: ["count"],
  setup(props, { emit }) {
    const open = () => {
      alert("open");
    };
    const onAdd = () => {
      emit("add", 2);
    };

    const num = ref<number>(3);

    return { open, onAdd, num };
  },
  render() {
    return (
      <>
        <h3> 验证 逻辑</h3>
        <h4>{this.count}</h4>
        <h4>{this.num}</h4>
        <button onClick={this.onAdd}>增加</button>
      </>
    );
  },
});
