export default {
  name: "demo",
  schema: {
    type: "object",
    properties: {
      pass1: {
        type: "string",
        minLength: 10,
        title: "password",
      },
      pass2: {
        type: "string",
        minLength: 10,
        title: "re-try password",
      },
    },
  },
  default: {
    pass1: "",
    pass2: "",
  },
};
