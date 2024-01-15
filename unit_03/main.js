let vueApp = new Vue({
    el: "#vueApp",
    data: {
        // ros connection
        ros: null,
        rosbridge_address: 'wss://i-053f1aa0e37676014.robotigniteacademy.com/b9862d3f-bbba-434e-8ba2-2b6465b66f60/rosbridge/', // change to your own address
        // page content
        menu_title: 'My menu title',
        main_title: 'Main title, from Vue!!',
    },
    mounted() {
        // page is ready
        console.log('page is ready!')

        // define ROSBridge connection object
        this.ros = new ROSLIB.Ros({
            url: this.rosbridge_address
        })

        // define callbacks
        this.ros.on('connection', () => {
            console.log('Connection to ROSBridge established!')
        })
        this.ros.on('error', (error) => {
            console.log('Something went wrong when trying to connect')
            console.log(error)
        })
        this.ros.on('close', () => {
            console.log('Connection to ROSBridge was closed!')
        })
    },
})