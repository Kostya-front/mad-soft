import {create} from "zustand";
import {localstorage} from "../../../shared/tools/localstorage";

let timerInterval: NodeJS.Timeout | null = null;

const startTimer = (set) => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => set((state) => {
    if (state.timer <= 1) {
      clearInterval(timerInterval);
      return {isFinished: true};
    }

    localstorage.setItem('timer', state.timer);
    return {timer: state.timer - 1};
  }), 1000);
};

export const useTimerStore = create((set) => ({
  timer: localstorage.getItem('timer') || 900,
  isFinished: false,
  startTimer: () => startTimer(set),
  refreshTimerStore: () => set((state) => {
    startTimer(set);
    return {
      isFinished: false,
      timer: 900
    };
  })
}));


useTimerStore.getState().startTimer();
