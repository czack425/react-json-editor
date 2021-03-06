/* eslint @typescript-eslint/naming-convention: 0 */
// Interfaces
export interface ThemeColors {
  background: string;
  background_warning: string;
  colon: string;
  default: string;
  error?: string;
  keys: string;
  keys_whiteSpace: string;
  number: string;
  primitive: string;
  string: string;
}

const dark_vscode_tribute: ThemeColors = {
  default            : '#D4D4D4',
  background         : '#1E1E1E',
  background_warning : '#1E1E1E',
  string             : '#CE8453',
  number             : '#B5CE9F',
  colon              : '#49B8F7',
  keys               : '#9CDCFE',
  keys_whiteSpace    : '#AF74A5',
  primitive          : '#6392C6'
};

const light_mitsuketa_tribute: ThemeColors = {
  default            : '#D4D4D4',
  background         : '#FCFDFD',
  background_warning : '#FEECEB',
  string             : '#FA7921',
  number             : '#70CE35',
  colon              : '#49B8F7',
  keys               : '#59A5D8',
  keys_whiteSpace    : '#835FB6',
  primitive          : '#386FA4'
};

export default {
  dark_vscode_tribute,
  light_mitsuketa_tribute
};
