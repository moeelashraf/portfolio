import { execSync } from "node:child_process";
import { join } from "node:path";

const command = process.argv[2];
if (command !== "dev" && command !== "build") {
  console.error("Usage: node scripts/with-base-path.mjs <dev|build>");
  process.exit(1);
}

process.env.PAGES_BASE_PATH = "/moeel";

const nextBin =
  process.platform === "win32"
    ? join("node_modules", ".bin", "next.cmd")
    : join("node_modules", ".bin", "next");

const nextCmd = command === "dev" ? `"${nextBin}" dev` : `"${nextBin}" build`;
execSync(nextCmd, { stdio: "inherit", env: process.env, shell: true });
