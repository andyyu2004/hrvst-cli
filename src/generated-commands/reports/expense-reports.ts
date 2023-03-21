/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { CommandBuilder } from "yargs";
import { commands } from "./expense-reports/index";
export const command = "expense-reports <command>";
export const description = `Information pertaining to retrieving expense reports.`;
export const builder: CommandBuilder = (yargs) =>
  yargs
    .command(commands)
    .demandCommand()
    .recommendCommands()
    .strictCommands()
    .version(false);