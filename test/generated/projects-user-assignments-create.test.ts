/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst projects user-assignments create", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js projects user-assignments create --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js projects user-assignments create

    Creates a new user assignment object

    Options:
          --help                Show help                                  [boolean]
      -p, --project_id          The ID of the project that you're creating the user
                                assignment for.                           [required]
      -u, --user_id             The ID of the user to associate with the project.
                                                                          [required]
      -i, --is_active           Whether the user assignment is active or archived. D
                                efaults to true.
      -s, --is_project_manager  Determines if the user has project manager permissio
                                ns for the project. Defaults to false for users with
                                 Regular User permissions and true for those with Pr
                                oject Managers or Administrator permissions.
      -e, --use_default_rates   Determines which billable rate(s) will be used on th
                                e project for this user when bill_by is People. When
                                 true, the project will use the user’s default billa
                                ble rates. When false, the project will use the cust
                                om rate defined on this user assignment.
      -h, --hourly_rate         Rate used when the project’s bill_by is Tasks. Defau
                                lts to null when billing by task hourly rate, otherw
                                ise 0.
      -b, --budget              Budget used when the project’s budget_by is task or
                                task_fees.
      -f, --fields              Comma separated list of fields to display in the out
                                put.
      -o, --output              The output format: json, table"
  `);
});
