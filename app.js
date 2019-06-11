const cards = [
	{
		front: 'Programming language used in the DOM',
		back: 'JavaScript',
		flipped: false
	},
	{
		front: 'JavaScript framework built by the FaceBook team',
		back: 'React and React Native',
		flipped: false
	},
	{
		front: 'Who was the first president?',
		back: 'George Washington',
		flipped: false
	},
	{
		front: 'What whale has a nose like a Unicorn?',
		back: 'Narwhals of the Artic Ocean',
		flipped: false
	}
];

Vue.component('flashcard', {
	props: ['front', 'back', 'flipped'],
	template: `
				<li v-on:click="flipCard">
					<transition-group name="flip">
						<p v-show="!flipped" class="card" key="front">
							{{ front }}
							<span v-on:click="deleteCard(index)" class="delete-card">X</span>
						</p>
						<p v-show="flipped" class="card" key="back">
							{{ back }}
							<span v-on:click="deleteCard(index)" class="delete-card">X</span>
						</p>
					</transition-group>
                </li>
    `,
	methods: {
		flipCard(card) {
			this.$emit('clicked', card);
		},
		deleteCard() {
			this.$emit('delete');
		}
	}
});

new Vue({
	el: '#flashcard-app',
	data: {
		cards: cards,
		newFront: '',
		newBack: '',
		error: false
	},
	methods: {
		flipCard(card) {
			card.flipped = !card.flipped;
		},
		addCard(e) {
			e.preventDefault();
			if (!this.newFront && !this.newBack) {
				this.error = true;
			} else {
				this.cards.push({
					front: this.newFront,
					back: this.newBack,
					flipped: false
				});
				this.newFront = '';
				this.newBack = '';
				this.error = false;
			}
		}
	}
});
