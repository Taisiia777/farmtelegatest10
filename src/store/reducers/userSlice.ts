// // userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface UserState {
//     id: number;
//     username: string;
//     coins: number;
//     incomeMultiplier: number;
//     coinsPerHour: number;
//     xp: number;
//     level: number;
//     totalEarnings?: number; // Добавляем новое свойство
// }

// const initialState: { user: UserState | null } = {
//     user: null,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser(state, action: PayloadAction<UserState>) {
//             state.user = action.payload;
//         },
//         clearUser(state) {
//             state.user = null;
//         },
//     },
// });

// export const { setUser, clearUser } = userSlice.actions;

// export default userSlice.reducer;










import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface UserState {
    id: number;
    username: string;
    coins: number;
    incomeMultiplier: number;
    coinsPerHour: number;
    xp: number;
    level: number;
    totalEarnings?: number;
    grassEarnings?: number; // Добавляем новое свойство
    coinsArray?: any; // Убедитесь, что coinsArray определен как массив Coin[]
}

const initialState: { user: UserState | null } = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
        updateGrassEarnings(state, action: PayloadAction<number>) {
            if (state.user) {
                state.user.grassEarnings = (state.user.grassEarnings || 0) + action.payload;
            }
        },
    },
});

export const { setUser, clearUser, updateGrassEarnings } = userSlice.actions;

export default userSlice.reducer;

