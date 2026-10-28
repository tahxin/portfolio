import fs from "fs";
import path from "path";

export const resumeHref = "/resume.pdf";

/**
 * The download button only renders when a real PDF exists in /public.
 * Drop `resume.pdf` into /public and the button switches on automatically.
 */
export function hasResume(): boolean {
  const file = path.join(process.cwd(), "public", "resume.pdf");

  try {
    return fs.existsSync(file) && fs.statSync(file).size > 1024;
  } catch {
    return false;
  }
}
