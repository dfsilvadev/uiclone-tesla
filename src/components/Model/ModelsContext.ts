import { createContext, ReactNode, RefObject } from "react";

export interface CarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: RefObject<HTMLElement>;
}

interface ModelsContext {
  wrapperRef: RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

export default createContext<ModelsContext>({} as ModelsContext);
