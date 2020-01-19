// https://www.codewars.com/kata/52761ee4cffbc69732000738

using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static string GoodVsEvil(string good, string evil)
  {
    var goodForces = new Dictionary<int, int>()
      {
        { 0, 1 },
        { 1, 2 },
        { 2, 3 },
        { 3, 3 },
        { 4, 4 },
        { 5, 10 }
      };
    var evilForces = new Dictionary<int, int>()
      {
        { 0, 1 },
        { 1, 2 },
        { 2, 2 },
        { 3, 2 },
        { 4, 3 },
        { 5, 5 },
        { 6, 10 }
      };  
  
    good.Split(' ')
      .Select((x, i) => new { Value = int.Parse(x), Index = i })
      .ToList()
      .ForEach(x => goodForces[x.Index] *= x.Value);
    evil.Split(' ')
      .Select((x, i) => new { Value = int.Parse(x), Index = i })
      .ToList()
      .ForEach(x => evilForces[x.Index] *= x.Value);
      
    var totalGoodForces = goodForces.Sum(x => x.Value);
    var totalEvilForces = evilForces.Sum(x => x.Value);
    
    return totalGoodForces > totalEvilForces ?
       "Battle Result: Good triumphs over Evil" :
       totalGoodForces < totalEvilForces ?
       "Battle Result: Evil eradicates all trace of Good" :
       "Battle Result: No victor on this battle field";
  }
}
