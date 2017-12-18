// @flow
import { addLocaleData } from 'react-intl';

import * as en from 'react-intl/locale-data/en';

import * as es from 'react-intl/locale-data/es';

import * as fr from 'react-intl/locale-data/fr';

import * as it from 'react-intl/locale-data/it';

import * as de from 'react-intl/locale-data/de';

import * as ja from 'react-intl/locale-data/ja';

import * as zh from 'react-intl/locale-data/zh';

import * as ko from 'react-intl/locale-data/ko';

export const addLocales = () => addLocaleData([...en, ...ja, ...zh, ...ko, ...es, ...fr, ...it, ...de]);
