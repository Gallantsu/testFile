<template>
	<input type="checkbox"   v-bind:checked="checked" v-on:click="$emit('change', $event.target.checked)" >
</template>

<script>
	export default {		
		created:function() {
			console.log(this)
		},
		 props: {
    		checked: Boolean
  		},
		model:{
			prop:"checked",
			event:"change"
		}
	}
</script>

<style>
	
</style>