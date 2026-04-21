// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { searchMovies, getMovieDetails } from "./movieAPI";
// import type { MovieDetail } from "./types";
// import mockMovies from "../../data/mockMovie";

// export const fetchSearchMovies = createAsyncThunk(
//   "movies/search",
//   async (query: string) => {
//     const data = await searchMovies(query);
//     return data.Search || [];
//   }
// );

// export const fetchMovieDetails = createAsyncThunk(
//   "movies/details",
//   async (id: string) => {
//     return await getMovieDetails(id);
//   }
// );


// const initialState = {
//     movies: mockMovies,
//     search: "",
//   searchResults: [],
//   selected: null as MovieDetail | null,
//   loading: false,
//   ratings: {} as { [key: string]: number },
// };

// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     rateMovie: (state, action) => {
//       state.ratings[action.payload.id] = action.payload.rating;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSearchMovies.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSearchMovies.fulfilled, (state, action) => {
//         state.loading = false;
//         state.searchResults = action.payload;
//       })
//       .addCase(fetchMovieDetails.fulfilled, (state, action) => {
//         state.selected = action.payload;
//       });
//   },
// });

// export const { rateMovie } = movieSlice.actions;
// export default movieSlice.reducer;

// src/features/movies/moviesSlice.ts
// src/features/movies/moviesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies, getMovieDetails } from "./movieAPI";
import mockMovies from "../../data/mockMovie";

export const fetchSearchMovies = createAsyncThunk(
  "movies/search",
  async (query: string) => {
    const data = await searchMovies(query);
    return data.Search || [];
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/details",
  async (id: string) => {
    return await getMovieDetails(id);
  }
);

interface State {
  movies: any[];
  searchResults: any[];
  selected: any;
  ratings: Record<string, number>;
  loading: boolean;
}

const initialState: State = {
  movies: mockMovies,
  searchResults: [],
  selected: null,
  ratings: {},
  loading: false,
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    rateMovie: (state, action) => {
      state.ratings[action.payload.id] = action.payload.rating;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
  },
});

export const { rateMovie } = slice.actions;
export default slice.reducer;