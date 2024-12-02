import chalk from "chalk";
import { Command } from "commander";
import { existsSync, promises as fs } from "fs";
import ora from "ora";
import path from "path";
import { execa } from "execa";
import * as z from "zod";

import { getPackageManager } from "@/src/utils/get-package-manager";
import { handleError } from "@/src/utils/handle-error";
import { logger } from "@/src/utils/logger";
import * as templates from "@/src/utils/templates";

const DEPENDENCIES = [
  "class-variance-authority",
  "clsx",
  "nativewind@^4.1.23",
  "tailwindcss-animate",
  "tailwind-merge",
  "lucide-react-native",
  "react-native-reanimated",
  "react-native-svg",
  "@rn-primitives/types",
  "@rn-primitives/slot",
  "@rn-primitives/portal",
];
const DEV_DEPENDENCIES = ["tailwindcss"];

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
});

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (opts) => {
    try {
      const options = initOptionsSchema.parse(opts);
      const cwd = path.resolve(options.cwd);

      await runInit(cwd);

      logger.info(`${chalk.green("Success!")}`);
    } catch (error) {
      handleError(error);
    }
  });

export async function runInit(cwd: string) {
  const spinner = ora(`Initializing project...`)?.start();

  await fs.writeFile(
    `${cwd}/tailwind.config.js`,
    templates.TAILWIND_CONFIG,
    "utf8"
  );

  await fs.writeFile(
    `${cwd}/nativewind-env.d.ts`,
    templates.NATIVEWIND_ENV,
    "utf8"
  );
  await fs.writeFile(`${cwd}/babel.config.js`, templates.BABEL_CONFIG, "utf8");
  await fs.writeFile(`${cwd}/global.css`, templates.GLOBAL_STYLES, "utf8");
  await fs.writeFile(`${cwd}/metro.config.js`, templates.METRO_CONFIG, "utf8");

  const libDir = path.join(cwd, "lib");

  if (!existsSync(libDir)) {
    await fs.mkdir(libDir, { recursive: true });
  }

  await fs.writeFile(`${cwd}/lib/utils.ts`, templates.UTILS, "utf8");

  spinner.succeed();

  const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
  const packageManager = await getPackageManager(cwd);
  const packageCommand = packageManager === "npm" ? "install" : "add";

  await execa(packageManager, [packageCommand, ...DEPENDENCIES], { cwd });
  await execa(
    packageManager,
    [
      packageCommand,
      ...DEV_DEPENDENCIES,
      packageManager === "npm" ? "--save-dev" : "--dev",
    ],
    { cwd }
  );

  dependenciesSpinner?.succeed();
}
