import { useEffect, useState } from "react";

function withLoading(WrappedComponent) {
  // HOC
  return function LoadingComponent({ isLoading, ...props }) {
    const [loading, setLoading] = useState(isLoading);

    useEffect(() => {
      setLoading(isLoading);
    }, [isLoading]);

    // render loading UI
    if (loading) {
      return <div>Loading...</div>;
    }
    // render data UI
    return <WrappedComponent {...props} />;
  };
}

const TodoList = ({ list }) => {
  return list.map((item) => <div key={item}>{item}</div>);
};

const TodoListWithLoading = withLoading(TodoList);

export const TodoListWithHOC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const fetchTodo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setList(["item-1", "item-2", "item-3", "item-4"]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={fetchTodo}>Load Todos</button>
      <TodoListWithLoading isLoading={isLoading} list={list} />
    </>
  );
};
