export interface ProcessStep {
  num: string
  icon: string
  title: string
  desc: string
  final?: boolean
}

export const ordinanceSteps: ProcessStep[] = [
  { num: '01', icon: 'bi-file-earmark-plus', title: 'File Proposed Ordinance', desc: 'Submit proposed ordinance to Sangguniang Bayan for consideration' },
  { num: '02', icon: 'bi-book', title: 'First Reading / Referral to Committee', desc: 'Initial reading and assignment to relevant committee for review' },
  { num: '03', icon: 'bi-people', title: 'Public Hearing / Committee Action', desc: 'Committee conducts public hearing and deliberates on proposed ordinance' },
  { num: '04', icon: 'bi-file-text', title: 'Committee Report', desc: 'Committee submits findings and recommendations to Sangguniang Bayan' },
  { num: '05', icon: 'bi-journal-text', title: 'Second Reading', desc: 'Detailed discussion and debate on proposed ordinance' },
  { num: '06', icon: 'bi-check2-square', title: 'Third and Final Reading', desc: 'Final voting on proposed ordinance by Sangguniang Bayan' },
  { num: '07', icon: 'bi-calendar-check', title: "10-Day Mayor's Approval", desc: 'Mayor reviews and approves enacted ordinance within 10 days' },
  { num: '08', icon: 'bi-send', title: '3-Day Submission to SP', desc: 'Submit approved ordinance to Sangguniang Panlalawigan for review within 3 days' },
  { num: '09', icon: 'bi-hourglass-split', title: 'SP Review Period', desc: '60-day review for appropriation ordinances; 30-day review for others' },
  { num: '10', icon: 'bi-megaphone', title: 'Posting / Publication', desc: 'Public posting and publication of approved ordinance' },
  { num: '11', icon: 'bi-rocket-takeoff', title: 'Implementation', desc: 'Ordinance takes effect and is enforced within municipality', final: true },
]

export const resolutionSteps: ProcessStep[] = [
  { num: '01', icon: 'bi-file-earmark-plus', title: 'File Proposed Resolution', desc: 'Submit proposed resolution to Sangguniang Bayan' },
  { num: '02', icon: 'bi-calendar-event', title: 'Inclusion in Session Agenda', desc: 'Resolution is scheduled for inclusion in Sangguniang Bayan session' },
  { num: '03', icon: 'bi-people-fill', title: 'Committee Meeting / Approval', desc: 'Committee reviews and approves proposed resolution' },
  { num: '04', icon: 'bi-printer', title: 'Final Draft Printing', desc: 'Legislative staff prepares and prints final draft of resolution' },
  { num: '05', icon: 'bi-pen', title: 'Official Signing', desc: 'Secretary to the Sanggunian and Presiding Officer sign resolution' },
  { num: '06', icon: 'bi-send-check', title: 'Posting / Transmittal', desc: 'Resolution is posted publicly and transmitted to concerned parties', final: true },
]
