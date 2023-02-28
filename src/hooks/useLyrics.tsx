import React from "react";

const fetchLyric = async (id: number) => {
  const response = await fetch(``);
  return response.text;
};

const query = useQuery<Todo>({
  queryKey: ["todos", id],
  queryFn: fetchTodo,
});
