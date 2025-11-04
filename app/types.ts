export type RootStackParamList = {
  index: undefined;
  login: undefined;
  signup: undefined;
  'feature-tour': undefined;
  permissions: undefined;
  '(tabs)': undefined;
  camera: undefined;
  'camera/processing': undefined;
  'analysis/[id]': { id: string };
  profile: undefined;
  'profile/settings': undefined;
  'profile/usage': undefined;
};

export type TabParamList = {
  index: undefined;
  record: undefined;
  history: undefined;
  profile: undefined;
};

export type CameraParamList = {
  index: undefined;
  processing: undefined;
};

export type AnalysisParamList = {
  '[id]': { id: string };
};

export type ProfileParamList = {
  settings: undefined;
  usage: undefined;
};