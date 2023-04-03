/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst reports project-budget-report", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js reports project-budget-report --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js reports project-budget-report

    The Project Budget Report highlights budget information for projects that have b
    een assigned a budget

    Options:
          --help       Show help                                           [boolean]
      -p, --page       The page number to use in pagination. Use \`all\` to retrieve a
                       ll pages.
      -e, --per_page   The number of records to return per page. Can range between 1
                        and 2000.
      -i, --is_active  Pass true to only return active projects and false to return
                       inactive projects.
      -f, --fields     Comma separated list of fields to display in the output.
      -o, --output     The output format: json, table"
  `);
});
