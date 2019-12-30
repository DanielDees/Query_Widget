// Wrapper for full query. This cannot be deleted
Vue.component('query-main', {
	props: {
		title: { required: true }
	},
	data: {
		query_items: []
	},
	methods: {
		add_query_item() {
			this.data.query_items.push(/*New query-item here*/);
		}
	},
	template: `
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title text-center">{{ title }}<query-item-buttons></query-item-buttons></h5>
				
				<ul class="list-group list-group-flush">
					
					<slot></slot>
				</ul>
			</div>
		</div>
	`
});

// Contains each row/item in the query the user will modify
Vue.component('query-item', {
	data: {
		query_items: []
	},
	methods: {
		add_query_item() {
			this.data.query_items.push(/*New query-item here*/);
		}
	},
	template: `<li class="list-group-item"><slot></slot><button>(-)</button><button v-on:click="add-query-item">(+)</button></li>`
	
});

Vue.component('query-item-buttons', {

	data: {
		add: true,
		remove: true
	},
	template: `
		<div><button v-on:click="remove-query-item">(-)</button>
		<button v-on:click="add-query-item">(+)</button>
		</div>
	`

});

new Vue({
	el: '#root'
});