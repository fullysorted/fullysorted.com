import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';

// âââ GET /api/providers âââââââââââââââââââââââââââââââââ
// Returns all active service providers for the directory
export async function GET() {
  try {
    const db = getDb();
    const providers = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.status, 'active'));

    return NextResponse.json({ providers });
  } catch (error) {
    console.error('Fetch providers error:', error);
    // Fallback: return empty array so directory still renders
    return NextResponse.json({ providers: [] });
  }
}

// âââ POST /api/providers ââââââââââââââââââââââââââââââââ
// Submit a new provider application & create pending profile
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      businessName, ownerName, category, location, email,
      phone, website, instagram, yearsInBusiness,
      specialties, description, idealClient, whyList, referredBy,
      priceRange, clerkUserId,
    } = body;

    if (!businessName || !ownerName || !category || !location || !email || !description) {
      return NextResponse.json(
        { error: 'Business name, owner name, category, location, email, and description are required' },
        { status: 400 }
      );
    }

    const db = getDb();

    // Create slug from business name
    const slug = businessName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      + '-' + Math.random().toString(36).substring(2, 8);

    // Save application record
    await db.insert(schema.providerApplications).values({
      businessName,
      ownerName,
      category,
      location,
      email,
      phone: phone || null,
      website: website || null,
      instagram: instagram || null,
      yearsInBusiness: yearsInBusiness || null,
      specialties: typeof specialties === 'string' ? specialties : (specialties || []).join(', '),
      idealClient: idealClient || null,
      whyList: whyList || null,
      referredBy: referredBy || null,
      status: 'pending',
    });

ËÈÜX]HÝY\Ù[H
[[È[[Ú\È\Ý\ÊBÛÛÝÜXÚX[Y\Ð\^HH\[ÙÜXÚX[Y\ÈOOH	ÜÝ[ÉÂÈÜXÚX[Y\ËÜ]
	Ë	ÊKX\

ÎÝ[ÊHOË[J
JK[\ÛÛX[B
ÜXÚX[Y\È×JNÂÛÛÝÜÝY\HH]ØZ][Ù\
ØÚ[XKÙ\XÙTÝY\ÊK[Y\ÊÂÛ\Õ\Ù\YÛ\Õ\Ù\Y[\Ú[\ÜÓ[YKÝÛ\[YKÛYËØ]YÛÜKØØ][Û[XZ[ÛNÛH[ÙXÚ]NÙXÚ]H[[ÝYÜ[N[ÝYÜ[H[\ØÜ\[ÛÜXÚX[Y\ÎÜXÚX[Y\Ð\^KYX\Ò[\Ú[\ÜÎYX\Ò[\Ú[\ÜÈ[XÙT[ÙNXÙT[ÙH	É		Ë\YYY[ÙKÝ[[ÔÝY\[ÙKËÈÑÎÚXÚÈÛÝ[ÜÝ[[ÈYÙBÝ]\Î	Ü[[ÉËJK]\[Ê
NÂ]\^\ÜÛÙKÛÛÈÝY\Y\ÜØYÙN	Ð\XØ][ÛÝXZ]YÝXØÙ\ÜÙ[HHÙW	Û]Y]È]Ú][ËMH\Ú[\ÜÈ^\ËÈKÈÝ]\ÎHB
NÂHØ]Ú
\ÜHÂÛÛÛÛK\Ü	ÐÜX]HÝY\\ÜË\ÜNÂ]\^\ÜÛÙKÛÛÈ\Ü	ÑZ[YÈÝXZ]\XØ][ÛÈKÈÝ]\Î
LJNÂBB
