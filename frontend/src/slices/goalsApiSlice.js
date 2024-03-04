import { apiSlice } from "./apiSlice";
import { GOALS_URL } from "../constants";

export const goalsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query({
      query: () => ({
        url: GOALS_URL,
      }),
      providesTags: ["Goal"],
      keepUnusedDataFor: 5,
    }),
    getGoalDetails: builder.query({
      query: (goalId) => ({
        url: `${GOALS_URL}/${goalId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createGoal: builder.mutation({
      query: (data) => ({
        url: GOALS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Goal"],
    }),
    updateGoal: builder.mutation({
      query: ({ id }) => ({
        url: `${GOALS_URL}/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Goal"],
    }),
    deleteGoal: builder.mutation({
      query: (id) => ({
        url: `${GOALS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useGetGoalDetailsQuery,
  useCreateGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation,
} = goalsApiSlice;
