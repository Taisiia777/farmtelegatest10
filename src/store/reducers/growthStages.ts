// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TGrowthStage } from "../../types/globalTypes";
// import { RootState } from "..";

// export interface IGrowthStages {
//    blocks: [
//       {
//          id: 1;
//          stage: TGrowthStage;
//       },
//       {
//          id: 2;
//          stage: TGrowthStage;
//       },
//       {
//          id: 3;
//          stage: TGrowthStage;
//       },
//       {
//          id: 4;
//          stage: TGrowthStage;
//       },
//       {
//          id: 5;
//          stage: TGrowthStage;
//       },
//       {
//          id: 6;
//          stage: TGrowthStage;
//       },
//       {
//          id: 7;
//          stage: TGrowthStage;
//       },
//       {
//          id: 8;
//          stage: TGrowthStage;
//       },
//       {
//          id: 9;
//          stage: TGrowthStage;
//       }
//    ];

//    // Состояние подсказки в виде пальца
//    isFingerActive: boolean;
// }

// const initialState: IGrowthStages = {
//    blocks: [
//       {
//          id: 1,
//          stage: "fourth",
//       },
//       {
//          id: 2,
//          stage: "fourth",
//       },
//       {
//          id: 3,
//          stage: "fourth",
//       },
//       {
//          id: 4,
//          stage: "fourth",
//       },
//       {
//          id: 5,
//          stage: "fourth",
//       },
//       {
//          id: 6,
//          stage: "fourth",
//       },
//       {
//          id: 7,
//          stage: "fourth",
//       },
//       {
//          id: 8,
//          stage: "fourth",
//       },
//       {
//          id: 9,
//          stage: "fourth",
//       },
//    ],

//    isFingerActive: true,
// };

// export const growthStagesSlice = createSlice({
//    name: "growthStages",
//    initialState,
//    reducers: {
//       // В action.payload передется id блока
//       pickWheat: (state, action: PayloadAction<{ id: number }>) => {
//          const block = state.blocks.find(
//             (block) => block.id === action.payload.id
//          );

//          if (block) {
//             block.stage = "first";

//             // Как только мы срезали какую-то пшеницу, сразу скрываем палец подсказку
//             state.isFingerActive = false;
//          }
//       },
//    },
// });

// export const { pickWheat } = growthStagesSlice.actions;

// export const selectEarthBlock = (state: RootState, id: number) =>
//    state.growthStages.blocks.find((block) => block.id === id);

// export default growthStagesSlice.reducer;



































// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TGrowthStage } from "../../types/globalTypes";
// import { RootState } from "..";

// export interface IGrowthStages {
//   blocks: Array<{
//     id: number;
//     stage: TGrowthStage;
//   }>;

//   isFingerActive: boolean;
// }

// const initialState: IGrowthStages = {
//   blocks: Array.from({ length: 9 }, (_, index) => ({
//     id: index + 1,
//     stage: "first",
//   })),

//   isFingerActive: true,
// };

// export const growthStagesSlice = createSlice({
//   name: "growthStages",
//   initialState,
//   reducers: {
//     // В action.payload передается id блока
//     pickWheat: (state, action: PayloadAction<{ id: number }>) => {
//       const block = state.blocks.find(
//         (block) => block.id === action.payload.id
//       );

//       if (block) {
//         block.stage = "first";

//         // Как только мы срезали какую-то пшеницу, сразу скрываем палец подсказку
//         state.isFingerActive = false;
//       }
//     },
//     // Новый экшен для смены стадии роста
//     changeGrowthStage: (state, action: PayloadAction<{ id: number }>) => {
//       const block = state.blocks.find(
//         (block) => block.id === action.payload.id
//       );

//       if (block) {
//       //   switch (block.stage) {
//       //     case "first":
//       //       block.stage = "second";
//       //       break;
//       //     case "second":
//       //       block.stage = "third";
//       //       break;
//       //     case "third":
//       //       block.stage = "fourth";
//       //       break;
//       //     case "fourth":
//       //     default:
//       //       block.stage = "first";
//       //       break;
//       //   }
//       switch (block.stage) {
//          case "first":
//            block.stage = "second";
//            break;
//          case "second":
//            block.stage = "third";
//            break;
//          case "third":
//            block.stage = "fourth";
//            break;
//          case "fourth":
//            // Останавливаем рост на четвертой стадии, не делаем ничего
//            break;
//          default:
//            block.stage = "first";
//            break;
//        }

