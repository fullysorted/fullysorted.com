/**
 * One place that turns a lead row into a stage. Used by /api/admin/leads.
 *
 * Order matters: junk beats everything, the owner's answer beats the shop's,
 * and a lead with no answer from anyone is "waiting" once it is older than
 * LEAD_OVERDUE_HOURS.
 */
export const LEAD_OVERDUE_HOURS = 48;

export const JOB_STATUSES = ['booked', 'talking', 'not_going_ahead', 'no_reply'] as const;
export type JobStatus = (typeof JOB_STATUSES)[number];

export type LeadStage =
  | 'junk' | 'booked' | 'not_going_ahead' | 'no_reply' | 'replied' | 'waiting' | 'new';

export const STAGE_LABEL: Record<LeadStage, string> = {
  booked: 'Work went ahead',
  replied: 'Shop replied',
  new: 'New',
  waiting: 'No reply yet',
  no_reply: 'Owner never heard back',
  not_going_ahead: 'Did not go ahead',
  junk: 'Junk',
};

export function stageOf(r: {
  junk: boolean | null;
  job_status: string | null;
  replied_at: string | null;
  created_at: string;
}, now = Date.now()): LeadStage {
  if (r.junk) return 'junk';
  if (r.job_status === 'booked') return 'booked';
  if (r.job_status === 'not_going_ahead') return 'not_going_ahead';
  if (r.job_status === 'no_reply') return 'no_reply';
  if (r.replied_at || r.job_status === 'talking') return 'replied';
  const ageH = (now - new Date(r.created_at).getTime()) / 3_600_000;
  return ageH > LEAD_OVERDUE_HOURS ? 'waiting' : 'new';
}
