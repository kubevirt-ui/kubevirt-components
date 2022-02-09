declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare const KUBEVIRT_CONSTS: {
  kubevirtTypes: string[];
  kubernetesTypes: string[];
  KUBEVIRT_MODEL_PATH: string;
  KUBERNETES_MODEL_PATH: string;
};
