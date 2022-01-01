const submitBut = document.querySelector("button");
const recipientField = document.querySelector("#recipient");
const giftField = document.querySelector("#name");
const linkField = document.querySelector("#link");
const priceField = document.querySelector("#price");

submitBut.addEventListener("click", submitRequest);

async function submitRequest(e) {
  e.preventDefault();

  const id = Date.now();
  const recipient = recipientField.value;
  const gift = giftField.value;
  const link = linkField.value;
  const price = parseFloat(priceField.value);
  if (recipient && gift && link && price) {
    const res = await fetch(
      "https://mysterious-mesa-00016.herokuapp.com/items",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          recipient: recipient,
          name: gift,
          priceInDollars: price,
          link: link,
        }),
      }
    );
    console.log(await res.json());
    recipientField.value = "";
    giftField.value = "";
    linkField.value = "";
    priceField.value = "";
  }
}
