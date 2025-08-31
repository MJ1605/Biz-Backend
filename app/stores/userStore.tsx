import {create} from "zustand";

type UserState = {
    userId: string|null;
    displayName: string|null;
}

export const useStore = create<UserState>((set) => ({
    userId: null,
    displayName: null,
}));