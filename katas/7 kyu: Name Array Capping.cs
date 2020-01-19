// https://www.codewars.com/kata/5356ad2cbb858025d800111d

using System;
using System.Linq;

public static class Kata
{
  public static string[] CapMe(string[] strings)
  {
    string[] rStrings = new string[strings.Length];
    int i = 0;
    foreach (string str in strings) {
      rStrings[i] = String.Format("{0}{1}", str.ToUpper()[0], str.ToLower().Substring(1, str.Length - 1));
      i++;
    }
    return rStrings;
  }
}
