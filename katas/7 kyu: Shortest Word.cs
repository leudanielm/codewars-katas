// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

using System.Linq;

public class Kata
{
  public static int FindShort(string s)
  {
    return s.Split(' ').OrderBy(word => word.Length).FirstOrDefault().Length;
  }
}
