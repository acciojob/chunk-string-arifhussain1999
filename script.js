function stringChop(str, size) {
  // your code here
	if (!str) {
        return [];
    }

    // Initialize an array to store the chunks
    const chunks = [];

    // Loop through the string and extract chunks
    for (let i = 0; i < str.length; i += chunkLength) {
        // Get a substring of the original string with length equal to the chunkLength
        const chunk = str.substr(i, chunkLength);
        // Push the chunk to the array
        chunks.push(chunk);
    }

    return chunks;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
