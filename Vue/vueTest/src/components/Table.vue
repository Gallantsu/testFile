<template>
	<div>
		<table class="studentTable" >
			<tr>
				<th v-for="value in itemsHeader">{{value}}</th>
			</tr>
			<tr v-for="(item,index) in items" v-bind:class="{little:item.age<20}" :key="item.index">
				<td>{{index+1}}</td>
				<td v-for="key in itemsKeys">{{item[key]}}</td>
				<td>
					<input class="delete" value="删除" type="button" v-on:click="$emit('deleteItem',index)">
				</td>
			</tr>
		</table>
		<test  v-model="answer"  ></test>{{answer}}
		<br>
		<input-text v-model="testName" ref="testName"  v-on:focus="test1" ></input-text>
		<input type="text" ref="childInput">
		<button @click="printChildComponent">处理边界情况访问子组件测试</button>
	</div>
</template>
<script>
	import Test from './test';
	import inputText from './InputText'
	export default{
		data(){
			return {
				answer:true,
				testName:"11dsdsd"
			}
		},
		inheritAttrs: false,
		methods:{
			test1(){
				alert(1);
			},
			printChildComponent(){
				console.log(this.$refs.testName);
				console.log(this.$refs.childInput.focus());
			}
			/*deleteItem(idx){
				this.items.splice(idx,1);
			}*/
       	},
       	props:{
       		items:Array,
       		itemsHeader:Array,
       		itemsKeys:Array
       	},
       	created:function(){
       		console.log(this)
       	},
       	components:{
       		Test,
       		inputText
       	}


	}
</script>

<style lang="scss">
	.studentTable{
		border-collapse: collapse;
		border:1px solid #ddd;
		width:600px;
		th{
			border:1px solid #ddd;
			height:25px;
			font-weight:bold;
		}
		td{
			border:1px solid #ddd;
			text-align:center;
			height:25px;
			.delete{
				background-color:#338b76;
				height:25px;
				width:80px;
				display:inline-block;
				
			}
			.delete:hover{
				background-color:green;
			}
		}
	}
	.little{
		background-color:#b4d7b4;
	}
</style>