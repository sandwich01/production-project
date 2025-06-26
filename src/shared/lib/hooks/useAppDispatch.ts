import { AppDispatch } from "app/providers/StoreProvider";
import { useDispatch } from "react-redux";

/**
 * Хук для вызова типизированного dispatch 
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()