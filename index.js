const rand = {
	// 210
	nouns: [
		// Animals
		'narwhal', 'opossum', 'chinchilla', 'mouse', 'rabbit', 'kangaroo', 'puffin', 'beluga', 'turkey',
		'shark', 'wolverine', 'warthog', 'walrus', 'ostrich', 'piglet', 'ladybug', 'butterfly', 'seahorse', 'firefly',
		'seadragon', 'quetzal', 'hippo', 'impala', 'rhino', 'hedwig', 'owl', 'peacock', 'bear', 'aardvark',
		'boar', 'axolotl', 'bison', 'camel', 'emu', 'panther', 'reindeer', 'caribou', 'flamingo', 'buffalo',
		'tiger', 'tortoise', 'wildebeest', 'penguin', 'pangolin', 'wolf', 'seal', 'armadillo', 'lion', 'serow',
		'sloth', 'jaguar', 'cougar', 'donkey', 'otter', 'baboon', 'coyote', 'alpaca', 'goat', 'moose',
		'mole', 'urial', 'bandicoot', 'polecat', 'cheetah', 'fox', 'bobcat', 'horse', 'puma', 'lemming',
		'gorilla', 'mallard', 'bongo', 'dolphin', 'hyena', 'sealion', 'deer', 'liger', 'porcupine', 'robin',
		'yak', 'badger', 'sandpiper', 'tamarin', 'sheep', 'marmot', 'ibex', 'ocelot', 'anteater', 'wallaroo',
		'antelope', 'zebra', 'leopard', 'lynx', 'muskrat', 'lemur', 'bilby', 'mink', 'squirrel', 'platypus',
		'woodchuck', 'aardwolf', 'dog', 'doggie', 'puppy', 'kitty', 'cat', 'gazelle', 'fallow', 'monkey',
		'beaver', 'jerboa', 'gopher', 'fisher', 'orangutan', 'chickadee', 'wildcat', 'marmoset', 'pygmy', 'mandrill',
		'gerbil', 'giraffe', 'hedgehog', 'canary', 'hamster', 'cottontail', 'bonobo', 'wombat', 'jackrabbit', 'malbrouck',
		'mongoose', 'chipmunk', 'hare', 'hummingbird', 'koala', 'loris', 'kiwi', 'degu', 'chimpanzee', 'chimp',
		'guinea', 'wallaby', 'clown-fish', 'lizard', 'capybara', 'macaque', 'meerkat', 'hyrax', 'fennec', 'cormorant',
		'starfish', 'swordfish', 'mole', 'gecko', 'june-bug', 'squid', 'puffer-fish', 'zebra-finch', 'lion-fish', 'dingo',
		'llama', 'grizzly-bear', 'flying-fox', 'black-bear', 'pony', 'jackal', 'fur-seal', 'ram', 'chicken', 'chick',
		'salmon', 'finch', 'parrot', 'wren', 'puffin', 'whet-owl', 'dunlin', 'lovebird', 'lorikeet', 'cardinal',
		'goldfinch', 'bluebird', 'hokkaido', 'weebill', 'pheasant', 'macaw', 'kingfisher', 'toucan', 'oriole', 'crane',
		'waxwing', 'lory', 'duck', 'moth', 'caterpillar', 'beetle', 'spider', 'grasshopper', 'mantis', 'weevil',
		'swallowtail', 'bumblebee', 'rollipolli', 'betta-fish', 'angelfish', 'clownfish', 'parakeet', 'steer', 'dromedary', 'gila-monster',
	],

	// 50
	colors: [
		'white', 'black', 'grey', 'gray', 'teal', 'magenta', 'slate', 'mint', 'cream', 'khaki',
		'ivory', 'sky-blue', 'brown', 'silver', 'aquamarine', 'lemon', 'orchid', 'beige', 'midnight-blue',
		'coral', 'violet', 'lavender', 'moccasin', 'goldenrod', 'tan', 'sea-green', 'amethyst', 'wheat',
		'crimson', 'seashell', 'cyan', 'deep-pink', 'plum', 'burly-wood', 'steel-blue', 'royal-blue', 'rose',
	],

	// 100
	adjectives: [
		// Physical Descriptors
		'adorable', 'adventurous', 'agreeable', 'annoyed', 'amused', 'average', 'beautiful', 'bewildered', 'blushing',
		'brave', 'bright', 'careful', 'cheerful', 'charming', 'calm', 'courageous', 'cute', 'cooperative',
		'concerned', 'determined', 'delightful', 'different', 'distinct', 'dizzy', 'eager', 'elegant', 'enthusiastic',
		'gleaming', 'graceful', 'glorious', 'gifted', 'gentle', 'friendly', 'fierce', 'fantastic', 'famous',
		'faithful', 'exuberant', 'happy', 'handsome', 'hilarious', 'healthy', 'grumpy', 'gorgeous', 'glamorous',
		'joyous', 'inquisitive', 'magnificent', 'lovely', 'lively', 'lazy', 'outrageous', 'nutty', 'mysterious',
		'pleasant', 'precious', 'puzzled', 'shiny', 'sleepy', 'smiling', 'sparkling', 'splendid', 'talented',
		'thoughtful', 'victorious', 'vivacious', 'witty', 'zany', 'crazy', 'defiant', 'enchanting', 'energetic',
		'innocent', 'jolly', 'itchy', 'kind', 'misty', 'nervous', 'obedient', 'perfect', 'poised',
		'quaint', 'relieved', 'tender', 'tame', 'wicked', 'outstanding', 'alert', 'attractive', 'clean',
	],
	// 100
	verbs: [
		'eating', 'sleeping', 'thinking', 'knowing', 'looking', 'giving', 'feeling', 'waving', 'jumping', 'walking',
		'working', 'helping', 'skating', 'surfing', 'flipping', 'climbing', 'fleeing', 'joking', 'trying', 'drinking',
		'talking', 'turning', 'trotting', 'sprinting', 'crawling', 'swimming', 'diving', 'flying', 'singing', 'winning',
		'playing', 'yelling', 'yelling', 'whispering', 'screeching', 'reading', 'running', 'living', 'writing', 'studying',
		'believing', 'moving', 'chilling', 'smoking', 'tiptoeing', 'dancing', 'spinning', 'teaching', 'standing', 'sitting',
		'losing', 'leading', 'growing', 'building', 'sliding', 'reaching', 'high-fiving', 'kissing', 'reporting', 'scanning',
		'sailing', 'fishing', 'hunting', 'polling', 'asking', 'fiending', 'advising', 'announcing', 'arguing', 'baking',
		'cooking', 'catching', 'complaining', 'counting', 'developing', 'programming', 'typing', 'jiving', 'expanding', 'folding',
		'hopping', 'hugging', 'hurrying', 'rushing', 'boolin', 'kicking', 'knitting', 'weaving', 'sewing', 'laughing',
		'chuckling', 'grumbling', 'napping', 'lying', 'leaving', 'observing', 'cleaning', 'performing', 'pursuing', 'skiing',
	]
}

