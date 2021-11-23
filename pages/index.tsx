import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "../styles/Home.module.css";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { Todo } from "../model/todo.model";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../store/TodoSlice";
import { RootState } from "../store";
import { useEffect } from "react";
import { todoFetcher } from "../lib/todoFetcher";
import FetchTodoData from "../data/fetchTodoData";

interface prop {
  data: Todo[];
}

//const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage<prop> = () => {
  // Data Fetch with SWR
  //const { data, error, isValidating } = useSWR("/api/data", todoFetcher);
  const { data, loading, error, mutate } = FetchTodoData();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setTodo({ todoData: data }));
  // }, [dispatch, data]);
  //const todoData = useSelector((state: RootState) => state.todoState.todoData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Todolist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`w-full flex flex-col flex-1 justify-between  mb-5 px-20`}
      >
        <h1 className="flex justify-center w-full text-2xl font-bold p-5">
          Todolist
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-disc list-inside">
            {(data!.data as Todo[]).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
        <Form mutate={mutate} />
      </main>

      <footer className={styles.footer}>
        <small>&copy; 2021 YUDAI1995</small>
      </footer>
    </div>
  );
};

export default Home;

// Data Fetch
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await axios
//     .get(`http://localhost:3000/api/data`)
//     .then((res) => res);
//   return {
//     props: res.data,
//   };
// };
