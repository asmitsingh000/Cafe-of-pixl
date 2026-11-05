import { createContext, useContext } from "react";

const StoreContext = createContext()
export const useStore = () => useContext(StoreContext)

export function StoreProvider({children}){
    
}