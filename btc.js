const axios = require("axios");

async function main() {
	const currency = process.argv[2] ? process.argv[2].toUpperCase() : "USD";

	try {
		const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
		const { data } = await axios.get(url);

		if (!data.bpi[currency]) {
			throw new Error("Devise inconnue");
		}

		const rate = data.bpi[currency].rate;
		const updatedAt = data.time.updated;
		console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);
	} catch (err) {
		console.log(err.toString());
	}
}

main();
