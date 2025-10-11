export function formatPhone(input: string): string {
  let digits = input.replace(/\D/g, "")

  if (!digits.startsWith("998")) {
    digits = "998" + digits
  }

  digits = digits.substring(0, 12)

  let formatted = "+998"
  if (digits.length > 3) formatted += " " + digits.substring(3, 5)
  if (digits.length > 5) formatted += " " + digits.substring(5, 8)
  if (digits.length > 8) formatted += " " + digits.substring(8, 10)
  if (digits.length > 10) formatted += " " + digits.substring(10, 12)

  return formatted
}

export const normalizePhone = (formatted: string): string => {
  return formatted.replace(/\s/g, "")
}


