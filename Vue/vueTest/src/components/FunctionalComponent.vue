

<script>
	export default {
		render:function(createElement,context){
			return createElement(
				'h'+this.level,
				  this.$slots.default
				)
		},
		props:{
			level:{
				type:Number,
				require:true,
				default:3
			}
		}
	}
</script>
<style>
	
</style>