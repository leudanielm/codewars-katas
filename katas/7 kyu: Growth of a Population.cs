// https://www.codewars.com/kata/563b662a59afc2b5120000c6

using System;

class Arge {

    public static int NbYear(int p0, double percent, int aug, int p) {
      int yearsNeeded = 0;
      double percentage = (percent != double.NaN) ? percent / 100 : 0;
      for (int i = p0; i < p; i += (int)Math.Floor(i * percentage + aug)) {
        yearsNeeded++;
      }

      return yearsNeeded;
    }
    
}
