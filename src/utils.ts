export const words = (chars: number) => chars / 5;

export const minutes = (secs: number) => secs / 60;

export const wpm = (chars: number, secs: number) =>
  Math.round(words(chars) / minutes(secs));

export const countCorrectCharacters = (text: string, input: string) => {
  const textChars = text.replace(' ', '');
  const inputChars = input.replace(' ', '');
  return inputChars.split('').filter((c, i) => c === textChars[i]).length;
};
