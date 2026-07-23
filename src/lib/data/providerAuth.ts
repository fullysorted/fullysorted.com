import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';

/** The service-provider row linked to a signed-in Clerk user, or null. */
export async function getProviderForUser(userId: string) {
  const db = getDb();
  const [p] = await db
    .select()
    .from(schema.serviceProviders)
    .where(eq(schema.serviceProviders.clerkUserId, userId))
    .limit(1);
  return p ?? null;
}
