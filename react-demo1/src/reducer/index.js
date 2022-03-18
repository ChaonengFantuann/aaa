const initState = {
  article: [
    {
      title: "AAA",
      text: "aaa"
    },
    {
      title: "BBB",
      text: "bbb"
    },
    {
      title: "CCC",
      text: "ccc"
    }
  ]
};

const reducer = (state = initState, action) => {
  console.log(action.state);
  switch (action.type) {
    case "del_action":
      state.article.splice(action.index, 1)
      return state;
    case "new_action":
      const num = state.article.length
      // console.log(num);
      state.article.splice(num , 0, action.state)
      return state;
    case "revise_action":
      state.article.splice(action.state.index, 1, action.state)
      return state;
    default:
      return state;
  }
}

export default reducer