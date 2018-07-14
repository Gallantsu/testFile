<template>
	<input type="text"   v-bind:value="value"   >
</template>

<script>
	export default {		
		created:function() {
			console.log(this)
		},
		 props: {
    		value: String
  		},
	}
</script>

<style>
	
</style>