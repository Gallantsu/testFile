<template>
	<div>
		<form action="POST">
			<ul class="list">
				<li>
					<strong>用户名:</strong>
					<input type="text" v-model.trim="name" placeholder="请输入学生名" />
				</li>
				<li>
					<strong>年龄:</strong>
					<input type="number" v-model.number="age" placeholder="请输入学生年龄" @keyup.enter="addList"/>
				</li>
				<li>
					<strong>性别:</strong>
					<input type="radio" name="sex" v-model="sex" value="male" id="male" checked ><label for="male">男</label>
					<input type="radio" name="sex" v-model="sex" id="female"><label for="female">女</label>
				</li>
			</ul>
			<div>
				<input v-bind:class="inputClsObj" v-on:click="addList" type="button" value="增加">
				<input type="button" value="切换" v-on:click.self.prevent="changeColor">
			</div>
			<div :style="[color]" >{{now}}</div>
			<h3 v-if="isGreen" style="color:green">这是绿色Title</h3>
			<h3 v-else style="color:orange;">这是橙色Title</h3>
		</form>
		<table-com  v-bind:block="sex" v-on:deleteItem="deleteStudent" v-bind:items="studentList" v-bind:itemsHeader="studentHeader" :itemsKeys="studentKeys"></table-com>
		<div>
			<template v-for="item in studentList">
				<strong>{{item.name}}</strong>:
				<span>{{item.age}}</span>;
			</template>
		</div>
    
    <h2>Slot Test</h2> 
    <hr>
    <button v-on:click="showAlert" class="beatyBtn royal">Slot 测试</button>
    <slot-test @ok-fun="hideAlert" v-show="alertShow" class="cover" :title="title">
        <template slot="title">
            <h3>
                {{title}}
            </h3>
        </template>
        <template slot="content">
            <span class="content">你需要关闭吗？</span>
        </template>
    </slot-test> 

     <h2>动态组件测试</h2> 
    <hr>
    <dynamic-component></dynamic-component>

    <h2>动画组件测试</h2> 
    <hr>
    <animate-demo></animate-demo>
    <h2>混入测试</h2> 
    <hr>
    <mixin-demo></mixin-demo> 
     <h2>函数化组件测试</h2> 
    <hr>
    <input type="number" v-model="titleLevel" >
    <functional-component v-bind:level="titleLevel" >Hello world!</functional-component>
	</div>
</template>

<script>
	import tableCom from './Table'
  import slotTest from './SlotTest'
  import dynamicComponent from './DynamicComponent'
  import animateDemo from './AnimateDemo'
  import mixinDemo from './MixinDemo'


    export default {
      data(){
      	return {
      		name:'',
      		age:'',
      		sex:"male",
      		isGreen:true,
      		studentHeader:["序号","姓名","年龄","性别","操作"],
      		studentKeys:["name","age","sex"],
      		studentList:[
      			{name:'苏勇',age:29,sex:"男"},
      			{name:'顾从',age:27,sex:"男"},
      			{name:'散三',age:21,sex:"男"},
      			{name:'绿映叶',age:19,sex:"男"},
  				  {name:'暗阁',age:29,sex:"男"},
  			 ],

          title:"提示",
          alertShow:false,
          titleLevel:1

      	}
      },
      components:{
		    tableCom,
        slotTest,
        dynamicComponent,
        animateDemo,
        mixinDemo
      },
      methods:{
      	addList(){
      		let sex = this.sex;
      		let sexMark = "";
      		if(sex == "male"){
			      sexMark = "男";
      		}else{
      			sexMark = "女";
      		}
      		this.studentList.push({
      			name:this.name,
      			age:this.age,
      			sex:sexMark
      		});
      		this.name = "";
      	 	this.age = "";
  			   this.sex = "male";
      	},
  		  changeColor(){
  			   this.isGreen = !this.isGreen;
  		  },
    		deleteStudent(idx){
    			 this.studentList.splice(idx,1);
    		},

        showAlert(){
          this.alertShow = true;
        },
        hideAlert(){
          this.alertShow = false;
        }

      },
      computed:{
    		reverseName(){
  			return this.name.split('').reverse().join('');
  			
    		},
    		now(){
    			return new Date();
    		},
    		inputClsObj(){
    			return {
  	  			greenInput:this.isGreen,
  	  			redInput:!(this.isGreen)
    			}
    		},
    		color(){
    			return {
    				color:"red"
    			}
    		}
  		
      }
    }
</script>

<style lang='scss'>
  	.list{
  		list-style: none;
  		margin:0px;
  		padding:0px;
  		li{
  			height:40px;
  			line-height:40px;
  			strong{
  				width:60px;
  				display:inline-block;
  			}
  		}
  	}
  	input[type=button]{
  		width:100px;
		  height:30px;
  		border:none;
		  border-radius:5px;
		  color:white;
		  outline:none;
		  cursor:pointer;
  	}
  	.greenInput{
		    background-color:#38a638;
  	}
  	.greenInput:hover{
		    background-color:green;
  	}
  	.redInput{
		    background-color:#ff7b7b;
  	}
  	.redInput:hover{
		    background-color:#fe1111;
  	}
	 
	   .cover{
        height:100%;
        width:100%;
        background-color:rgba(81, 79, 79, 0.5);
        z-index:5;
        position:fixed;
        top:0;
        left:0;
     }
     .beatyBtn{
        color: #fff;
        position: relative;
        display: inline-block;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42;
        text-align: center;
        white-space: nowrap;
        vertical-align: top;
        cursor: pointer;
        border-radius: 3px;
        outline:none;
     }
     .royal{
         background-color: #8a6de9;
          border: 1px solid #8a6de9;
     }
     .content{
        margin-top:20px;
        display:inline-block;
     }
</style>