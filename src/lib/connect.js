import context from "./context";

export default function connect(mapStateTopProps, mapDispatchToProps) {
  const { Consumer } = context;
  return (Component) => (props) => {
    return (
      <Consumer>
        {({ state, dispatch }) => {
          const dispatchProps = mapDispatchToProps(dispatch);
          const stateProps = mapStateTopProps(state);
          return <Component {...props} {...stateProps} {...dispatchProps} />;
        }}
      </Consumer>
    );
  };
}
