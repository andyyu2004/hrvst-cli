/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst log", async () => {
  const { stdout } = await execaCommand("node dist/cli.js log --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js log <hours> [alias]

    Create a time entry

    Positionals:
      hours  Amount of hours to log                              [number] [required]
      alias  Alias for project id and task id

    Options:
          --help        Show help                                          [boolean]
      -n, --notes       Any notes to be associated with the time entry.
      -p, --project_id  The ID of the project to associate with the time entry.
      -t, --task_id     The ID of the task to associate with the time entry.
      -e, --editor      Launch editor to add notes                         [boolean]"
  `);
});