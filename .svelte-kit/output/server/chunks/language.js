import { w as writable } from "./index.js";
const getInitialLanguage = () => {
  return "en";
};
const language = writable(getInitialLanguage());
language.subscribe((value) => {
});
export {
  language as l
};
