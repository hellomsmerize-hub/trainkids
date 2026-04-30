# TrainKids WhatsApp Automation Blueprint (ManyChat)

This document serves as the master guide for building the WhatsApp automation in ManyChat. It maps the **Trigger Codes** from the website to specific conversational flows and provides the exact copywriting to be used.

---

## 1. Core Logic & Global Strategy

### Trigger Type
- **ManyChat Trigger**: "Message Contains" (Case Insensitive)
- **Keyword Source**: The unique codes at the end of website messages (e.g., `[TRK-EIPIC]`).

### Brand Voice
- **Tone**: Nurturing, Professional, Encouraging, and Clear.
- **Goal**: Move from curiosity to a Centre Visit or Discovery Call.

---

## 2. Trigger-Specific Flows

### Flow A: General Enrolment / Start
**Trigger**: `[TRK-START]`
- **Bot Response**:
  "Hi there! Warm welcome to Train Kids. 🌟 We’ve received your enquiry about enrolment. 

  To help us give you the best guidance, what is your child's current age?"
- **Buttons**:
  - `2 - 4 Years Old`
  - `5 - 6 Years Old`
  - `7 - 14 Years Old`
- **Next Step**: After selection, ask: "Which centre is most convenient for you?"
  - `Woodlands` | `Tampines`
- **Outcome**: Notify Admin + Offer `Book a Visit` button.

---

### Flow B: Specific Programmes (EIPIC, OT, ST, SPED)
**Triggers**: `[TRK-EIPIC]`, `[TRK-OT]`, `[TRK-ST]`, `[TRK-SPED]`
- **Bot Response** (Example for EIPIC):
  "Hello! We're glad you're interested in our **Early Intervention (EIPIC)** programme. 

  Our approach focuses on milestone-based growth through individualised IEPs. Would you like to see how a typical session works or check on available subsidies?"
- **Buttons**:
  - `How Sessions Work` -> (Send brief text + Link to /programmes)
  - `Check Subsidies` -> (Explain ECDA/Baby Bonus info)
  - `Speak to Specialist` -> (Notify Admin)

---

### Flow C: Pricing & Enrolment Instructions
**Trigger**: `[TRK-PRICING]`
- **Bot Response**:
  "Absolutely! Understanding the costs and enrolment steps is important for every family. 

  We are an **ECDA-approved provider**, which means subsidies and Baby Bonus are available for eligible families. 

  Would you like me to send the enrolment checklist or have a staff member call you to discuss specific rates?"
- **Buttons**:
  - `Send Checklist` -> (Send Image/PDF or text list)
  - `Request Callback` -> (Collect Phone #)
  - `View FAQ` -> (Link to /programmes#faq)

---

### Flow D: Success Stories / Milestones
**Trigger**: `[TRK-SUCCESS]`
- **Bot Response**:
  "It's heartening to see our students' progress! 🌈 

  Whether it's moving from non-verbal to confident speaking or achieving daily independence, we believe every child has their own timeline.

  Would you like to hear about a specific success story similar to your child's situation, or would you like to visit our centre to see the environment in person?"
- **Buttons**:
  - `Hear a Story` -> (Randomize or offer categories: Speech / Life Skills)
  - `Book a Visit` -> (Leads to Visit Flow)

---

## 3. Global Fallbacks & Utility

### "Speak to Human" (Custom Enquiry)
- **Logic**: Any time a user clicks "Speak to Specialist" or "Request Callback".
- **Bot Copy**: 
  "I've alerted our team! One of our therapists or administrators will reach out to you within 24 hours. 

  In the meantime, feel free to share any specific concerns or medical reports here—it helps us understand your child's needs better."

### Data Collection (Custom Fields)
For every flow, try to tag the user with:
- `Last_Interested_Programme`
- `Preferred_Location`
- `Child_Age_Group`

---

## 4. Automation Checklist for Admin

1. **Keywords**: Set up all 8 `[TRK-XXXX]` keywords in ManyChat.
2. **Default Reply**: If a user types something else, have a friendly "Menu" reply.
3. **Live Chat**: Ensure notifications are turned on for the admin mobile app.
4. **Offline Hours**: Set a specific message for weekends ("We're closed, but we'll get back to you Monday morning!").
