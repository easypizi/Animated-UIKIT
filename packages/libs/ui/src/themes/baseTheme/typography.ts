import type { CSSObject } from 'styled-components';
import type { ThemeTypography } from '../types';

const fontFamilyManrope = 'Manrope, sans-serif';
const fontFamilyInter = 'Inter, sans-serif';
const fontFamilyMonoSpace = "'Space Mono', monospace";

const base: CSSObject = {
  fontFamily: fontFamilyManrope,
  fontSize: '14px',
  fontWeight: 400,
};

const baseMonoSpace: CSSObject = {
  fontFamily: fontFamilyMonoSpace,
  fontSize: '14px',
  fontWeight: 400,
};

export const typography: ThemeTypography = {
  fontFamily: fontFamilyManrope,
  fontFamilyMonoSpace,
  base,
  baseMonoSpace,
  headerXL: {
    ...base,
    fontSize: '64px',
    fontWeight: 600,
    lineHeight: '110%',
  },
  headerLG: {
    ...base,
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '110%',
  },
  headerMD: {
    ...base,
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '120%',
  },
  headerSM: {
    ...base,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '120%',
  },
  headerXS: {
    ...base,
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '120%',
  },
  textLGBold: {
    ...base,
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '140%',
  },
  textMDBold: {
    ...base,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '140%',
  },
  textSMBold: {
    ...base,
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '140%',
  },
  textXSBold: {
    ...base,
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '140%',
  },
  textLG: {
    ...base,
    fontFamily: fontFamilyInter,
    fontSize: '18px',
    lineHeight: '140%',
  },
  textMD: {
    ...base,
    fontSize: '16px',
    lineHeight: '140%',
  },
  textSM: {
    ...base,
    fontSize: '14px',
    lineHeight: '140%',
  },
  textXS: {
    ...base,
    fontSize: '12px',
    lineHeight: '140%',
  },
  captureSMBold: {
    ...base,
    fontSize: '10px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  captureSM: {
    ...base,
    fontSize: '10px',
    lineHeight: '120%',
    fontFamily: fontFamilyInter,
  },
};
