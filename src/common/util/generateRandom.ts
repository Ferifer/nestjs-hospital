// create random password method
export function generateRandomMix(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const characterCount = characters.length;

  for (let i = 0; i < length; i++) {
    const isNumber = Math.random() < 0.5;
    if (isNumber) {
      const randomNumber = Math.floor(Math.random() * 10);
      result += randomNumber;
    } else {
      const randomCharacter = characters.charAt(
        Math.floor(Math.random() * characterCount),
      );
      result += randomCharacter;
    }
  }

  return result;
}
