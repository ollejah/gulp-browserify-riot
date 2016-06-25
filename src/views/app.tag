<app>
    <h1>App</h1>

    <div onclick={ onClick }>
        { getValue('aaa') }
    </div>

    <script>
    import moment from 'moment'

    setValue = arg => {
        console.log(arg)
    }

    getValue = val => {
        console.log('This value: ' + val)
    }

    this.onClick = e => {
        console.log(e)
    }

    this.listen('model-update', opts => {
        console.log(opts)
    })
    </script>
</app>
