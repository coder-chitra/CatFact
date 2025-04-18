let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
    } catch (e) {
        console.log(e);
        return e;
    }
}

btn = document.querySelector("button");
p = document.querySelector("p");

btn.addEventListener("click", async () => {
    p.innerText = await getFacts();
})