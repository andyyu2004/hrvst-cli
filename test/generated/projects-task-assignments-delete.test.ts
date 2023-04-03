/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects task-assignments delete", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects task-assignments delete --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects task-assignments delete

    Delete a task assignment

    Options:
          --help                Show help                                  [boolean]
      -p, --project_id          The ID of the project that contains the task assignm
                                ents you're deleting.                     [required]
      -t, --task_assignment_id  The ID of the task assignment you're deleting.
                                                                          [required]
      -f, --fields              Comma separated list of fields to display in the out
                                put.
      -o, --output              The output format: json, table"
  `);
});
