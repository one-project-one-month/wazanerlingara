import { create } from "zustand"

type TimerMode = "TURN" | "DURATION";
type GameMode = "WORDS" | "Q&A"
type GameSettingType = {
    imposterCount: number,
    hint: boolean,
    timerMode: TimerMode,
    timerValue: number,// timer in second

    playerCount: number,
    players: string[],
    mode: GameMode,
    category: string,

    increaseImposter: () => void,
    decreaseImposter: () => void,
    toggleHint: () => void,
    setTimerMode: (type: TimerMode) => void,
    increaseTimer: () => void,
    decreaseTimer: () => void,
    setTimer: (value: number) => void,

    setPlayers: (palyer: string) => void,
    setMode: (mode: GameMode) => void,
    setCategory: (category: string) => void
}

const MIN_PLAYER_COUNT = 3;
const TURN_MIN = 5;
const TURN_MAX = 60;

const DURATION_MIN = 60;
const DURATION_MAX = 600;

export const useGameSettingStore = create<GameSettingType>((set, get) => ({
    imposterCount: 1,
    hint: false,
    timerMode: "TURN",
    timerValue: 5,// timer in second
    playerCount: MIN_PLAYER_COUNT,
    players: [],
    mode: "WORDS",
    category: '',

    increaseImposter: () => {
        const { imposterCount, playerCount } = get();
        if (imposterCount < playerCount) {
            set({ imposterCount: imposterCount + 1 })
        }
    },
    decreaseImposter: () => set((state) => ({ imposterCount: Math.max(1, state.imposterCount - 1) })),
    toggleHint: () => set((state) => ({ hint: !state.hint })),
    setTimerMode: (mode) => set(() => ({
        timerMode: mode,
        timerValue: mode === "TURN" ? 5 : 120
    })),
    increaseTimer: () => {
        const { timerMode, timerValue } = get();
        const max = timerMode === "TURN" ? TURN_MAX : DURATION_MIN;
        if (timerValue < max) {
            set({ timerValue: timerValue + 1 })
        }
    },
    decreaseTimer: () => {
        const { timerMode, timerValue } = get();
        const min = timerMode === "TURN" ? TURN_MIN : DURATION_MIN;
        if (timerValue > min) {
            set({ timerValue: timerValue - 1 })
        }
    },
    setTimer: (value: number) => {
        const { timerMode } = get();
        const min = timerMode === 'TURN' ? TURN_MIN : DURATION_MIN;
        const max = timerMode === "TURN" ? TURN_MAX : DURATION_MAX;

        const clampedTimer = Math.min(Math.max(value, min), max) // do not less than min or greater than max
        set({ timerValue: clampedTimer });
    },

    setPlayers: () => { },
    setMode: (mode: GameMode) => set({ mode }),
    setCategory: (category: string) => set({ category })

}))