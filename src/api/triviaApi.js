import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const triviaApi = createApi({
  reducerPath: "triviaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://opentdb.com/" }),
  endpoints: (builder) => ({
    getTriviaQuestions: builder.query({
      query: ({ amount, category, difficult, type }) => {
        let url = `api.php?amount=${amount}`;

        //Optional Parameters
        if (category) url += `&category=${category}`;
        if (difficult) url += `&difficulty=${difficult}`;
        if (type) url += `&type=${type}`;

        return url;
      },
    }),
  }),
});

export const { useLazyGetTriviaQuestionsQuery } = triviaApi;
