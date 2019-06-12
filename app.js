const cards = [
	{
		front: 'What are JavaScript Data Types?',
		back: 'Number, String, Boolean, Object, Undefined',
		flipped: false
	},
	{
		front: 'Which company developed JavaScript?',
		back: 'Netscape is the software company',
		flipped: false
	},
	{
		front: 'What is "this" keyword in JavaScript?',
		back: '"This" keyword refers to the object from where it was called',
		flipped: false
	},
	{
		front: 'Which symbol is used for comments in Javascript?',
		back: '// for single line and /* for multi',
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
