/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst time-entries create", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js time-entries create --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js time-entries create

    Creates a new time entry object

    Options:
          --help                           Show help                       [boolean]
      -p, --project_id                     The ID of the project to associate with t
                                           he time entry.                 [required]
      -t, --task_id                        The ID of the task to associate with the
                                           time entry.                    [required]
      -s, --spent_date                     The ISO 8601 formatted date on which the
                                           time entry was spent.          [required]
      -u, --user_id                        The ID of the user to associate with the
                                           time entry. Defaults to the currently aut
                                           henticated user’s ID.
      -h, --hours                          The current amount of time tracked. If pr
                                           ovided, the time entry will be created wi
                                           th the specified hours and is_running wil
                                           l be set to false. If not provided, hours
                                            will be set to 0.0 and is_running will b
                                           e set to true.
      -n, --notes                          Any notes to be associated with the time
                                           entry.
      -e, --external_reference[id]         The ID of the service's equivalent of a t
                                           ask, card, etc.
      -x, --external_reference[group_id]   The ID of the service's equivalent of a p
                                           roject, board, etc.
      -r, --external_reference[permalink]  The URL of where the time is being tracke
                                           d.
      -f, --fields                         Comma separated list of fields to display
                                            in the output.
      -o, --output                         The output format: json, table"
  `);
});
