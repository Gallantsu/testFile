<template>
	<div>
		<div class="alertBox">
			<slot name="title"></slot>
			<section>
				<slot name="content"></slot>
			</section>
			<div class="btnSection">
				<button class="beatyBtn primary" @click="$emit('ok-fun')" >确定</button>
				<button class="beatyBtn danger" @click="$emit('ok-fun')" >取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	
export default {

	data(){
		return {
			
		}
	},
	props:{
		title:{
			type:String,
			default:"标题"
		}
	}


}


</script>


<style lang="scss">
	
 .alertBox{
      width:400px;
      height:130px;
      border:1px solid #f0f0f0;
      border-radius:5px;
      box-shadow:3px 3px 15px #888888;
      background-color:white;
      position:absolute;
      top:200px;
      left:500px;
      z-index:10;
      h3{
      	margin:0px;
      	padding:0px;
      	height:30px;
      	text-align:center;
      	line-height:30px;
      	background-color:#f0f0f0;
      }
      section{
      	height:50px;
      	text-align:center;
      }
      .btnSection{
      	padding-top:10px;
      	text-align:center;
      	button:nth-child(2){
      		margin-left:10px;
      	}
      }
      .primary{
      	    background-color: #007aff;
    		border: 1px solid #007aff;
      }
      .danger{
      	    background-color: #dd524d;
   			 border: 1px solid #dd524d;
      }
} 

</style>