import {reverse} from '../complex/reverse';

describe('reverse function', () => {
  it('should reverse the string "hello" to "olleh"', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('should reverse the string "world" to "dlrow"', () => {
    expect(reverse('world')).toBe('dlrow');
  });

  it('should return the input string when it has one character', () => {
    expect(reverse('a')).toBe('a');
  });

  it('should return an empty string when input is an empty string', () => {
    expect(reverse('')).toBe('');
  });
});
