<template>
	<div>
		<div class="dycComponent">
			<ul >
				<li :class="{active:active1}" @click="changeTab(1)">Tab 1</li>
				<li :class="{active:active2}" @click="changeTab(2)">Tab 2</li>
			</ul>
			<div class="component" v-bind:is="componentContent" >
				
			</div>
		</div>
	</div>
</template>

<script> 
import componentOne from './ComponentOne'
import componentTwo from './ComponentTwo'
	
	export default {
		data(){
			return {
				active1:true,

				componentContent:"componentOne"
			}
		},
		methods:{
			changeTab(num){
				this["active" + num] = true;
				if(num==1){
					this.componentContent = "componentOne";
				}else{
					this.componentContent = "componentTwo";
				}
			}
		},
		computed:{
			active2:{
				get(){
					return !(this.active1);
				},
				set(newValue){
					if(newValue){
						this.active1 = false;
					}
				}
			},
			
		},
		components:{
			componentOne,
			componentTwo
		}
	}
</script>

<style lang="scss" >
	.dycComponent ul{
		margin:0px;
		padding:0px;
		list-style:none;
		li{
			display:inline-block;
			width:50px;
			height:40px;
			line-height:40px;
			border:1px solid #beb9b9;
			float:left;
			text-align:center;
			cursor:pointer;
			margin:0px;
			background-color:#f0f0f0;
		}
		li:hover{
			background-color:#e0e0e0;
		}
		.active{
			background-color:#e0e0e0;
		}

	}
	.component{
			clear:both;
			width:500px;
			height:50px;
			border:1px solid #beb9b9;
	}


</style>