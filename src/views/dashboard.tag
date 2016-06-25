<dashboard>
    <dashboard-graph ecosystem={ecosystem}></dashboard-graph>
    <script>
    this.ecosystem = 1
    this.on('mount', () => {
        Z.dispatcher.on('set:ecosystem', (ecosystem) => {
            this.update({
                ecosystem
            })
        })
    })
    </script>
</dashboard>
