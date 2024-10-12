// MajorCredits interface with branding for unique identification
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}
// MinorCredits interface with branding for unique identification
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}
// Function to sum MajorCredits and return the result as MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}
// Function to sum MinorCredits and return the result as MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
