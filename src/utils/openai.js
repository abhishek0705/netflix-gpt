import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  // dangerouslyAllowBrowser: true,
});

export default openai;
