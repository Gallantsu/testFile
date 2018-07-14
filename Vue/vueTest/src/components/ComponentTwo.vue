<template>
	<div>
		这是组件2
	</div>
</template>

<script>
	export default {		
		created:function() {
			console.log(this);
		},
		 props: {
    		value: String
  		},
	}
</script>

<style>
	
</style>