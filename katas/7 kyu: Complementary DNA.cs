// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections;

public class DnaStrand 
    {
        public static string MakeComplement(string dna)
        {
            var charMap = new Dictionary<char, char>() {
              { 'T', 'A' },
              { 'C', 'G' },
              { 'G', 'C' },
              { 'A', 'T' }
            };
            
            return String.Join("", dna.ToCharArray().Select(x => charMap[x]));
        }
    }
