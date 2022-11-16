function byModule(props) {
	const priceBeef = props.saltBeefBought * props.saltBeefPrice;
	const priceRice = props.redRiceBought * props.redRicePrice;
	const priceVine = props.oldVineBought * props.oldVinePrice;
	const priceProducts = props.salary - priceBeef - priceRice - priceVine;
	const totalPrice = priceProducts % props.exchange;
	return totalPrice;
}

module.exports = byModule;