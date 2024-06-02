/* eslint-disable react/prop-types */
"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(false);
  const hasMounted = useHasMounted();
const navigate=useNavigate()
  if (!hasMounted) return null;

const logout = () =>{
	navigate('/login')
}

  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen mt-5">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <h1 className="text-2xl text-center div-h1 text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
            Solve the following code
          </h1>
        </div>

        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          {loadingProblems && (
            <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
              {[...Array(10)].map((_, idx) => (
                <LoadingSkeleton key={idx} />
              ))}
            </div>
          )}
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
            {!loadingProblems && (
              <ProblemsTable
                problemsArray={problemsArray}
                setLoadingProblems={setLoadingProblems}
              />
            )}
          </table>
        </div>

        <button onClick={logout} className="text-2xl divbutton  ml-30 div-button text-center text-gray-700 dark:text-gray-400 font-medium uppercase ">
          Logout
        </button>
      </main>
    </>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const problemsArray = [
  {
    id: "two-sum",
    title: "   Two Sum  ",
    difficulty: "Easy",
    category: "Array",
    language: "Java",
    semester: 1,
    completed: false,
  },
  {
    id: "reverse-linked-list",
    title: ".          Reverse Linked List             .",
    difficulty: "Hard",
    category: "Linked List",

    language: "Java",
    semester: 1,
    completed: false,
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",

    language: "Java",
    semester: 1,
    completed: false,
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",

    language: "Java",
    semester: 1,
    completed: false,
  },
  {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",

    language: "Java",
    semester: 1,
    completed: false,
  },
];

const ProblemsTable = ({ problemsArray }) => {
  const navigate = useNavigate();

  const handleRowClick = (problem) => {
    navigate("/editor", { state: { problem } });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-center dark:bg-gray-800 w-92 shadow-md rounded-lg overflow-hidden border-collapse">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 m-10 border border-gray-300 dark:border-gray-600 text-left text-sm leading-4 font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-left text-sm leading-4 font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-left text-sm leading-4 font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {problemsArray.map((problem, idx) => (
            <tr
              key={problem.id}
              className={`${
                idx % 2 === 1
                  ? "bg-gray-50 dark:bg-gray-700"
                  : " dark:bg-gray-800"
              }`}
              onClick={() => handleRowClick(problem)}
              style={{ cursor: "pointer" }}
            >
              <td className="px-6 py-4 w-[100px] p-10 tracking-wider ml-10 whitespace-nowrap border border-gray-300 dark:border-gray-600">
                Complete
              </td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-600">
                {problem.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 dark:border-gray-600">
                {problem.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
