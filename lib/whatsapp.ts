export const WHATSAPP_NUMBER = "6593867654";

export type WhatsAppContext = 
  | "ENROL_START"
  | "PROG_EIPIC"
  | "PROG_OT"
  | "PROG_ST"
  | "PROG_SPED"
  | "PRICING_ENROL"
  | "SUCCESS_STORIES"
  | "GENERAL_CONTACT";

const MESSAGES: Record<WhatsAppContext, string> = {
  ENROL_START: "Hi Train Kids! I'd like to ask about enrolment for my child. [TRK-START]",
  PROG_EIPIC: "Hi Train Kids! I'm interested in learning more about the EIPIC programme. [TRK-EIPIC]",
  PROG_OT: "Hi Train Kids! I'd like to know more about Occupational Therapy for my child. [TRK-OT]",
  PROG_ST: "Hi Train Kids! I'd like to know more about Speech Therapy for my child. [TRK-ST]",
  PROG_SPED: "Hi Train Kids! I'm interested in the SPED Student Care programme. [TRK-SPED]",
  PRICING_ENROL: "Hi Train Kids! Could you share more about the pricing and enrolment process? [TRK-PRICING]",
  SUCCESS_STORIES: "Hi Train Kids! I saw your success stories and would like to learn more about how you can help my child. [TRK-SUCCESS]",
  GENERAL_CONTACT: "Hi Train Kids! I have a question and would like to speak with someone. [TRK-CONTACT]"
};

export function getWhatsAppLink(context: WhatsAppContext): string {
  const message = encodeURIComponent(MESSAGES[context]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
