/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst start", async () => {
  const { stdout } = await execaCommand("node dist/cli.js start --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js start [alias]

    Create a running time entry

    Positionals:
      alias  Alias for project id and task id

    Options:
          --help        Show help                                          [boolean]
      -n, --notes       Any notes to be associated with the time entry.
      -p, --project_id  The ID of the project to associate with the time entry.
      -t, --task_id     The ID of the task to associate with the time entry.
      -e, --editor      Launch editor to add notes                         [boolean]"
  `);
});