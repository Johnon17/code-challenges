// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".You function receives one side of the DNA(string, exceptfor Haskell);you need to return the other complementary side.

function DNAStrand(dna) {
  let dna2 = []
  Array.from(dna).forEach(e => {
    if (e === "A") {
      dna2.push("T")
    } else if (e === "T") {
      dna2.push("A")
    } else if (e === "C") {
      dna2.push("G")
    } else if (e === "G") {
      dna2.push("C")
    }
  })
  return dna2.join("")
}