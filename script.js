function stringChop(str, size) {
  // your code here
	 if (!str) {
    return [];
  }

  // Initialize an array to store the chunks
  const chunks = [];

  // Loop through the string and extract chunks
  for (let i = 0; i < str.length; i += size) {
    // Get a substring of the original string with length equal to the size
    const chunk = str.substr(i, size);
    // Push the chunk to the array
    chunks.push(chunk);
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
