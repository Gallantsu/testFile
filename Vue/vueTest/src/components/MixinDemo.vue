<template>
	<div>
		<p>混入测试1</p>
		<input type="text" v-focus>
	</div>
</template>

<script>

	const mixin = {
		data(){
			return {
				name:"lily",
				age:17
			}
		}
	}
	export default {
		data(){
			return {
				age:15
			}
		},
		created(){
			console.log(this.$data);
		},
		mixins:[mixin]
	}
</script>

<style>
	
</style>