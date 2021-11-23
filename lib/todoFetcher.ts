import axios from "axios";
import { Todo } from "../model/todo.model";

export const todoFetcher = (url: string) =>
  axios.get<{ data: Todo[] }>(url).then((res) => res.data);
