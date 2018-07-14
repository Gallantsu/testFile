<template>
	<div>
		这是组件1
		<button @click="printParent" >打印$parent</button>
	</div>
</template>

<script>
	export default {		
		created:function() {
			console.log(this)
		},
		 props: {
    		value: String
  		},
  		methods:{
  			printParent(){
  				console.log(this.$parent);
  			}
  		}
	}
</script>

<style>
	
</style>