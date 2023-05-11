import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import settingEN from "../translations/en-GB/setting.json";
import settingFA from "../translations/fa-IR/setting.json";

import loginFormEN from "../translations/en-GB/loginForm.json";
import loginFormFA from "../translations/fa-IR/loginForm.json";

import dashboardEN from "../translations/en-GB/dashboard.json";
import dashboardFA from "../translations/fa-IR/dashboard.json";

import cropperEN from "../translations/en-GB/cropper.json";
import cropperFA from "../translations/fa-IR/cropper.json";

import patientEN from "../translations/en-GB/patient.json";
import patientFA from "../translations/fa-IR/patient.json";

import fileEN from "../translations/en-GB/file.json";
import fileFA from "../translations/fa-IR/file.json";

import commonEN from "../translations/en-GB/common.json";
import commonFA from "../translations/fa-IR/common.json";

import alertEN from "../translations/en-GB/alert.json";
import alertFA from "../translations/fa-IR/alert.json";

import menuEN from "../translations/en-GB/menu.json";
import menuFA from "../translations/fa-IR/menu.json";

import userEN from "../translations/en-GB/user.json";
import userFA from "../translations/fa-IR/user.json";

import toolbarEN from "../translations/en-GB/toolbar.json";
import toolbarFA from "../translations/fa-IR/toolbar.json";

import searchBarEN from "../translations/en-GB/searchBar.json";
import searchBarFA from "../translations/fa-IR/searchBar.json";

// the translations
// (tip move them in a JSON file and import them)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en_GB: {
        setting: settingEN,
        toolbar: toolbarEN,
        searchBar: searchBarEN,
        common: commonEN,
        alert: alertEN,
        menu: menuEN,
        loginForm: loginFormEN,
        dashboard: dashboardEN,
        cropper: cropperEN,
        user: userEN,
        patient: patientEN,
        file: fileEN,
      },
      fa_IR: {
        setting: settingFA,
        toolbar: toolbarFA,
        searchBar: searchBarFA,
        common: commonFA,
        alert: alertFA,
        menu: menuFA,
        loginForm: loginFormFA,
        dashboard: dashboardFA,
        cropper: cropperFA,
        user: userFA,
        patient: patientFA,
        file: fileFA,
      },
    },
    lng: localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng")
      : "en_GB",
    fallbackLng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