//       }
//     },
//   },
// });

// export const { pickWheat, changeGrowthStage } = growthStagesSlice.actions;

// export const selectEarthBlock = (state: RootState, id: number) =>
//   state.growthStages.blocks.find((block) => block.id === id);

// export default growthStagesSlice.reducer;





// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TGrowthStage } from "../../types/globalTypes";
// import { RootState } from "..";

// export interface IGrowthStages {
//   blocks: Array<{
//     id: number;
//     stage: TGrowthStage;
//   }>;
//   isFingerActive: boolean;
// }

// const initialState: IGrowthStages = {
//   blocks: Array.from({ length: 9 }, (_, index) => ({
//     id: index + 1,
//     stage: "first",
//   })),
//   isFingerActive: true,
// };

// export const growthStagesSlice = createSlice({
//   name: "growthStages",
//   initialState,
//   reducers: {
//     pickWheat: (state, action: PayloadAction<{ id: number }>) => {
//       const block = state.blocks.find(
//         (block) => block.id === action.payload.id
//       );

//       if (block) {
//         block.stage = "first";
//         state.isFingerActive = false;
//       }
//     },
//     changeGrowthStage: (state, action: PayloadAction<{ id: number }>) => {
//       const block = state.blocks.find(
//         (block) => block.id === action.payload.id
//       );

//       if (block) {
//         switch (block.stage) {
//           case "first":
//             block.stage = "second";
//             break;
//           case "second":
//             block.stage = "third";
//             break;
//           case "third":
//             block.stage = "fourth";
//             break;
//           case "fourth":
//             break;
//           default:
//             block.stage = "first";
//             break;
//         }
//       }
//     },
//   },
// });

// export const { pickWheat, changeGrowthStage } = growthStagesSlice.actions;

// export const selectEarthBlock = (state: RootState, id: number) =>
//   state.growthStages.blocks.find((block) => block.id === id);

// export const calculateGrassEarnings = (blocks: IGrowthStages['blocks'], coinsPerHour: number) => {
//   let totalEarnings = 0;
//   blocks.forEach(block => {
//     switch (block.stage) {
//       case "second":
//         totalEarnings += coinsPerHour;
//         break;
//       case "third":
//         totalEarnings += coinsPerHour * 2;
//         break;
//       case "fourth":
//         totalEarnings += coinsPerHour * 3;
//         break;
//     }
//   });
//   return totalEarnings;
// };

// export default growthStagesSlice.reducer;







// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TGrowthStage } from "../../types/globalTypes";
// import { RootState } from "..";

// export interface IGrowthStages {
//   blocks: Array<{
//     id: number;
//     stage: TGrowthStage;
//   }>;
//   isFingerActive: boolean;
// }

// const initialState: IGrowthStages = {
//   blocks: Array.from({ length: 9 }, (_, index) => ({
//     id: index + 1,
//     stage: "first",
//   })),
//   isFingerActive: true,
// };

// export const growthStagesSlice = createSlice({
//   name: "growthStages",
//   initialState,
//   reducers: {
//     pickWheat: (state, action: PayloadAction<{ id: number }>) => {
//       const block = state.blocks.find(
//         (block) => block.id === action.payload.id
//       );

//       if (block) {
//         block.stage = "first";
//         state.isFingerActive = false;
//       }
//     },
//     changeGrowthStage: (state, action: PayloadAction<{ id: number }>) => {
//       const block = state.blocks.find(
//         (block) => block.id === action.payload.id
//       );

//       if (block) {
//         switch (block.stage) {
//           case "first":
//             block.stage = "second";
//             break;
//           case "second":
//             block.stage = "third";
//             break;
//           case "third":
//             block.stage = "fourth";
//             break;
//           case "fourth":
//             break;
//           default:
//             block.stage = "first";
//             break;
//         }
//       }
//     },
//     growAllToMax: (state) => {
//       state.blocks.forEach(block => {
//         block.stage = "fourth";
//       });
//     },
//   },
// });

