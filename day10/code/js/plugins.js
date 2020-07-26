(function(){
    const myPlugin = {};

    myPlugin.install = function(Vue, options){
        //1. 添加全局方法
        Vue.myGlobalMethod = function(){
            alert('myPlugin---全局方法生效');
        }
        //2. 添加全局指令
        Vue.directive('my-dir', function(el, binding){
            el.innerHTML = "myPlugin插件 my-dir:" + binding.value
        });

        //3. 添加实例方法

        Vue.prototype.$myMethod = function(methodOption){
            alert('Vue 实例方法: ' + methodOption);
        }
        console.log(options);
    }

    window.myPlugin = myPlugin;
})();