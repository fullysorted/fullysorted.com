import type { RegisterSeed } from '@/lib/data/register';
import { registerFerrariF40 } from './ferrari-f40';

/**
 * Bundled chassis-register seeds, one file per model. Seeds are JSON data
 * (no prose) built by the extraction pipeline described in REGISTER-SPEC.md
 * and checked by scripts/validate-register-seed.mjs before they land here.
 */
export const REGISTER_SEEDS: RegisterSeed[] = [registerFerrariF40];
