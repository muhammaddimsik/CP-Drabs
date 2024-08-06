// dateUtils.ts
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // timeZone: "Asia/Jakarta", // Ensure the time zone is set to Jakarta
    // timeZoneName: "short",
  };

  return new Intl.DateTimeFormat("id-ID", options).format(date);
}
