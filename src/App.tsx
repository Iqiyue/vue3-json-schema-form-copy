import { defineComponent, ref } from "vue";
import { createUseStyles } from "vue-jss";

import demos from "./demos";
console.log(demos);

const useStyles = createUseStyles({
  contniner: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "1200px",
    margin: "0 auto",
  },
  menu: {
    marginBottom: 20,
  },
  menuButton: {
    appearance: "none",
    borderWidth: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-block",
    padding: 15,
    borderRadius: 5,
    "&:hover": {
      background: "#efefef",
    },
  },
  menuSelected: {
    background: "#337ab7",
    color: "#fff",
    "&:hover": {
      background: "#337ab7",
    },
  },
});
export default defineComponent({
  setup() {
    const selectedRef = ref<number>(0);
    const classesRef = useStyles();
    return () => {
      const classes = classesRef.value;
      return (
        <div class={classes.contniner}>
          <div class={classes.menu}>
            <h1>vue3 JsonSchema Form</h1>
            <div>
              {demos.map((demo, index) => {
                return (
                  <button
                    class={{
                      [classes.menuButton]: true,
                      [classes.menuSelected]: index == selectedRef.value,
                    }}
                    onClick={() => (selectedRef.value = index)}
                  >
                    {demo.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div>container</div>
        </div>
      );
    };
  },
});
