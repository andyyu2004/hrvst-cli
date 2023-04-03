/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst time-entries list", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js time-entries list --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js time-entries list

    Returns a list of your time entries

    Options:
          --help                   Show help                               [boolean]
      -u, --user_id                Only return time entries belonging to the user wi
                                   th the given ID.
      -c, --client_id              Only return time entries belonging to the client
                                   with the given ID.
      -t, --task_id                Only return time entries belonging to the task wi
                                   th the given ID.
      -e, --external_reference_id  Only return time entries with the given external_
                                   reference ID.
      -i, --is_billed              Pass true to only return time entries that have b
                                   een invoiced and false to return time entries tha
                                   t have not been invoiced.
      -s, --is_running             Pass true to only return running time entries and
                                    false to return non-running time entries.
      -p, --updated_since          Only return time entries that have been updated s
                                   ince the given date and time.
      -f, --from                   Only return time entries with a spent_date on or
                                   after the given date.
      -o, --to                     Only return time entries with a spent_date on or
                                   before the given date.
      -a, --page                   The page number to use in pagination. Use \`all\` t
                                   o retrieve all pages.
      -r, --per_page               The number of records to return per page. Can r
                                   ange between 1 and 2000.
      -l, --fields                 Comma separated list of fields to display in the
                                   output.
          --output                 The output format: json, table"
  `);
});
