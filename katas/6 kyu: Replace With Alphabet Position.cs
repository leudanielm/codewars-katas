// https://www.codewars.com/kata/546f922b54af40e1e90001da

using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static string AlphabetPosition(string text)
  {
    var alphabetMap = "abcdefghijklmnopqrstuvwxyz"
      .ToCharArray()
      .Select((v, i) => new {Key = v, Value = ++i})
      .ToDictionary(o => o.Key, o => o.Value);
    
    return string.Join(" ", 
            text.ToLower()
                .ToCharArray()
                .Where(v => alphabetMap.ContainsKey(v))
                .Select(v => alphabetMap[v])
           );
  }
}
