import { getDate } from "./date";

export function generateFilename() {
  const date = getDate();
  const filename = `indupasa-reportes-${date.replaceAll('/', '-')}`;
  return filename
}
