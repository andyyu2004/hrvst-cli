/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../util/postman-request-command";

export const request: Request = {
  method: "POST",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "invoices", ":invoice_id", "messages"],
    query: [
      {
        key: "recipients[0]email",
        value: "",
        description: "Email of the message recipient.",
      },
      {
        key: "recipients[0]name",
        value: "",
        description: "Name of the message recipient.",
      },
      {
        key: "subject",
        value: "",
        description: "The message subject.",
        disabled: true,
      },
      {
        key: "body",
        value: "",
        description: "The message body.",
        disabled: true,
      },
      {
        key: "include_link_to_client_invoice",
        value: "",
        description:
          "Whether to include a link to the client invoice in the message body. Not used when thank_you is true.",
        disabled: true,
      },
      {
        key: "attach_pdf",
        value: "",
        description: "Whether to attach the invoice PDF to the message email.",
        disabled: true,
      },
      {
        key: "send_me_a_copy",
        value: "",
        description:
          "Whether to email a copy of the message to the current user.",
        disabled: true,
      },
      {
        key: "thank_you",
        value: "",
        description: "Whether this is a thank you message.",
        disabled: true,
      },
      {
        key: "event_type",
        value: "",
        description:
          "The type of invoice event that occurred with the message: send, close, draft, re-open, or view.",
        disabled: true,
      },
    ],
    variable: [
      {
        key: "invoice_id",
        value: "",
        description:
          "The ID of the invoice that you're creating the message for.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new invoice message object",
    request,
  });