-- https://www.codewars.com/kata/5d50e3914861a500121e1958

CREATE TABLE IF NOT EXISTS letters_map (letter char(1), id int);

TRUNCATE TABLE letters_map;
INSERT INTO letters_map (letter, id) VALUES 
 ('a', 1),
 ('b', 2),
 ('c', 3),
 ('d', 4),
 ('e', 5),
 ('f', 6),
 ('g', 7),
 ('h', 8),
 ('i', 9),
 ('j', 10),
 ('k', 11),
 ('l', 12),
 ('m', 13),
 ('n', 14),
 ('o', 15),
 ('p', 16),
 ('q', 17),
 ('r', 18),
 ('s', 19),
 ('t', 20),
 ('u', 21),
 ('v', 22),
 ('w', 23),
 ('x', 24),
 ('y', 25),
 ('z', 26);
 
SELECT ltmp.letter
FROM letters_map ltmp
WHERE ltmp.id = (
  SELECT 
   CASE WHEN SUM(lmp.id) <= 26 THEN SUM(lmp.id)
        WHEN SUM(lmp.id) > 26 THEN SUM(lmp.id) % 26
        WHEN SUM(lmp.id) IS NULL THEN 26
   END
   FROM
   (SELECT lm.id FROM letters_map lm
    JOIN letters l
    ON lm.letter = l.letter) lmp
);