const muuid = (opts) => {
	const components = ['adjective', 'color', 'verb', 'noun', 'number']
	let results = []
	const _opts = {
		format: [ 'adjective', 'color', 'verb', 'noun', 'number' ],
		quantity: 10,
		duplicateReport: false,
	}
	if (opts) {
		opts = {
			format: opts.format ? opts.format : _opts.format,
			quantity: opts.quantity ? opts.quantity : _opts.quantity,
			duplicateReport: opts.duplicateReport ? opts.duplicateReport : _opts.duplicateReport
		}
	} else {
		opts = {..._opts}
	}
	const generate = () => {
		let muuid = ''
		opts.format.forEach((component, i) => {
			if (component === 'number') {
				muuid += '' + Math.round(Math.random() * 100 + 1)
			} else {
				const words = rand[component + 's']
				muuid += words[[words.length * Math.random() | 0]]
			}
			if (i + 1 < opts.format.length) {
				muuid += '-'
			}
		})
		return muuid
	}
	for (let i = 1; i <= opts.quantity; i++) {
		results.push(generate())
	}

	if (opts.duplicateReport === true) {
		const counts = {};
		const report = [];
		results.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
		results.forEach((x) => {
			if (counts[x] > 1) {
				report.push({
					value: x,
					count: counts[x]
				})
			}
		})
		if (report.length > 0) {
			console.info('------------------------------------------------------------------')
			console.info(`${report.length} duplicates reported: `, report)
		}
		console.info('\n------------------------------------------------------------------')
		console.info(`${((report.length / results.length) * 100).toPrecision(2)}% of generated values were duplicates`)
		console.info('------------------------------------------------------------------')
	}
	return results
}

module.exports = muuid
