import { WorkoutsContext } from "../context/workoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error('UseWorkoutsContext must be used inside WorkoutsContextProvider')
  }

  return context
}