<template>
	<div>
		<button v-on:click="show=!show" class="beatyBtn royal">动画测试</button>
		<div  style="width:500px;height:300px">
			<transition name="fade">
					<img v-show="show" width="500" src="../assets/tree.png" alt="tree">
			</transition>	
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show:true
			}
		},
		methods:{

		}

	}
</script>

<style lang="scss" > 
	.fade-enter-active, .fade-leave-active {
  		transition: opacity 2s;
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	}
</style>