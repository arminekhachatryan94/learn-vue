/*
any vue instance has the ability to listen and emit events
$emit --> emit
$on --> listen
*/

/* not limited to parent child communication */


// window.Event = new Vue();


/* if you don't like using $emit */

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }
    
    fire(event, data = null) {
        this.vue.$emit(event, data);
    }
    
    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
    
    methods: {
        onCouponApplied() {
            /*
            this.$emit('applied');
            */
            /* when the applied event is fired, then respond */
            /*
            this.$on('applied', function () {
                
            });
            */
            
            /*
            Event.$emit('applied');
            */
            
            Event.fire('applied');
            
        }
    }
});

new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },
    
    created() {
        /*
        Event.$on('applied', () => alert('Handling it!'));
        */
        
        Event.listen('applied', () => alert('Handling it!'));
        
    }
});