import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const exercisePath = "C:\\Users\\Kuba\\Desktop\\warsztat-projektowy\\warsztat-projektowy";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
});
