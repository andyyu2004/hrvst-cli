/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects task-assignments get", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects task-assignments get --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects task-assignments get

    Retrieves the task assignment with the given ID

    Options:
          --help                Show help                                  [boolean]
      -p, --project_id          The ID of the project that contains the task assignm
                                ent you're retrieving.                    [required]
      -t, --task_assignment_id  The ID of the task assignment you're retrieving.
                                                                          [required]
      -i, --is_active           Pass true to only return active task assignments and
                                 false to return inactive task assignments.
      -u, --updated_since       Only return task assignments that have been updated
                                since the given date and time.
      -f, --fields              Comma separated list of fields to display in the out
                                put.
      -o, --output              The output format: json, table"
  `);
});
