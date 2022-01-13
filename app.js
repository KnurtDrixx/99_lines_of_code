const friends = ["Nick", "Lauren", "Paul", "Peter", "John"];

for (let i = 0; i < friends.length; i++) {

    for (let q = 99; q > 0; q--) {

        if (q === 1) {
            console.log(+ q + " line of code in the file, " + q + " line of code; " + friends[i] +
                " strikes one out, clears it all out, " + (q - 1) + " no lines of code in the file")
        } else if (q === 2) {
            console.log(+ q + " lines of code in the file, " + q + " lines of code; " + friends[i] +
                " strikes one out, clears it all out, " + (q - 1) + " line of code in the file")
        } else {



            console.log(+ q + " lines of code in the file, " + q + " lines of code; " + friends[i] +
                " strikes one out, clears it all out, " + (q - 1) + " lines of code in the file")

        }





    }








}