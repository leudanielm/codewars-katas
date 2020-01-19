// https://www.codewars.com/kata/5299413901337c637e000004

using System;
using System.Linq;

public static class Kata
{
  public static int GetMissingElement(int[] superImportantArray)
  {
    Array.Sort(superImportantArray);
    for (int i = 0; i <= superImportantArray.Count() - 1; i++) {
      if (i > 0 && (superImportantArray[i] - superImportantArray[i - 1]) != 1) {
        return superImportantArray[i] - 1;
      }
    }
    
    return 0;
  }
}