// export const { pickWheat, changeGrowthStage, growAllToMax } = growthStagesSlice.actions;

// export const selectEarthBlock = (state: RootState, id: number) =>
//   state.growthStages.blocks.find((block) => block.id === id);

// export const calculateGrassEarnings = (blocks: IGrowthStages['blocks'], coinsPerHour: number) => {
//   let totalEarnings = 0;
//   blocks.forEach(block => {
//     switch (block.stage) {
//       case "second":
//         totalEarnings += coinsPerHour;
//         break;
//       case "third":
//         totalEarnings += coinsPerHour * 2;
//         break;
//       case "fourth":
//         totalEarnings += coinsPerHour * 3;
//         break;
//     }
//   });
//   return totalEarnings;
// };

// export default growthStagesSlice.reducer;















import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGrowthStage } from "../../types/globalTypes";
import { RootState } from "..";

export interface IGrowthStages {
  blocks: Array<{
    id: number;
    stage: TGrowthStage;
  }>;
  isFingerActive: boolean;
}
const leagues = [
  { name: "Wooden", referralsRequired: 3, referralsTo: 0, harvest: 1 },
  { name: "Silver", referralsRequired: 10, referralsTo: 3, harvest: 1.5 },
  { name: "Gold", referralsRequired: 50, referralsTo: 10, harvest: 2 },
  { name: "Fire", referralsRequired: 200, referralsTo: 50, harvest: 3 },
  { name: "Diamond", referralsRequired: 1000, referralsTo: 200, harvest: 4 },
  { name: "Ruby", referralsRequired: 1001, referralsTo: 1000, harvest: 5 },
];
const initialState: IGrowthStages = {
  blocks: Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    stage: "first",
  })),
  isFingerActive: true,
};

export const growthStagesSlice = createSlice({
  name: "growthStages",
  initialState,
  reducers: {
    pickWheat: (state, action: PayloadAction<{ id: number }>) => {
      const block = state.blocks.find(
        (block) => block.id === action.payload.id
      );

      if (block) {
        block.stage = "first";
        state.isFingerActive = false;
      }
    },
    changeGrowthStage: (state, action: PayloadAction<{ id: number }>) => {
      const block = state.blocks.find(
        (block) => block.id === action.payload.id
      );

      if (block) {
        switch (block.stage) {
          case "first":
            block.stage = "second";
            break;
          case "second":
            block.stage = "third";
            break;
          case "third":
            block.stage = "fourth";
            break;
          case "fourth":
            break;
          default:
            block.stage = "first";
            break;
        }
      }
    },
    growAllToMax: (state) => {
      state.blocks.forEach(block => {
        block.stage = "fourth";
      });
    },
    setGrowthStages: (state, action: PayloadAction<TGrowthStage[]>) => {
      state.blocks = action.payload.map((stage, index) => ({
        id: index + 1,
        stage,
      }));
    },
  },
});

export const { pickWheat, changeGrowthStage, growAllToMax, setGrowthStages } = growthStagesSlice.actions;

export const selectEarthBlock = (state: RootState, id: number) =>
  state.growthStages.blocks.find((block) => block.id === id);

export const calculateGrassEarnings = (blocks: IGrowthStages['blocks'], coinsPerHour: number, incomeMultiplier: number, level: number) => {
  let totalEarnings = 0;
  const rewardMultiplier = {
    "second": 0.3,
    "third": 0.7,
    "fourth": 1.0
  };
  
  blocks.forEach(block => {
    switch (block.stage) {
      case "second":
        totalEarnings += ((coinsPerHour / 9) * rewardMultiplier["second"]) * incomeMultiplier * leagues[level].harvest;
        break;
      case "third":
        totalEarnings += ((coinsPerHour / 9) * rewardMultiplier["third"]) * incomeMultiplier * leagues[level].harvest;
        break;
      case "fourth":
        totalEarnings += ((coinsPerHour / 9) * rewardMultiplier["fourth"])* incomeMultiplier * leagues[level].harvest;
        break;
    }
  });
 

  return totalEarnings;
};

export default growthStagesSlice.reducer;



