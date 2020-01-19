// https://www.codewars.com/kata/56747fd5cb988479af000028

public class Kata
{
  public static string GetMiddle(string s)
  {
    bool isEven = s.Length % 2 == 0;
    return s.Substring(s.Length / 2 - (isEven ? 1 : 0), isEven ? 2 : 1);
  }
}
