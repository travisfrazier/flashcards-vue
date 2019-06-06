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
                    <p v-show="!flipped" class="card" key="front">
                        {{ front }}
                        <span class="delete-card">X</span>
                    </p>
                   <p v-show="flipped" class="card" key="back">
                        {{ back }}
                        <span class="delete-card">X</span>
                    </p>
                </li>
    `,
	methods: {
		flipCard(flipped) {
			this.$emit('clicked', flipped);
		}
	}
});

new Vue({
	el: '#flashcard-app',
	data: {
		cards: cards
	},
	methods: {
		flipCard(flipped) {
			flipped.flipped = !flipped.flipped;
		}
	}
});
