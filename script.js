const button_element = document.getElementById("btn");
const emoji_element = document.getElementById("emo_name");

let emo_bucket = [];

async function getEmoji() {
    try {
        let response = await fetch("https://emoji-api.com/emojis?access_key=9edddfac48c9490105cf2da1ecbce16b51223ffa");
        data = await response.json();
        console.log(data);


        for (let i = 0; i < 1500; i++) {
            emo_bucket.push({
                emojiChar: data[i].character,
                emojiName: data[i].unicodeName,
            });
        }
        console.log(emo_bucket);
        console.log(emo_bucket.length);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getEmoji();

button_element.addEventListener("click", () => {
    // const randomNum = Math.random();
    const randomNum = Math.floor(Math.random() * emo_bucket.length);
    // console.log(randomNum);
    button_element.innerText = emo_bucket[randomNum].emojiChar;
    emoji_element.innerText = emo_bucket[randomNum].emojiName;
});
// console.log(emo_bucket.length);
